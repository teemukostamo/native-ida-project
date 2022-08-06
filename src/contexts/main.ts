import {createContext, Dispatch} from 'react';

import {LiveShows} from './live/types';
import {liveShowsReducer} from './live/reducer';

import {LatestEpisodes} from './latest/types';
import {LatestEpisodesReducer} from './latest/reducer';

import {NowPlayingState} from './nowPlaying/types';
import {initialNowPlaying, nowPlayingReducer} from './nowPlaying/reducer';

import {FullSchedule} from './schedule/types';
import {fullScheduleReducer} from './schedule/reducer';

import ActionTypes from './actionTypes';

type InitialStateType = {
  nowPlaying: NowPlayingState;
  live: LiveShows;
  latest: LatestEpisodes;
  fullSchedule: FullSchedule;
};

export const initialState = {
  nowPlaying: initialNowPlaying,
  live: null,
  latest: null,
  fullSchedule: null,
};

export const mainReducer = (
  {nowPlaying, live, latest, fullSchedule}: InitialStateType,
  action: ActionTypes,
) => ({
  nowPlaying: nowPlayingReducer(nowPlaying, action),
  live: liveShowsReducer(live, action),
  latest: LatestEpisodesReducer(latest, action),
  fullSchedule: fullScheduleReducer(fullSchedule, action),
});

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: ({}) => null,
});
