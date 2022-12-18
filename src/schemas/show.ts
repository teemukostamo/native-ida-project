import {z} from 'zod';
import {ImageSchema, SlugSchema} from './common';

export const ShowSchema = z.object({
  ID: z.string(),
  slug: z.string(),
  title: z.string(),
  post_date: z.string(),
  excerpt: z.string(),
  taxonomies: z.object({
    genres: z.array(SlugSchema).optional(),
    channel: z.array(SlugSchema).optional(),
  }),
  featured_image: ImageSchema.optional(),
  acf: z
    .object({
      artist: z.string(),
    })
    .optional(),
  code: z.string().optional(),
});

export type ShowItemType = z.infer<typeof ShowSchema>;
