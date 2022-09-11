interface NameSlug {
  name: string;
  slug: string;
}

export type FavoriteModalType = {
  isOpen: boolean;
  channel: string | null;
  episode_name?: string | null;
  episode_id?: string | null;
  episode_image?: string | null;
  episode_time?: string | null;
  episode_slug?: string | null;
  show_name: string | null;
  show_id: string | null;
  show_image?: string | null;
  show_slug: string | null;
  share_url: string | null;
  mixcloud?: string | null;
  genres?: NameSlug[] | null;
};
