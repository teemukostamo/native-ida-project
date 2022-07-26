import {createContext, Dispatch} from 'react';
import {LiveShows} from './live/types';
import {liveShowsReducer} from './live/reducer';

import {NowPlayingState} from './nowPlaying/types';
import {initialNowPlaying, nowPlayingReducer} from './nowPlaying/reducer';

import ActionTypes from './actionTypes';

type InitialStateType = {
  nowPlaying: NowPlayingState;
  live: LiveShows;
};

export const initialState = {
  nowPlaying: initialNowPlaying,
  live: null,
};

export const mainReducer = (
  {nowPlaying, live}: InitialStateType,
  action: ActionTypes,
) => ({
  nowPlaying: nowPlayingReducer(nowPlaying, action),
  live: liveShowsReducer(live, action),
});

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: ({}) => null,
});

// export {AppProvider, AppContext};
