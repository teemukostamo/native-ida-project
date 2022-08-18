import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {SET_CHANNEL, SET_GENRE, SET_SEARCH_QUERY} from './reducer';

export const setGenre = (dispatch: Dispatch<ActionTypes>, genre: string) => {
  dispatch({
    type: SET_GENRE,
    data: genre,
  });
};

export const setChannel = (
  dispatch: Dispatch<ActionTypes>,
  channel: string,
) => {
  dispatch({
    type: SET_CHANNEL,
    data: channel,
  });
};

export const setSearchQuery = (
  dispatch: Dispatch<ActionTypes>,
  searchQuery: string,
) => {
  dispatch({
    type: SET_SEARCH_QUERY,
    data: searchQuery,
  });
};
