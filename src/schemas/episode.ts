import {z} from 'zod';
import {ImageSchema, SlugSchema} from './common';

export const EpisodeSchema = z.object({
  ID: z.string(),
  slug: z.string(),
  title: z.string(),
  episode_time: z.object({
    episode_start: z.string(),
    episode_end: z.string(),
  }),
  episode_timestamps: z.object({
    episode_start: z.string(),
    episode_end: z.string(),
  }),
  mixcloud: z.string(),
  show_title: z.string(),
  featured_image: ImageSchema,
  related_show_ID: z.number(),
  related_show_artist: z.string(),
  related_show_slug: z.string(),
  taxonomies: z.object({
    genres: z.array(SlugSchema).optional(),
    channel: z.array(SlugSchema).optional(),
  }),

  tracklist: z.string().optional(),
  code: z.string().optional(),
});

export type EpisodeItemType = z.infer<typeof EpisodeSchema>;
