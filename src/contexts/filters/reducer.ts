import ActionTypes from '../actionTypes';
import {FiltersType} from './types';

export const SET_CHANNEL = 'SET_CHANNEL';
export const SET_GENRE = 'SET_GENRE';
export const SET_SEARCH_QUERY = 'SET_SEARCH_QUERY';
export const CLEAR_FILTERS = 'CLEAR_FILTERS';

export const filtersReducer = (state: FiltersType, action: ActionTypes) => {
  switch (action.type) {
    case SET_CHANNEL:
      return {
        ...state,
        channel: action.data,
      };
    case SET_GENRE:
      return {
        ...state,
        genre: action.data,
      };
    case SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.data,
      };
    case CLEAR_FILTERS:
      return {
        ...state,
        searchQuery: '',
        genre: {
          label: '',
          value: '',
        },
        channel: 'all',
      };
    default:
      return state;
  }
};
export const initialFiltersState = {
  channel: 'all',
  searchQuery: '',
  genre: {
    label: '',
    value: '',
  },
};
