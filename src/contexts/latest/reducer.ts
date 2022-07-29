import {LatestShows} from './types';
import ActionTypes from '../actionTypes';

export const FETCH_LATEST_SHOWS = 'FETCH_LATEST_SHOWS';

export const latestShowsReducer = (state: LatestShows, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_LATEST_SHOWS:
      return action.data;
    default:
      return state;
  }
};

export const initialLatestState = {};
