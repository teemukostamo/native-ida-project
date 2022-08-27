import {LiveShows} from './types';
import ActionTypes from '../actionTypes';

export const FETCH_LIVE_SHOWS = 'FETCH_LIVE_SHOWS';

export const liveShowsReducer = (state: LiveShows, action: ActionTypes) => {
  switch (action.type) {
    case FETCH_LIVE_SHOWS:
      return action.data;
    default:
      return state;
  }
};

export const initialLiveState = {};
