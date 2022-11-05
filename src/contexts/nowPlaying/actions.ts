import {Dispatch} from 'react';
import ActionTypes from '../actionTypes';
import {
  PLAY_TALLINN,
  PLAY_HELSINKI,
  PLAY_MIXCLOUD,
  UPDATE_NOW_PLAYING,
  STOP,
  CLOSE_NOW_PLAYING,
} from './reducer';
import {HELSINKI_LIVE_URL, TALLINN_LIVE_URL} from '../../constants';

import {startPlayback, stopPlayback} from '../../services/trackPlayer';

export const onTallinnPlayPress = async (
  dispatch: Dispatch<ActionTypes>,
  show_title: string,
  artist: string,
  image: string,
) => {
  dispatch({
    type: PLAY_TALLINN,
    data: {
      show_title,
      artist,
      image,
      mixcloud: null,
      studio: 'tallinn',
    },
  });
  startPlayback(TALLINN_LIVE_URL, show_title, artist, image);
};

export const onHelsinkiPlayPress = async (
  dispatch: Dispatch<ActionTypes>,
  show_title: string,
  artist: string,
  image: string,
) => {
  dispatch({
    type: PLAY_HELSINKI,
    data: {
      show_title,
      artist,
      image,
      mixcloud: null,
      studio: 'helsinki',
    },
  });
  await startPlayback(HELSINKI_LIVE_URL, show_title, artist, image);
};

export const onPlayMixcloudPress = (
  dispatch: Dispatch<ActionTypes>,
  show_title: string,
  artist: string,
  mixcloud: string,
  studio: string,
) => {
  stopPlayback();
  dispatch({
    type: PLAY_MIXCLOUD,
    data: {
      show_title,
      artist,
      mixcloud,
      image: null,
      studio,
    },
  });
};

export const updateNowPlaying = (
  dispatch: Dispatch<ActionTypes>,
  show_title: string,
  artist: string,
  image: string,
) => {
  dispatch({
    type: UPDATE_NOW_PLAYING,
    data: {
      show_title,
      artist,
      image,
    },
  });
};

export const stopPlayerPress = (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: STOP,
  });
  stopPlayback();
};

export const closeNowPlaying = (dispatch: Dispatch<ActionTypes>) => {
  dispatch({
    type: CLOSE_NOW_PLAYING,
  });
  stopPlayback();
};
