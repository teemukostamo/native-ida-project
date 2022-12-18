import {z} from 'zod';

export const ImageSchema = z.object({
  ID: z.number(),
  title: z.string(),
  url: z.string(),
  alt: z.string(),
  caption: z.string(),
  description: z.string(),
  width: z.number(),
  height: z.number(),
  srcset: z.string(),
  sizes: z.any(),
});

export const SlugSchema = z.object({
  name: z.string(),
  slug: z.string(),
});

export type SlugType = z.infer<typeof SlugSchema>;
