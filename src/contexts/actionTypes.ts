import {
  PLAY_HELSINKI,
  PLAY_TALLINN,
  PLAY_MIXCLOUD,
  UPDATE_NOW_PLAYING,
  STOP,
  CLOSE_NOW_PLAYING,
} from './nowPlaying/reducer';
import {EpisodeItemType} from '~src/schemas/episode';
import {ShowItemType} from '~src/schemas/show';
import {FETCH_LIVE_SHOWS} from './live/reducer';
import {LiveShows} from './live/types';

import {OPEN_MODAL, CLOSE_MODAL} from './favoriteModal/reducer';
import {FavoriteModalType} from './favoriteModal/types';

import {
  GET_FAVORITES,
  ADD_EPISODE,
  ADD_SHOW,
  REMOVE_EPISODE,
  REMOVE_SHOW,
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  CLEAR_HISTORY,
} from './favorites/reducer';
import {FavoritesType} from './favorites/types';

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

interface StartPlayerAction {
  type: typeof PLAY_HELSINKI | typeof PLAY_TALLINN | typeof PLAY_MIXCLOUD;
  data: {
    artist: string;
    show_title: string;
    mixcloud: string | null;
    image: string | null;
    studio: string;
  };
}

interface StopPlayerAction {
  type: typeof STOP | typeof CLOSE_NOW_PLAYING;
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

interface CloseModalAction {
  type: typeof CLOSE_MODAL;
}

interface OpenModalAction {
  type: typeof OPEN_MODAL;
  data: FavoriteModalType;
}

interface AddRemoveFavoriteShowAction {
  type: typeof ADD_SHOW | typeof REMOVE_SHOW;
  data: ShowItemType;
}

interface AddRemoveFavoriteEpisodeAction {
  type:
    | typeof ADD_EPISODE
    | typeof REMOVE_EPISODE
    | typeof ADD_TO_HISTORY
    | typeof REMOVE_FROM_HISTORY;
  data: EpisodeItemType;
}

interface GetFavoritesAction {
  type: typeof GET_FAVORITES;
  data: FavoritesType;
}

interface ClearPlayHistory {
  type: typeof CLEAR_HISTORY;
}

interface UpdateNowPlaying {
  type: typeof UPDATE_NOW_PLAYING;
  data: {
    show_title: string;
    artist: string;
    image: string;
  };
}

type ActionTypes =
  | LiveShowsAction
  | StartPlayerAction
  | StopPlayerAction
  | UpdateNowPlaying
  | SetFilterAction
  | SetGenresAction
  | ClearFiltersAction
  | CloseModalAction
  | OpenModalAction
  | AddRemoveFavoriteShowAction
  | AddRemoveFavoriteEpisodeAction
  | GetFavoritesAction
  | ClearPlayHistory;

export default ActionTypes;
