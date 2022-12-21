import FavoriteStorage from '../../utils/AsyncStorageUtil';
import {ShowItemType} from '~src/schemas/show';
import {EpisodeItemType} from '~src/schemas/episode';

export const getFavorites = () => {
  const shows = FavoriteStorage.getFavoriteShows();
  const episodes = FavoriteStorage.getFavoriteEpisodes();

  return {
    shows,
    episodes,
  };
};

export const addFavoriteShow = (data: ShowItemType) => {
  FavoriteStorage.addShow(data);
};

export const addFavoriteEpisode = (data: EpisodeItemType) => {
  FavoriteStorage.addEpisode(data);
};
