import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    author: z.string().default('Élagage Abattage 37'),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }).optional(),
    category: z.enum(['elagage', 'abattage', 'conseils', 'reglementation', 'saisonnier']),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    seoKeywords: z.array(z.string()),
    relatedCities: z.array(z.string()).optional(),
  }),
});

export const collections = {
  blog: blogCollection,
};
