import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {SET_SHOW_PAGE_STATE} from './reducer';
import {ShowItemType} from './types';

export const setShowPageState = async (
  dispatch: Dispatch<ActionTypes>,
  showInfo: ShowItemType,
) => {
  dispatch({
    type: SET_SHOW_PAGE_STATE,
    data: showInfo,
  });
};
