import {z} from 'zod';
import {ImageSchema} from './common';

const ScheduleItemSchema = z.object({
  day: z.string(),
  schedule: z.array(
    z.object({
      episode_id: z.number(),
      show_id: z.number(),
      is_repeat: z.boolean().optional(),
      title: z.string(),
      show_title: z.string(),
      slug: z.string(),
      subtitle: z.string().optional(),
      episode_time: z.object({
        episode_start: z.string(),
        episode_end: z.string(),
      }),
      episode_timestamps: z.object({
        episode_start: z.string(),
        episode_end: z.string(),
      }),
      mixcloud: z.string().optional(),
      soundcloud: z.string().optional(),
      genres: z.array(z.number()).optional(),
      thumbnail: ImageSchema.optional(),
    }),
  ),
});

export const FullScheduleSchema = z.object({
  tallinn: z.array(ScheduleItemSchema),
  helsinki: z.array(ScheduleItemSchema),
});

export type FullScheduleType = z.infer<typeof FullScheduleSchema>;
