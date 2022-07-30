import {PLAY_HELSINKI, PLAY_TALLINN, STOP} from './nowPlaying/reducer';

import {FETCH_LIVE_SHOWS} from './live/reducer';
import {LiveShows} from './live/types';

import {FETCH_LATEST_SHOWS} from './latest/reducer';
import {LatestShows} from './latest/types';

import {FETCH_FULL_SCHEDULE} from './schedule/reducer';
import {FullSchedule} from './schedule/types';

interface LiveShowsAction {
  type: typeof FETCH_LIVE_SHOWS;
  data: LiveShows;
}

interface LatestShowsAction {
  type: typeof FETCH_LATEST_SHOWS;
  data: LatestShows;
}

interface FullScheduleAction {
  type: typeof FETCH_FULL_SCHEDULE;
  data: FullSchedule;
}

interface StartPlayerAction {
  type: typeof PLAY_HELSINKI | typeof PLAY_TALLINN;
  data: {
    artist: string;
    show_title: string;
  };
}

interface StopPlayerAction {
  type: typeof STOP;
}

type ActionTypes =
  | LiveShowsAction
  | LatestShowsAction
  | FullScheduleAction
  | StartPlayerAction
  | StopPlayerAction;

export default ActionTypes;
