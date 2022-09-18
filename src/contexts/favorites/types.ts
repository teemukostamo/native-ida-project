import {ShowItemType} from '../shows/types';
import {LatestEpisode} from '../latest/types';

export type FavoritesType = {
  shows: ShowItemType[];
  episodes: LatestEpisode[];
  history: LatestEpisode[];
};
