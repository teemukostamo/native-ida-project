import ActionTypes from './actionTypes';

export const PLAY_HELSINKI = 'PLAY_HELSINKI';

export interface NowPlayingState {
  nowPlaying: boolean;
  streamType: string | null;
}

export const nowPlayingReducer = (
  state: NowPlayingState,
  action: ActionTypes,
) => {
  switch (action.type) {
    case 'PLAY_HELSINKI':
      return {
        ...state,
        nowPlaying: true,
        streamType: 'LIVE',
      };
    default:
      return state;
  }
};

export const initialNowPlaying = {
  nowPlaying: false,
  streamType: null,
};
