import ActionTypes from '../actionTypes';
import {NowPlayingState} from './types';

export const PLAY_HELSINKI = 'PLAY_HELSINKI';
export const PLAY_TALLINN = 'PLAY_TALLINN';
export const PLAY_MIXCLOUD = 'PLAY_MIXCLOUD';
export const UPDATE_NOW_PLAYING = 'UPDATE_NOW_PLAYING';
export const STOP = 'STOP';
export const CLOSE_NOW_PLAYING = 'CLOSE_NOW_PLAYING';

export const nowPlayingReducer = (
  state: NowPlayingState,
  action: ActionTypes,
) => {
  switch (action.type) {
    case PLAY_HELSINKI:
      return {
        ...state,
        nowPlaying: true,
        showNowPlayingBar: true,
        streamType: 'live',
        studio: 'helsinki',
        show_title: action.data.show_title,
        artist: action.data.artist,
        image: action.data.image,
      };
    case PLAY_TALLINN:
      return {
        ...state,
        nowPlaying: true,
        showNowPlayingBar: true,
        streamType: 'live',
        studio: 'tallinn',
        show_title: action.data.show_title,
        artist: action.data.artist,
        image: action.data.image,
      };
    case PLAY_MIXCLOUD:
      return {
        ...state,
        nowPlaying: true,
        showNowPlayingBar: true,
        streamType: 'mixcloud',
        studio: action.data.studio,
        show_title: action.data.show_title,
        artist: action.data.artist,
        mixcloud: action.data.mixcloud,
      };
    case UPDATE_NOW_PLAYING:
      return {
        ...state,
        show_title: action.data.show_title,
        artist: action.data.artist,
        image: action.data.image,
      };
    case STOP:
      return {
        ...state,
        nowPlaying: false,
      };
    case CLOSE_NOW_PLAYING:
      return {
        ...state,
        ...initialNowPlaying,
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
  mixcloud: null,
  image: null,
};
