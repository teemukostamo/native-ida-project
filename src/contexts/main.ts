import {createContext, Dispatch} from 'react';

import {LiveShows} from './live/types';
import {liveShowsReducer} from './live/reducer';

import {LatestEpisodes} from './latest/types';
import {LatestEpisodesReducer} from './latest/reducer';

import {NowPlayingState} from './nowPlaying/types';
import {initialNowPlaying, nowPlayingReducer} from './nowPlaying/reducer';

import {FullSchedule} from './schedule/types';
import {fullScheduleReducer} from './schedule/reducer';

import {ShowItemType} from './shows/types';
import {showPageReducer} from './shows/reducer';

import {FiltersType} from './filters/types';
import {filtersReducer, initialFiltersState} from './filters/reducer';

import {FavoriteModalType} from './favoriteModal/types';
import {
  favoriteModalReducer,
  initialFavoriteModalState,
} from './favoriteModal/reducer';

import {FavoritesType} from './favorites/types';
import {favoritesReducer, initialFavoritesState} from './favorites/reducer';

import ActionTypes from './actionTypes';

type InitialStateType = {
  nowPlaying: NowPlayingState;
  live: LiveShows;
  latest: LatestEpisodes;
  fullSchedule: FullSchedule;
  showPage: ShowItemType;
  filters: FiltersType;
  favoriteModal: FavoriteModalType;
  favorites: FavoritesType;
};

export const initialState = {
  nowPlaying: initialNowPlaying,
  live: null,
  latest: null,
  fullSchedule: null,
  showPage: null,
  filters: initialFiltersState,
  favoriteModal: initialFavoriteModalState,
  favorites: initialFavoritesState,
};

export const mainReducer = (
  {
    nowPlaying,
    live,
    latest,
    fullSchedule,
    showPage,
    filters,
    favoriteModal,
    favorites,
  }: InitialStateType,
  action: ActionTypes,
) => ({
  nowPlaying: nowPlayingReducer(nowPlaying, action),
  live: liveShowsReducer(live, action),
  latest: LatestEpisodesReducer(latest, action),
  fullSchedule: fullScheduleReducer(fullSchedule, action),
  showPage: showPageReducer(showPage, action),
  filters: filtersReducer(filters, action),
  favoriteModal: favoriteModalReducer(favoriteModal, action),
  favorites: favoritesReducer(favorites, action),
});

export const AppContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<ActionTypes>;
}>({
  state: initialState,
  dispatch: ({}) => null,
});
