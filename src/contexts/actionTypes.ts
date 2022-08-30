import {
  PLAY_HELSINKI,
  PLAY_TALLINN,
  PLAY_MIXCLOUD,
  STOP,
} from './nowPlaying/reducer';

import {FETCH_LIVE_SHOWS} from './live/reducer';
import {LiveShows} from './live/types';

import {FETCH_LATEST_SHOWS} from './latest/reducer';
import {LatestEpisodes} from './latest/types';

import {FETCH_FULL_SCHEDULE} from './schedule/reducer';
import {FullSchedule} from './schedule/types';

import {SET_SHOW_PAGE_STATE} from './shows/reducer';
import {ShowItemType} from './shows/types';

import {
  SET_SEARCH_QUERY,
  SET_CHANNEL,
  SET_GENRE,
  CLEAR_FILTERS,
} from './filters/reducer';

interface LiveShowsAction {
  type: typeof FETCH_LIVE_SHOWS;
  data: LiveShows;
}

interface LatestEpisodesAction {
  type: typeof FETCH_LATEST_SHOWS;
  data: LatestEpisodes;
}

interface FullScheduleAction {
  type: typeof FETCH_FULL_SCHEDULE;
  data: FullSchedule;
}

interface ShowPageAction {
  type: typeof SET_SHOW_PAGE_STATE;
  data: ShowItemType;
}

interface StartPlayerAction {
  type: typeof PLAY_HELSINKI | typeof PLAY_TALLINN | typeof PLAY_MIXCLOUD;
  data: {
    artist: string;
    show_title: string;
    mixcloud: string | null;
  };
}

interface StopPlayerAction {
  type: typeof STOP;
}

interface SetFilterAction {
  type: typeof SET_CHANNEL | typeof SET_SEARCH_QUERY;
  data: string;
}

interface SetGenresAction {
  type: typeof SET_GENRE;
  data: {
    label: string;
    value: string;
  };
}

interface ClearFiltersAction {
  type: typeof CLEAR_FILTERS;
}

type ActionTypes =
  | LiveShowsAction
  | LatestEpisodesAction
  | FullScheduleAction
  | ShowPageAction
  | StartPlayerAction
  | StopPlayerAction
  | SetFilterAction
  | SetGenresAction
  | ClearFiltersAction;

export default ActionTypes;
