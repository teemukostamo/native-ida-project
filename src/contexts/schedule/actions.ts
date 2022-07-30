import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {fetchFullSchedule} from './services';
import {FETCH_FULL_SCHEDULE} from './reducer';

export const getFullSchedule = async (dispatch: Dispatch<ActionTypes>) => {
  const fullSchedule = await fetchFullSchedule();
  dispatch({
    type: FETCH_FULL_SCHEDULE,
    data: fullSchedule,
  });
};
