import ActionTypes from '../actionTypes';
import {FavoriteModalType} from './types';

export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const favoriteModalReducer = (
  state: FavoriteModalType,
  action: ActionTypes,
) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        ...action.data,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
        item: null,
      };
    default:
      return state;
  }
};

export const initialFavoriteModalState = {
  isOpen: false,
  item: null,
};
