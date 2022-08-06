import {Image} from '../live/types';

interface NameSlug {
  name: string;
  slug: string;
}

export type ShowItemType = {
  ID: string;
  slug: string;
  title: string;
  post_date: string;
  excerpt: string;
  post_type: string;
  taxonomies: {
    genres?: NameSlug[];
    channel: NameSlug[];
  };
  featured_image?: Image;
  acf?: {
    artist: string;
  };
};
