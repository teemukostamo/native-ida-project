import {Image} from '../live/types';

interface NameSlug {
  name: string;
  slug: string;
}

interface EpisodeTime {
  episode_start: string;
  episode_end: string;
}

export interface LatestShow {
  slug: string;
  title: string;
  episode_time: EpisodeTime;
  episode_timestamps: EpisodeTime;
  mixcloud: string;
  show_title: string;
  featured_image: Image;
  taxonomies: {
    genres?: NameSlug[];
    channel?: NameSlug[];
  };
  post_type: string;
  tracklist: string;
}

export type LatestShows = {
  featured_shows: LatestShow[];
  latest_episodes: LatestShow[];
} | null;
