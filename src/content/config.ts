import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().max(160),
    pubDate: z.date(),
    author: z.string().default('Synapse Consulting Team'),
    tags: z.array(z.string()),
    topic: z.string().default('Data & analytics'),
    technologies: z.array(z.string()).default([]),
    cover: z.enum(['analytics', 'engineering', 'fabric', 'powerbi', 'strategy']).default('analytics'),
    image: z.string().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = {
  blog: blogCollection,
};