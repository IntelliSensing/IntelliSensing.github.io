import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { researchAreaIds } from './data/research';

const publications = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/publications',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    venue: z.string(),
    authors: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    researchAreas: z.array(z.enum(researchAreaIds)).min(1),
    image: z.string(),
    projectUrl: z.string().url().optional(),
    paperUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    paperSite: z.string().optional(),
    links: z.array(z.object({
      label: z.string(),
      url: z.string()
    })).default([]),
    draft: z.boolean().default(false)
  })
});

const collectionItems = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/collections',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    platform: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string(),
    githubUrl: z.string().url().optional(),
    huggingfaceUrl: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

const blogs = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/blogs',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    researchAreas: z.array(z.enum(researchAreaIds)).min(1),
    image: z.string(),
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

const news = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/news',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    titleZh: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    descriptionZh: z.string().optional(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    researchAreas: z.array(z.enum(researchAreaIds)).min(1),
    image: z.string(),
    externalUrl: z.string().url().optional(),
    draft: z.boolean().default(false)
  })
});

const markers = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/markers',
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    title: z.string(),
    titleEn: z.string().optional(),
    titleZh: z.string().optional(),
    description: z.string(),
    descriptionEn: z.string().optional(),
    descriptionZh: z.string().optional(),
    category: z.string(),
    categoryEn: z.string().optional(),
    categoryZh: z.string().optional(),
    lng: z.number(),
    lat: z.number(),
    images: z.array(z.string()),
    author: z.string(),
    date: z.coerce.date(),
    draft: z.boolean().default(false)
  })
});

export const collections = { publications, collections: collectionItems, blogs, news, markers };
