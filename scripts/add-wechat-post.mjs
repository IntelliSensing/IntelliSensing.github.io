#!/usr/bin/env node
/**
 * Turn a WeChat Official Account article into a news (or blog) entry.
 *
 * Usage:
 *   node scripts/add-wechat-post.mjs <mp.weixin.qq.com URL> [options]
 *
 * Options:
 *   --slug <slug>              file name to use (default: derived from the article id)
 *   --section news|blogs       target collection (default: news)
 *   --areas a,b                researchAreas (default: remote-sensing)
 *   --tags a,b                 extra tags (default: WeChat)
 *   --title / --desc / --date  override what was scraped
 *   --dry                      print the frontmatter, write nothing
 *
 * WeChat serves article covers from mmbiz.qpic.cn behind a Referer check, so the
 * cover is downloaded into public/assets/news/ instead of being hot-linked.
 */
import { writeFile, mkdir } from 'node:fs/promises';
import path from 'node:path';

const UA =
  'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

const args = process.argv.slice(2);
const url = args.find((a) => a.startsWith('http'));
const flag = (name, fallback) => {
  const i = args.indexOf(`--${name}`);
  return i === -1 ? fallback : args[i + 1];
};

if (!url) {
  console.error('Usage: node scripts/add-wechat-post.mjs <mp.weixin.qq.com URL> [--slug x] [--section news|blogs] [--areas a,b] [--dry]');
  process.exit(1);
}

const section = flag('section', 'news');
const dry = args.includes('--dry');

const pick = (html, ...patterns) => {
  for (const re of patterns) {
    const m = html.match(re);
    if (m && m[1]) return m[1].trim();
  }
  return '';
};

const decode = (s) =>
  s
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();

const res = await fetch(url, { headers: { 'User-Agent': UA } });
if (!res.ok) {
  console.error(`Failed to fetch article: HTTP ${res.status}`);
  process.exit(1);
}
const html = await res.text();

if (/环境异常|完成验证后即可继续访问|该内容已被发布者删除/.test(html)) {
  console.error('WeChat returned a verification / deleted-article page instead of the article.');
  process.exit(1);
}

const title = flag('title', decode(pick(
  html,
  /<meta property="og:title" content="([^"]+)"/,
  /var msg_title\s*=\s*'([^']+)'/,
  /<h1[^>]*class="rich_media_title"[^>]*>([\s\S]*?)<\/h1>/
).replace(/<[^>]+>/g, '')));

const description = flag('desc', decode(pick(
  html,
  /<meta property="og:description" content="([^"]+)"/,
  /var msg_desc\s*=\s*"([^"]*)"/
)));

const cover = pick(
  html,
  /<meta property="og:image" content="([^"]+)"/,
  /var msg_cdn_url\s*=\s*"([^"]+)"/,
  /var cdn_url\s*=\s*"([^"]+)"/
).replace(/&amp;/g, '&');

const ts = pick(html, /var ct\s*=\s*"(\d+)"/, /var create_time\s*=\s*"(\d+)"/);
const date =
  flag('date', ts ? new Date(Number(ts) * 1000).toISOString().slice(0, 10) : new Date().toISOString().slice(0, 10));

const slug = flag('slug', `wechat-${(url.match(/\/s\/([\w-]+)/)?.[1] ?? Date.now()).slice(0, 24).toLowerCase()}`);

if (!title) {
  console.error('Could not read a title from the page — pass --title "..." explicitly.');
  process.exit(1);
}

// Download the cover; mmbiz.qpic.cn 403s without a mp.weixin.qq.com referer.
let image = '/assets/cards/publication-blue.png';
if (cover && !dry) {
  const imgRes = await fetch(cover, {
    headers: { 'User-Agent': UA, Referer: 'https://mp.weixin.qq.com/' }
  });
  if (imgRes.ok) {
    const type = imgRes.headers.get('content-type') ?? '';
    const ext = type.includes('png') ? 'png' : type.includes('webp') ? 'webp' : 'jpg';
    const rel = `/assets/news/${slug}.${ext}`;
    await mkdir('public/assets/news', { recursive: true });
    await writeFile(path.join('public', rel), Buffer.from(await imgRes.arrayBuffer()));
    image = rel;
    console.log(`cover -> public${rel}`);
  } else {
    console.warn(`cover download failed (HTTP ${imgRes.status}), falling back to ${image}`);
  }
}

const yaml = (s) => `"${String(s).replace(/"/g, '\\"')}"`;
const list = (v) => `[${v.split(',').map((x) => yaml(x.trim())).join(', ')}]`;

const areas = list(flag('areas', 'remote-sensing'));
const tags = list(flag('tags', 'WeChat'));

const frontmatter =
  section === 'blogs'
    ? `---
title: ${yaml(title)}
description: ${yaml(description || title)}
pubDate: ${date}
category: "WeChat"
tags: ${tags}
researchAreas: ${areas}
image: ${image}
externalUrl: ${yaml(url)}
draft: false
---

`
    : `---
title: ${yaml(title)}
titleZh: ${yaml(title)}
description: ${yaml(description || title)}
descriptionZh: ${yaml(description || title)}
pubDate: ${date}
tags: ${tags}
researchAreas: ${areas}
image: ${image}
externalUrl: ${yaml(url)}
draft: false
---

`;

const out = path.join('src/content', section, `${slug}.md`);
if (dry) {
  console.log(`# would write ${out}\n`);
  console.log(frontmatter);
} else {
  await writeFile(out, frontmatter);
  console.log(`wrote ${out}`);
}
