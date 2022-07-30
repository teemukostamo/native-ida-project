import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {fetchLatestShows} from './services';
import {FETCH_LATEST_SHOWS} from './reducer';

export const getLatestShows = async (dispatch: Dispatch<ActionTypes>) => {
  const latestShows = await fetchLatestShows();
  dispatch({
    type: FETCH_LATEST_SHOWS,
    data: latestShows,
  });
};
