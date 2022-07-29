import {Image} from '../live/types';

interface EpisodeTime {
  episode_start: string;
  episode_end: string;
}

interface ScheduleItemDetails {
  episode_id: number;
  title: string;
  show_title: string;
  slug: string;
  subtitle: string;
  episode_time: EpisodeTime;
  episode_timestamps: EpisodeTime;
  mixcloud: string;
  soundcloud: string;
  genres: number[];
  thumbnail: Image;
}

interface ScheduleItem {
  day: string;
  schedule: ScheduleItemDetails[];
}

export type FullSchedule = {
  tallinn: ScheduleItem[];
  helsinki: ScheduleItem[];
} | null;
