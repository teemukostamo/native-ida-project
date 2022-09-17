import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {OPEN_MODAL, CLOSE_MODAL} from './reducer';
import {FavoriteModalType} from './types';

export const closeModal = (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CLOSE_MODAL,
  });
};

export const openModal = (
  dispatch: Dispatch<ActionTypes>,
  data: FavoriteModalType,
) => {
  dispatch({
    type: OPEN_MODAL,
    data: {
      isOpen: true,
      item: data.item,
    },
  });
};
