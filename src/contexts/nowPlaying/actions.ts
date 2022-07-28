import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {PLAY_TALLINN, PLAY_HELSINKI, STOP} from './reducer';
import {HELSINKI_LIVE_URL, TALLINN_LIVE_URL} from '../../constants';

import {startPlayback, stopPlayback} from '../../components/trackPlayer';

export const onTallinnPlayPress = async (
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
  startPlayback(TALLINN_LIVE_URL, show_title, artist);
};

export const onHelsinkiPlayPress = async (
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
  await startPlayback(HELSINKI_LIVE_URL, show_title, artist);
};

export const stopPlayerPress = (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: STOP,
  });
  stopPlayback();
};
