import {ShowItemType} from '~src/schemas/show';
import {EpisodeItemType} from '~src/schemas/episode';

export type FavoritesType = {
  shows: ShowItemType[];
  episodes: EpisodeItemType[];
  history: EpisodeItemType[];
};
