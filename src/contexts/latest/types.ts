import {Image} from '../live/types';

interface NameSlug {
  name: string;
  slug: string;
}

interface EpisodeTime {
  episode_start: string;
  episode_end: string;
}

export interface LatestEpisode {
  ID: string;
  slug: string;
  title: string;
  episode_time: EpisodeTime;
  episode_timestamps: EpisodeTime;
  mixcloud: string;
  show_title: string;
  featured_image: Image;
  related_show_ID: number;
  related_show_artist: string;
  related_show_slug: string;
  taxonomies: {
    genres?: NameSlug[];
    channel?: NameSlug[];
  };
  post_type: string;
  tracklist?: string;
  code?: string;
}

export type LatestEpisodes = LatestEpisode[] | null;
