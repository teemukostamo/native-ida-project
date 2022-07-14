import {createContext, Dispatch} from 'react';
import {LiveShows} from '../types/liveRequest';
import ActionTypes from './actionTypes';
import {liveShowsReducer} from './liveShowsContext';
import {
  NowPlayingState,
  initialNowPlaying,
  nowPlayingReducer,
} from './nowPlayingContext';

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
  dispatch: () => null,
});

// const AppProvider: React.FC = ({children}) => {
//   const [state, dispatch] = useReducer(mainReducer, initialState);

//   return (
//     <AppContext.Provider value={{state, dispatch}}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export {AppProvider, AppContext};
