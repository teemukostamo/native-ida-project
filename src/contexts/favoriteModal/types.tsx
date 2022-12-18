import {EpisodeItemType} from '~src/schemas/episode';
import {ShowItemType} from '~src/schemas/show';

export type FavoriteModalType = {
  isOpen: boolean;
  item: EpisodeItemType | ShowItemType | null;
};
