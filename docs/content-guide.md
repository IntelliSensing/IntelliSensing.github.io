# IntelliSensing Lab 内容维护指南

本指南说明如何维护人员、发表物、新闻、博客、照片墙以及网站级文案和链接。所有内容修改完成后，都应先在本地检查，再推送到 GitHub。

## 1. 通用流程

1. 将图片放到 `public/assets/` 下对应目录。
2. 添加或修改数据文件。
3. 运行 `npm run check`，确认字段和类型正确。
4. 运行 `npm run build`，确认全部静态页面能生成。
5. 本地打开相关列表页和详情页，检查文字、图片、链接和中英文切换。
6. 提交并推送到 `master`，等待 GitHub Actions 部署完成。

图片路径统一从网站根目录开始。例如文件：

```text
public/assets/team/zhang-san.jpg
```

在数据中写成：

```text
/assets/team/zhang-san.jpg
```

文件名建议只使用小写英文字母、数字和连字符，例如 `zhang-san.jpg`。不要使用空格和中文文件名。

## 2. 研究方向键值

论文、新闻和博客都必须通过 `researchAreas` 关联到 Research 页面。当前可用键值为：

| 键值 | 研究方向 |
| --- | --- |
| `multimodal-agents` | Multi-modal LLMs & Agents |
| `few-zero-shot` | Few-shot / Zero-shot Learning |
| `vision-language` | Vision-Language Understanding |
| `remote-sensing` | Remote Sensing Intelligence |

一条内容可以属于多个方向：

```yaml
researchAreas:
  - "multimodal-agents"
  - "remote-sensing"
```

键值必须完全一致。拼写错误会让 `npm run check` 或 `npm run build` 失败。

## 3. 添加人员

人员统一维护在：

```text
src/data/team.ts
```

头像建议放在：

```text
public/assets/team/
```

在 `team` 数组中增加一个对象：

```ts
{
  slug: 'zhang-san',
  name: 'San Zhang',
  nameZh: '张三',
  publicationNames: ['San Zhang', 'Zhang San', 'S. Zhang'],
  role: 'PhD Student',
  roleZh: '博士生',
  img: '/assets/team/zhang-san.jpg',
  desc: 'Research interests in multimodal learning and remote sensing.',
  descZh: '研究方向为多模态学习与遥感智能。',
  email: 'example@bupt.edu.cn',
  github: 'https://github.com/example',
  scholar: 'https://scholar.google.com/citations?user=example',
  homepage: 'https://example.com',
  honors: [],
  honorsZh: [],
  personal: '',
  personalZh: '',
},
```

字段说明：

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `slug` | 是 | 详情页地址，例如 `zhang-san` 对应 `/our-team/zhang-san/`；必须唯一 |
| `name` | 是 | 英文姓名，也是论文作者匹配名称之一 |
| `nameZh` | 否 | 中文姓名 |
| `publicationNames` | 否 | 论文中可能出现的其他署名形式 |
| `role` / `roleZh` | 是 | 英文和中文身份 |
| `img` | 是 | 头像路径 |
| `desc` / `descZh` | 是 | 英文和中文简介 |
| `email` | 否 | 邮箱 |
| `github`、`scholar`、`homepage` 等 | 否 | 个人链接；没有真实链接时应删除字段，不要保留示例链接 |
| `honors` / `honorsZh` | 是 | 荣誉数组；没有内容时写 `[]` |
| `personal` / `personalZh` | 是 | 个人介绍；没有内容时写空字符串 `''` |

可选社交字段还包括 `x`、`huggingface`、`linkedin`、`facebook`、`instagram`、`wechat`、`weibo` 和 `bilibili`。

### 人员与论文自动关联

人员详情页不需要手动维护论文列表。系统会读取每篇论文的 `authors`，并与人员的以下字段匹配：

```text
name
nameZh
publicationNames
```

匹配时会忽略大小写、重音符号和常见标点，但不会猜测姓名缩写。因此，论文使用 `Wenjia Xu`，人员数据中至少要有完全对应的 `Wenjia Xu`；如果论文还可能写成 `W. Xu`，就将它加入 `publicationNames`。

## 4. 添加发表物

每篇论文对应一个 Markdown 文件，放在：

```text
src/content/publications/
```

文件名会成为页面地址。例如 `my-paper.md` 对应 `/publications/my-paper/`。

完整示例：

```md
---
title: "Paper title"
description: "A concise one-sentence summary of the work."
pubDate: 2026-07-30
venue: "CVPR 2026"
authors:
  - "San Zhang"
  - "Wenjia Xu"
tags:
  - "CVPR 2026"
  - "Multimodal Learning"
researchAreas:
  - "multimodal-agents"
  - "remote-sensing"
image: "/assets/publications/my-paper.jpg"
projectUrl: "https://example.com/my-paper"
paperUrl: "https://arxiv.org/abs/0000.00000"
codeUrl: "https://github.com/example/my-paper"
links:
  - label: "Video"
    url: "https://example.com/my-paper/video"
draft: false
---

这里写论文摘要、主要方法、BibTeX 或其他详情。支持 Markdown。
```

必填字段是 `title`、`description`、`pubDate`、`venue`、`authors`、`tags`、`researchAreas` 和 `image`。`authors` 中的名字决定论文是否自动出现在某位成员的详情页。

可选字段：

- `projectUrl`：已有的外部论文项目主页；填写后，卡片可以直接跳转到该网页。
- `paperUrl`：论文或 arXiv 链接；没有项目主页时，卡片可以直接跳转到这里。
- `codeUrl`：代码链接，必须是完整 URL。
- `links`：其他辅助链接，可添加数据集、视频、补充材料等。
- `draft`：是否为草稿，默认 `false`。
- `paperSite`：使用独立论文项目站，普通论文不要填写。

### 论文卡片点击规则

首页、Publications、Research 和成员详情页中的论文卡片使用同一套跳转规则，按下面的顺序选择目标：

1. 填写了 `paperSite`：进入仓库 `public/paper-sites/` 中的独立论文网页。
2. 没有 `paperSite`，但填写了 `projectUrl`：直接跳转到外部项目主页。
3. 只填写了 `paperUrl`：直接跳转到论文网页或 arXiv。
4. 三项都没有：进入网站根据该 Markdown 自动生成的普通论文详情页。

因此，如果论文在其他地方已经有网页，推荐只填写：

```yaml
projectUrl: "https://已有的项目主页地址"
paperUrl: "https://arxiv.org/abs/论文编号"
```

卡片会优先打开 `projectUrl`。如果没有项目主页、不想另外制作网页，则只填写 `paperUrl`，卡片会直接打开 arXiv 或论文地址。

### 使用仓库中的论文网页模板

如果论文目前没有项目主页，但希望制作一个完整的论文展示网页，可以使用：

```text
public/paper-sites/
```

该目录下已有可参考的论文网站模板。建议按以下步骤操作：

1. 选择一个合适的现有模板目录。
2. 完整复制该目录，并将副本改成论文自己的名称，例如 `my-paper-site`。
3. 修改副本中的 `index.html`、图片、视频、论文链接、作者和文字内容，不要直接覆盖原模板。
4. 保持 CSS、JavaScript 和图片的相对目录结构一致。
5. 在论文 Markdown 的 frontmatter 中填写：

```yaml
paperSite: my-paper-site
```

最终必须存在：

```text
public/paper-sites/my-paper-site/index.html
```

`paperSite` 名称只允许英文字母、数字、连字符和下划线。点击该论文卡片后，网站会自动载入这套独立页面。

### 自动生成普通详情页

如果既没有制作独立论文站，也没有填写 `projectUrl` 或 `paperUrl`，网站仍然可以根据 Markdown 生成普通详情页：

- frontmatter 显示标题、作者、发表会议、日期、标签和封面图。
- `---` 后面的 Markdown 正文显示摘要、方法、BibTeX 等详细内容。
- 页面地址为 `/publications/<文件名>/`。

## 5. 添加新闻

新闻文件放在：

```text
src/content/news/
```

示例：

```md
---
title: "IntelliSensing Lab at CVPR 2026"
titleEn: "IntelliSensing Lab at CVPR 2026"
titleZh: "IntelliSensing Lab 参加 CVPR 2026"
description: "Our team presented new work at CVPR 2026."
descriptionEn: "Our team presented new work at CVPR 2026."
descriptionZh: "团队在 CVPR 2026 展示了最新研究成果。"
pubDate: 2026-06-20
tags:
  - "Conference"
  - "CVPR 2026"
researchAreas:
  - "vision-language"
image: "/assets/news/cvpr-2026.jpg"
draft: false
---

这里写完整新闻正文，支持 Markdown。
```

`title` 和 `description` 是必填的默认文本。为了正确支持语言切换，建议同时填写 `titleEn`、`titleZh`、`descriptionEn` 和 `descriptionZh`。首页 Featured News 会自动选取日期最新的 5 条非草稿新闻。

## 6. 添加博客

博客文件放在：

```text
src/content/blogs/
```

示例：

```md
---
title: "How We Evaluate Remote-Sensing Agents"
description: "Notes on evaluation protocols for multimodal agents in Earth observation."
pubDate: 2026-07-30
category: "Remote Sensing"
tags:
  - "Agents"
  - "Evaluation"
researchAreas:
  - "multimodal-agents"
  - "remote-sensing"
image: "/assets/blogs/remote-sensing-agents.jpg"
draft: false
---

# How We Evaluate Remote-Sensing Agents

这里开始写博客正文。可以使用标题、列表、图片、链接和代码块等 Markdown 语法。
```

`category` 是卡片上显示的主要分类。首页 Latest Blogs 会自动选取日期最新的 3 篇非草稿博客。

## 7. 添加照片墙与地球足迹

首页的 **Moments across Earth** 照片墙与 Earth Explorer 地球标记使用同一份数据：

```text
src/content/markers/
```

每个 Markdown 文件代表一个地点或一次活动。文件名是该条目的唯一 ID，例如：

```text
src/content/markers/cvpr-2026.md
```

添加后会自动完成以下关联：

- 首页照片墙按 `date` 从新到旧读取条目并自动来回滚动。
- 照片墙默认显示 `images` 中的第一张图片。
- 鼠标移到图片上会显示分类、日期、标题和描述。
- 点击照片墙卡片会打开 Earth Explorer，并定位到该文件中的 `lng`、`lat`。
- 地球标记弹窗会轮播 `images` 中的全部图片。

### 存放图片

建议将同一次活动的图片放入一个独立目录：

```text
public/assets/moments/cvpr-2026/
```

例如：

```text
public/assets/moments/cvpr-2026/group-photo.jpg
public/assets/moments/cvpr-2026/presentation.jpg
public/assets/moments/cvpr-2026/venue.jpg
```

在 Markdown 中使用从 `/assets/` 开始的路径，不要写 `public`：

```yaml
images:
  - "/assets/moments/cvpr-2026/group-photo.jpg"
  - "/assets/moments/cvpr-2026/presentation.jpg"
  - "/assets/moments/cvpr-2026/venue.jpg"
```

第一张图片是照片墙封面，建议选择主体清晰、适合横向裁切的照片。照片墙会将图片裁切为接近 `16:10` 的比例，因此重要人物和内容不要贴近图片边缘。

### 完整示例

在 `src/content/markers/` 中新建 `cvpr-2026.md`：

```md
---
title: "CVPR 2026 - Denver"
titleEn: "CVPR 2026 - Denver"
titleZh: "CVPR 2026 - 丹佛"
description: "Our team presented its latest work at CVPR 2026."
descriptionEn: "Our team presented its latest work at CVPR 2026."
descriptionZh: "团队在 CVPR 2026 展示了最新研究成果。"
category: "conference"
categoryEn: "Conference"
categoryZh: "学术会议"
lng: -104.9903
lat: 39.7392
images:
  - "/assets/moments/cvpr-2026/group-photo.jpg"
  - "/assets/moments/cvpr-2026/presentation.jpg"
author: "IntelliSensing Lab"
date: 2026-06-18
draft: false
---
```

字段说明：

| 字段 | 是否必填 | 说明 |
| --- | --- | --- |
| `title` | 是 | 默认标题 |
| `titleEn` / `titleZh` | 否但推荐 | 英文和中文标题，用于语言切换 |
| `description` | 是 | 默认简介 |
| `descriptionEn` / `descriptionZh` | 否但推荐 | 英文和中文简介 |
| `category` | 是 | 默认分类，例如 `conference`、`fieldwork` 或 `team` |
| `categoryEn` / `categoryZh` | 否但推荐 | 照片墙上显示的双语分类 |
| `lng` | 是 | 经度，范围为 `-180` 到 `180` |
| `lat` | 是 | 纬度，范围为 `-90` 到 `90` |
| `images` | 是 | 图片数组，至少填写一张；第一张是照片墙封面 |
| `author` | 是 | 摄影者、活动成员或实验室名称 |
| `date` | 是 | 活动日期，格式为 `YYYY-MM-DD` |
| `draft` | 否 | `true` 时不在照片墙和地球上显示，默认 `false` |

经纬度顺序必须是先 `lng`（经度）、后 `lat`（纬度）。西经和南纬使用负数。可以从地图服务中查询活动地点的坐标，但发布前应确认标记落在正确的城市或场地。

照片墙的自动播放、鼠标悬停信息和点击定位均由网站自动处理，不需要在 Markdown 中添加 JavaScript 或额外链接。

## 8. 首页内容选择与排序

首页在 `src/pages/index.astro` 中自动读取非草稿内容，并按照日期从新到旧排序：

| 首页模块 | 数据来源 | 显示数量 | 排序字段 |
| --- | --- | --- | --- |
| Featured News | `src/content/news/` | 最新 5 条 | `pubDate` |
| Latest Publications | `src/content/publications/` | 最新 3 篇 | `pubDate` |
| Latest Blogs | `src/content/blogs/` | 最新 3 篇 | `pubDate` |
| Moments across Earth | `src/content/markers/` | 全部非草稿条目 | `date` |

不需要手动把内容注册到首页。新文件满足 schema、`draft: false` 且日期较新时，会自动出现在对应模块。

Featured News 在只有 1 到 4 条新闻时会重复现有新闻，以保持 5 页轮播效果；录入至少 5 条真实新闻后，每一页会对应不同内容。

Research 页面会针对当前研究方向，分别显示最新 3 篇论文、3 条新闻和 3 篇博客。是否出现由条目的 `researchAreas` 决定。

### 列表页搜索与筛选

- Publications 使用 `title`、`description`、`venue`、`authors` 和 `tags` 搜索，使用 `venue` 和 `tags` 生成筛选项。
- News 使用 `title`、`description` 和 `tags` 搜索及筛选。
- Blogs 使用 `title`、`description`、`category` 和 `tags` 搜索及筛选。

因此，`tags` 和 `category` 应保持简洁、稳定。同一个概念不要同时使用不同拼写，例如不要混用 `Remote Sensing`、`remote-sensing` 和 `Remote sensing` 作为展示标签。

## 9. 修改研究方向

四个研究方向统一定义在：

```text
src/data/research.ts
```

每个方向包含：

| 字段 | 作用 |
| --- | --- |
| `id` | 内容关联键值和 Research 页面查询参数 |
| `number` | 方向编号 |
| `image` | 首页和 Research 页面使用的方向图片 |
| `alt` | 图片替代文字 |
| `title` / `titleZh` | 英文和中文名称 |
| `description` / `descriptionZh` | 英文和中文简介 |

研究方向图片目前放在：

```text
public/assets/research/
```

修改标题、描述或图片只需要编辑 `src/data/research.ts`。修改 `id` 的影响更大：必须同时更新所有论文、新闻和博客中的 `researchAreas`，以及任何包含 `?direction=<id>` 的链接，否则已有内容不会出现在该方向下。

`src/content/collections/` 是旧模板遗留的 Collection 数据，不是当前 Research 页面的内容来源。新的研究内容应添加到 `publications`、`news` 或 `blogs`，并通过 `researchAreas` 关联，不要继续向 `src/content/collections/` 添加内容。

当前 Research 页面布局实际实现在：

```text
src/pages/collections/index.astro
```

`src/pages/research/index.astro` 只是将该布局挂载到正式的 `/research/` 地址。修改 Research 页面的标题、背景、方向切换或三个内容区域时，应编辑 `src/pages/collections/index.astro`。旧的 `/collections/` 地址目前仍可访问，但不再出现在导航中。

## 10. 修改首页与团队展示

### 首页主视觉

首页标题、简介、三个按钮及中英文文案位于：

```text
src/components/HomeHero.astro
```

首页背景图为：

```text
public/assets/logo/bg.png
```

替换背景图时可以保持同名文件，也可以修改 `HomeHero.astro` 中的 `src`。应使用足够清晰的横向图片，并分别检查桌面端和手机端裁切。

### 首页研究模块标题

“The scientific questions we address” 标题和简介位于：

```text
src/components/ResearchDirections.astro
```

四个方向卡片本身来自 `src/data/research.ts`，不要在组件中重复录入四份数据。

### 首页团队模块

首页团队模块位于：

```text
src/components/PeopleSection.astro
```

需要注意：

- 学生列表来自 `src/data/team.ts`，按照数组顺序排列。
- `slug` 为 `wenjia-xu` 的成员会从学生轮播中排除。
- 团队人数及博士生、硕士生、科研助理数量会根据英文 `role` 自动统计。
- `role` 应使用现有标准值：`PhD Student`、`Master Student` 或 `Research Assistant`，否则不会进入对应统计。
- PI 的首页简介、统计数字、链接和背景图目前直接写在 `PeopleSection.astro` 中，不会自动读取 `team.ts`；更新引用量、h-index、论文数或 PI 联系方式时需要修改该组件。
- 完整 Team 页面按照 `src/data/team.ts` 的数组顺序展示，因此导师应保持在数组第一项。

团队模块背景图为：

```text
public/assets/people-bg.jpg
```

## 11. 修改固定页面、导航与页脚

| 内容 | 文件 |
| --- | --- |
| Contact 页面的邮箱、地址和 Scholar | `src/pages/contact/index.astro` |
| Join Us 招生方向、科研环境、申请说明和邮件按钮 | `src/pages/join-us/index.astro` |
| 顶部导航、全站页脚、学校链接和全站默认标题 | `src/layouts/BaseLayout.astro` |
| Our Team 页面标题和简介 | `src/pages/our-team/index.astro` |
| Publications 页面标题和简介 | `src/pages/publications/index.astro` |
| News 页面标题和简介 | `src/pages/news/index.astro` |
| Blogs 页面标题和简介 | `src/pages/blogs/index.astro` |
| Research 页面整体布局 | `src/pages/collections/index.astro` |
| About 页面 | `src/pages/about.astro` |
| FAQ 页面 | `src/pages/faq/index.astro` |

邮箱在多个位置出现，包括首页 PI 模块、Contact、Join Us 和页脚。更换公共邮箱时应搜索旧地址并逐处确认：

```bash
rg -n "xuwenjia@bupt.edu.cn" src
```

修改导航项目时，需要同时检查 `BaseLayout.astro` 中的顶部导航和页脚导航，避免两处不一致。

About 和 FAQ 当前没有放入顶部导航，但静态构建仍会生成 `/about/` 和 `/faq/`。如果继续保留这些页面，也应在学校信息、联系方式或研究方向发生变化时同步检查其内容。

## 12. 中英文切换规则

普通页面中的双语文字使用 `data-en` 和 `data-zh`：

```astro
<p
  data-en="English text"
  data-zh="中文文字"
>English text</p>
```

页面初始内容应与 `data-en` 一致。语言切换脚本位于：

```text
public/assets/js/i18n.js
```

用户选择的语言会保存在浏览器 `localStorage` 中。新增或修改固定页面文字时，如果只修改元素正文而没有同步修改 `data-en` 和 `data-zh`，切换语言后会重新出现旧文字。

新闻和照片墙已经提供独立的 `titleEn`、`titleZh`、`descriptionEn`、`descriptionZh` 字段。人员和研究方向的双语字段位于对应 TypeScript 数据文件。当前论文和博客 schema 主要使用单语言标题及正文；如果需要让论文或博客详情全文双语，需要扩展 schema 和页面组件，不能只添加未注册字段。

## 13. Mapbox 与部署配置

Earth Explorer 依赖公开环境变量：

```text
PUBLIC_MAPBOX_TOKEN
```

本地开发可以在项目根目录的 `.env` 中配置：

```dotenv
PUBLIC_MAPBOX_TOKEN=pk.your_public_mapbox_token
```

`.env` 不应提交到 Git。GitHub Pages 使用仓库中 `Settings -> Secrets and variables -> Actions -> Variables` 下的同名 Actions Variable。

Mapbox 地图样式地址和初始视角位于：

```text
src/components/GlobeMap.astro
```

Mapbox public token 会进入浏览器代码，因此不要使用 secret token。应在 Mapbox 后台限制允许访问的域名，至少包含正式 GitHub Pages 域名和本地开发地址。

部署工作流位于 `.github/workflows/deploy.yml`，推送到 `master` 会触发自动构建和部署。部署失败时先检查 Actions 日志、Node.js 版本和 `PUBLIC_MAPBOX_TOKEN` 是否存在。

## 14. 重命名与删除内容

- Markdown 文件名就是详情页 URL。重命名文件会改变 URL，旧链接不会自动重定向。
- 人员的 `slug` 就是人员详情页 URL。修改后要检查首页、Team 页面和其他手写链接。
- 删除图片前先运行 `rg` 搜索该路径，确认没有其他内容继续引用。
- 删除人员不会删除论文；论文仍会保留，只是不再出现在该人员详情页。
- 删除论文不会修改人员数据，因为人员论文列表是自动匹配的。
- 不确定是否应删除时，优先设置 `draft: true`。确认不再需要后再删除文件和资源。
- 重命名 `paperSite` 文件夹时，必须同步修改论文 frontmatter 中的 `paperSite`。

## 15. 发布前检查清单

- `slug` 或 Markdown 文件名没有与现有内容重复。
- 图片已放入 `public/assets/`，页面路径以 `/assets/` 开头。
- 没有示例邮箱、`#` 链接或 `example.com` 链接被误发布。
- 日期使用 `YYYY-MM-DD` 格式。
- `researchAreas` 至少有一个有效键值。
- 论文的 `authors` 与团队成员的署名形式一致。
- 中英文新闻已检查语言切换。
- 照片墙条目的经纬度顺序正确，`images[0]` 适合作为横向封面。
- 点击照片墙卡片后，Earth Explorer 能定位到正确地点并显示全部图片。
- 未完成内容设置了 `draft: true`。
- `npm run check` 和 `npm run build` 均通过。

## 16. 常见错误

### Research 页面没有出现新内容

检查 `researchAreas` 是否填写，并确认键值与第 2 节完全一致。

### 论文没有出现在成员详情页

检查论文 `authors` 中的姓名，并将其他署名形式添加到该成员的 `publicationNames`。

### 图片不显示

确认文件实际位于 `public/assets/`，数据中的路径以 `/assets/` 开头，并检查文件名大小写。GitHub Pages 的 Linux 环境区分大小写。

### 照片墙卡片定位到了错误地点

检查是否将经纬度写反。格式必须是 `lng: 经度`、`lat: 纬度`；西经和南纬需要使用负数。

### 新照片没有出现在照片墙中

确认文件位于 `src/content/markers/`，`images` 至少有一张图片，并检查是否误设为 `draft: true`。照片墙会按 `date` 从新到旧自动排序。

### 构建提示缺少论文项目站

填写了 `paperSite` 后，必须有对应的 `public/paper-sites/<paperSite>/index.html`。不需要独立项目站时，删除 `paperSite` 字段即可。

### 修改了中文或英文，但切换语言后又变回旧文字

固定页面文字需要同时更新元素正文、`data-en` 和 `data-zh`。新闻和照片墙则检查对应的 `titleEn`、`titleZh`、`descriptionEn` 和 `descriptionZh`。

### 新成员没有计入首页团队统计

检查 `role` 是否严格使用 `PhD Student`、`Master Student` 或 `Research Assistant`。显示中文不影响统计，统计读取的是英文 `role`。

### 本地 Earth Explorer 没有地图

确认项目根目录 `.env` 中存在 `PUBLIC_MAPBOX_TOKEN`，重新启动开发服务器，并检查 Mapbox token 的 URL 限制是否允许 `http://localhost:4321`。
