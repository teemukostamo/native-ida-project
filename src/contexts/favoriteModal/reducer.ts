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
        episode_name: null,
        episode_id: null,
        episode_image: null,
        show_name: null,
        show_id: null,
        show_image: null,
        share_url: null,
      };
    default:
      return state;
  }
};

export const initialFavoriteModalState = {
  isOpen: false,
  channel: null,
  show_slug: null,
  episode_name: null,
  episode_id: null,
  episode_image: null,
  show_name: null,
  show_id: null,
  show_image: null,
  share_url: null,
};
