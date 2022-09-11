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
      channel: data.channel,
      episode_name: data.episode_name,
      episode_id: data.episode_id,
      episode_image: data.episode_image,
      episode_time: data.episode_time,
      episode_slug: data.episode_slug,
      show_name: data.show_name,
      show_id: data.show_id,
      show_image: data.show_image,
      show_slug: data.show_slug,
      share_url: data.share_url,
      mixcloud: data.mixcloud,
      genres: data.genres,
    },
  });
};
