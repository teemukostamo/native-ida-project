import {FETCH_LIVE_SHOWS} from './live/reducer';
import {PLAY_HELSINKI, STOP} from './nowPlaying/reducer';
import {LiveShows} from './live/types';

interface LiveShowsAction {
  type: typeof FETCH_LIVE_SHOWS;
  data: LiveShows;
}

interface PlayHelsinkiAction {
  type: typeof PLAY_HELSINKI | typeof STOP;
}

type ActionTypes = LiveShowsAction | PlayHelsinkiAction;

export default ActionTypes;
