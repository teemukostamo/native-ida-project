import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {PLAY_TALLINN, PLAY_HELSINKI, STOP} from './reducer';

export const onTallinnPlayPress = (
  dispatch: Dispatch<ActionTypes>,
  show_title: string,
  artist: string,
) => {
  dispatch({
    type: PLAY_TALLINN,
    data: {
      show_title,
      artist,
    },
  });
};

export const onHelsinkiPlayPress = (
  dispatch: Dispatch<ActionTypes>,
  show_title: string,
  artist: string,
) => {
  dispatch({
    type: PLAY_HELSINKI,
    data: {
      show_title,
      artist,
    },
  });
};

export const stopPlayerPress = (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: STOP,
  });
};
