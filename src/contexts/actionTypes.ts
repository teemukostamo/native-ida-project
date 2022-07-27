import {FETCH_LIVE_SHOWS} from './live/reducer';
import {PLAY_HELSINKI, PLAY_TALLINN, STOP} from './nowPlaying/reducer';
import {LiveShows} from './live/types';

interface LiveShowsAction {
  type: typeof FETCH_LIVE_SHOWS;
  data: LiveShows;
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

type ActionTypes = LiveShowsAction | StartPlayerAction | StopPlayerAction;

export default ActionTypes;
