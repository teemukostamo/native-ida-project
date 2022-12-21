import {z} from 'zod';
import {ImageSchema, SlugSchema} from './common';

const NextShowSchema = z.union([
  z.object({
    title: z.string(),
    show_title: z.string(),
    slug: z.string(),
    episode_time: z.object({
      episode_start: z.string(),
      episode_end: z.string(),
    }),
  }),
  z.literal(false),
]);

const LiveShowSchema = z.object({
  title: z.string(),
  show_title: z.string(),
  slug: z.string(),
  episode_id: z.number(),
  artist: z.string(),
  episode_time: z.object({
    episode_start: z.string(),
    episode_end: z.string(),
  }),
  episode_timestamps: z.object({
    episode_start: z.string(),
    episode_end: z.string(),
  }),
  show_image: ImageSchema,
  episode_image: ImageSchema.optional(),
  taxonomies: z.object({
    genres: z.array(SlugSchema).optional(),
    channel: z.array(SlugSchema).optional(),
  }),
});

export const LiveShowDataSchema = z.union([LiveShowSchema, z.literal(false)]);
export type LiveShowDataType = z.infer<typeof LiveShowDataSchema>;

export const LiveShowsSchema = z.object({
  tallinn: z.object({
    live_show: LiveShowDataSchema,
    next_show: NextShowSchema,
    video_strem: z.string().optional(),
  }),
  helsinki: z.object({
    live_show: LiveShowDataSchema,
    next_show: NextShowSchema,
    video_strem: z.string().optional(),
  }),
});
export type LiveShowsType = z.infer<typeof LiveShowsSchema>;
