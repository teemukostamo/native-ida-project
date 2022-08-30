import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {
  CLEAR_FILTERS,
  SET_CHANNEL,
  SET_GENRE,
  SET_SEARCH_QUERY,
} from './reducer';

export const setGenre = (
  dispatch: Dispatch<ActionTypes>,
  label: string,
  value: string,
) => {
  dispatch({
    type: SET_GENRE,
    data: {
      label,
      value,
    },
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

export const clearFilters = (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CLEAR_FILTERS,
  });
};
