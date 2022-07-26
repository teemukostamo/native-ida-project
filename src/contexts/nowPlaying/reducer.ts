import ActionTypes from '../actionTypes';
import {NowPlayingState} from './types';

export const PLAY_HELSINKI = 'PLAY_HELSINKI';
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
        // action.data helsinki
        streamType: 'LIVE',
      };
    case 'STOP':
      return {
        ...state,
        streamType: null,
        nowPlaying: false,
      };
    default:
      return state;
  }
};

export const initialNowPlaying = {
  nowPlaying: false,
  streamType: null,
};
