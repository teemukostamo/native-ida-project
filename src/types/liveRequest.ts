interface Channel {
  name: string;
  slug: string;
}

interface EpisodeTime {
  episode_start: string;
  episode_end: string;
}

interface Sizes {
  thumbnail: string;
  thumbnail_width: number;
  thumbnail_height: number;
  medium: string;
  medium_width: number;
  medium_height: number;
  medium_large: string;
  medium_large_width: number;
  medium_large_height: number;
  large: string;
  large_width: number;
  large_height: number;
  thumbnail_lqip: string;
  thumbnail_lqip_width: number;
  thumbnail_lqip_height: number;
}

interface Image {
  ID: number;
  title: string;
  url: string;
  alt: string;
  caption: string;
  description: string;
  width: number;
  height: number;
  srcset: string;
  sizes: Sizes;
}

interface NextShow {
  title: string;
  show_title: string;
  slug: string;
  episode_time: EpisodeTime;
}

interface LiveShow {
  title: string;
  show_title: string;
  slug: string;
  episode_id: number;
  artist: string;
  episode_time: EpisodeTime;
  episode_timestamps: EpisodeTime;
  show_image: Image;
  taxonomies: {
    channel: Array<Channel>;
  };
}

export type LiveShows = {
  live: {
    tallinn: {
      live_show: boolean | LiveShow;
      next_show: NextShow;
      video_stream: string;
    };
    helsinki: {
      live_show: boolean | LiveShow;
      next_show: NextShow;
      video_stream: string;
    };
  } | null;
} | null;
