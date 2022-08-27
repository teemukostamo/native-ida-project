import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {fetchLiveShows} from './services';
import {FETCH_LIVE_SHOWS} from './reducer';

export const getLiveShows = async (dispatch: Dispatch<ActionTypes>) => {
  const liveShows = await fetchLiveShows();
  dispatch({
    type: FETCH_LIVE_SHOWS,
    data: liveShows,
  });
};
