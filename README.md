# IntelliSensing Lab Website

The official website of IntelliSensing Lab at the School of Information and Communication Engineering, Beijing University of Posts and Telecommunications. The site is built with Astro and deployed as a static website on GitHub Pages.

## Local Development

Requirements: Node.js `>=22.12.0`. Node.js 22 LTS is recommended.

```bash
npm install
npm run dev
```

The local development server is available at `http://localhost:4321/` by default.

Run the following checks before committing changes:

```bash
npm run check
npm run build
```

`npm run build` generates the static site in `dist/`.

## Content Management

For instructions on adding team members, publications, news, and blogs, including research-direction associations and publication link behavior, see the [Content Management Guide](docs/content-guide.md). The guide is currently written in Chinese for the lab's content maintainers.

Common content locations:

- Team data: `src/data/team.ts`
- Publications: `src/content/publications/`
- News: `src/content/news/`
- Blogs: `src/content/blogs/`
- Moments across Earth: `src/content/markers/`
- Images and other static assets: `public/assets/`
- Content schema and validation: `src/content.config.ts`

## Deployment

The deployment workflow is defined in `.github/workflows/deploy.yml`. A push to `master` automatically builds and publishes the website through GitHub Actions and GitHub Pages.

The following Actions variable must be configured under `Settings -> Secrets and variables -> Actions -> Variables` in the GitHub repository:

```text
PUBLIC_MAPBOX_TOKEN
```

This value must be a public Mapbox access token. It is included in the browser bundle, so do not use a secret token. Restrict its allowed website URLs in the Mapbox dashboard.

## Draft Content

Set the following frontmatter field in a publication, news item, or blog post to keep it in the repository without publishing it:

```yaml
draft: true
```

Change it to `false` when the content is ready to publish.
