import {FETCH_LIVE_SHOWS} from './liveShowsContext';
import {PLAY_HELSINKI} from './nowPlayingContext';
import {LiveShows} from '../types/liveRequest';

interface LiveShowsAction {
  type: typeof FETCH_LIVE_SHOWS;
  data: LiveShows;
}

interface PlayHelsinkiAction {
  type: typeof PLAY_HELSINKI;
}

type ActionTypes = LiveShowsAction | PlayHelsinkiAction;

export default ActionTypes;
