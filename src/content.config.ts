import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('Élagage Abattage 37'),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    category: z.enum(['elagage', 'abattage', 'conseils', 'reglementation', 'saisonnier']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    seoKeywords: z.array(z.string()).optional(),
    relatedCities: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
