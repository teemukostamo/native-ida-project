import ActionTypes from '../actionTypes';
import {FavoritesType} from './types';

export const GET_FAVORITES = 'GET_FAVORITES';
export const ADD_SHOW = 'ADD_SHOW';
export const REMOVE_SHOW = 'REMOVE_SHOW';
export const ADD_EPISODE = 'ADD_EPISODE';
export const REMOVE_EPISODE = 'REMOVE_EPISODE';
export const ADD_TO_HISTORY = 'ADD_TO_HISTORY';
export const REMOVE_FROM_HISTORY = 'REMOVE_FROM_HISTORY';
export const CLEAR_HISTORY = 'CLEAR_HISTORY';

export const favoritesReducer = (state: FavoritesType, action: ActionTypes) => {
  switch (action.type) {
    case GET_FAVORITES:
      return {
        ...state,
        ...action.data,
      };
    case ADD_EPISODE:
      return {
        ...state,
        episodes: [...state.episodes, action.data],
      };
    case ADD_SHOW:
      return {
        ...state,
        shows: [...state.shows, action.data],
      };
    case REMOVE_EPISODE:
      return {
        ...state,
        episodes: state.episodes.filter(
          episode => episode.ID !== action.data.ID,
        ),
      };
    case REMOVE_SHOW:
      return {
        ...state,
        shows: state.shows.filter(show => show?.ID !== action.data?.ID),
      };
    case ADD_TO_HISTORY:
      return {
        ...state,
        history: [...state.history, action.data],
      };
    case REMOVE_FROM_HISTORY:
      return {
        ...state,
        history: state.history.filter(episode => episode.ID !== action.data.ID),
      };
    case CLEAR_HISTORY:
      return {
        ...state,
        history: [],
      };
    default:
      return state;
  }
};

export const initialFavoritesState = {
  shows: [],
  episodes: [],
  history: [],
};
