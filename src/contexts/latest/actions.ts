import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {fetchLatestEpisodes} from './services';
import {FETCH_LATEST_SHOWS} from './reducer';

export const getLatestEpisodes = async (dispatch: Dispatch<ActionTypes>) => {
  const LatestEpisodes = await fetchLatestEpisodes();
  dispatch({
    type: FETCH_LATEST_SHOWS,
    data: LatestEpisodes,
  });
};
