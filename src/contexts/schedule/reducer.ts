import {FullSchedule} from './types';
import ActionTypes from '../actionTypes';

export const FETCH_FULL_SCHEDULE = 'FETCH_FULL_SCHEDULE';

export const fullScheduleReducer = (
  state: FullSchedule,
  action: ActionTypes,
) => {
  switch (action.type) {
    case FETCH_FULL_SCHEDULE:
      return action.data;
    default:
      return state;
  }
};

export const initialScheduleState = {};
