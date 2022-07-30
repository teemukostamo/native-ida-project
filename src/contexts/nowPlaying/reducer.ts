import ActionTypes from '../actionTypes';
import {NowPlayingState} from './types';

export const PLAY_HELSINKI = 'PLAY_HELSINKI';
export const PLAY_TALLINN = 'PLAY_TALLINN';
export const STOP = 'STOP';

export const nowPlayingReducer = (
  state: NowPlayingState,
  action: ActionTypes,
) => {
  switch (action.type) {
    case 'PLAY_HELSINKI':
      return {
        ...state,
        nowPlaying: true,
        showNowPlayingBar: true,
        streamType: 'live',
        studio: 'helsinki',
        show_title: action.data.show_title,
        artist: action.data.artist,
      };
    case 'PLAY_TALLINN':
      return {
        ...state,
        nowPlaying: true,
        showNowPlayingBar: true,
        streamType: 'live',
        studio: 'tallinn',
        show_title: action.data.show_title,
        artist: action.data.artist,
      };
    case 'STOP':
      return {
        ...state,
        nowPlaying: false,
      };
    default:
      return state;
  }
};

export const initialNowPlaying = {
  showNowPlayingBar: false,
  nowPlaying: false,
  streamType: null,
  studio: null,
  show_title: null,
  artist: null,
};
