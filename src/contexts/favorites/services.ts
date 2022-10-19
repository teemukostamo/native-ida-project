import FavoriteStorage from '../../utils/AsyncStorageUtil';
import {ShowItemType} from '../shows/types';
import {LatestEpisode} from '../latest/types';

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

export const addFavoriteEpisode = (data: LatestEpisode) => {
  FavoriteStorage.addEpisode(data);
};
