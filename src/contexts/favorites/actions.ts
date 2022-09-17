import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {
  GET_FAVORITES,
  ADD_SHOW,
  ADD_EPISODE,
  REMOVE_EPISODE,
  REMOVE_SHOW,
} from './reducer';

import {ShowItemType} from '../shows/types';
import {LatestEpisode} from '../latest/types';

import FavoriteStorage from '../../utils/AsyncStorageUtil';

export const getFavorites = async (dispatch: Dispatch<ActionTypes>) => {
  const episodes = await FavoriteStorage.getFavoriteEpisodes();
  const shows = await FavoriteStorage.getFavoriteShows();
  dispatch({
    type: GET_FAVORITES,
    data: {
      shows,
      episodes,
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
  data: LatestEpisode,
) => {
  await FavoriteStorage.addEpisode(data);
  dispatch({
    type: ADD_EPISODE,
    data,
  });
};

export const removeFavoriteEpisode = async (
  dispatch: Dispatch<ActionTypes>,
  data: LatestEpisode,
) => {
  await FavoriteStorage.removeEpisode(data);
  dispatch({
    type: REMOVE_EPISODE,
    data,
  });
};
