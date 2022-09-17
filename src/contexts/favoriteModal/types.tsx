import {LatestEpisode} from '../latest/types';
import {ShowItemType} from '../shows/types';

export type FavoriteModalType = {
  isOpen: boolean;
  item: LatestEpisode | ShowItemType | null;
};
