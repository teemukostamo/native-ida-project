import FavoriteStorage from '../../utils/AsyncStorageUtil';
import {FavoriteEpisodeType, FavoriteShowType} from './types';

export const getFavorites = () => {
  const shows = FavoriteStorage.getFavoriteShows();
  const episodes = FavoriteStorage.getFavoriteEpisodes();

  return {
    shows,
    episodes,
  };
};

export const addFavoriteShow = (data: FavoriteShowType) => {
  FavoriteStorage.addShow(data);
};

export const addFavoriteEpisode = (data: FavoriteEpisodeType) => {
  FavoriteStorage.addEpisode(data);
};
