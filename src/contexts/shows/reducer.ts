import {ShowItemType} from './types';
import ActionTypes from '../actionTypes';

export const SET_SHOW_PAGE_STATE = 'SET_SHOW_PAGE_STATE';

export const showPageReducer = (state: ShowItemType, action: ActionTypes) => {
  switch (action.type) {
    case SET_SHOW_PAGE_STATE:
      return action.data;
    default:
      return state;
  }
};
