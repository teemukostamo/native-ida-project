import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {
  GET_FAVORITES,
  ADD_SHOW,
  ADD_EPISODE,
  REMOVE_EPISODE,
  REMOVE_SHOW,
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  CLEAR_HISTORY,
} from './reducer';

import {ShowItemType} from '~src/schemas/show';
import {EpisodeItemType} from '~src/schemas/episode';

import FavoriteStorage from '../../utils/AsyncStorageUtil';

export const getFavorites = async (dispatch: Dispatch<ActionTypes>) => {
  const episodes = await FavoriteStorage.getFavoriteEpisodes();
  const shows = await FavoriteStorage.getFavoriteShows();
  const history = await FavoriteStorage.getPlayHistory();
  dispatch({
    type: GET_FAVORITES,
    data: {
      shows,
      episodes,
      history,
    },
  });
};

export const addFavoriteShow = async (
  dispatch: Dispatch<ActionTypes>,
  data: ShowItemType,
) => {
  await FavoriteStorage.addShow(data);
  dispatch({
    type: ADD_SHOW,
    data,
  });
};

export const removeFavoriteShow = async (
  dispatch: Dispatch<ActionTypes>,
  data: ShowItemType,
) => {
  await FavoriteStorage.removeShow(data);
  dispatch({
    type: REMOVE_SHOW,
    data,
  });
};

export const addFavoriteEpisode = async (
  dispatch: Dispatch<ActionTypes>,
  data: EpisodeItemType,
) => {
  await FavoriteStorage.addEpisode(data);
  dispatch({
    type: ADD_EPISODE,
    data,
  });
};

export const removeFavoriteEpisode = async (
  dispatch: Dispatch<ActionTypes>,
  data: EpisodeItemType,
) => {
  await FavoriteStorage.removeEpisode(data);
  dispatch({
    type: REMOVE_EPISODE,
    data,
  });
};

export const addToPlayHistory = async (
  dispatch: Dispatch<ActionTypes>,
  data: EpisodeItemType,
) => {
  await FavoriteStorage.addToPlayHistory(data);
  dispatch({
    type: ADD_TO_HISTORY,
    data,
  });
};

export const removeFromPlayHistory = async (
  dispatch: Dispatch<ActionTypes>,
  data: EpisodeItemType,
) => {
  await FavoriteStorage.removeFromPlayHistory(data);
  dispatch({
    type: REMOVE_FROM_HISTORY,
    data,
  });
};

export const clearPlayHistory = (dispatch: Dispatch<ActionTypes>) => {
  FavoriteStorage.clearPlayHistory();
  dispatch({
    type: CLEAR_HISTORY,
  });
};
