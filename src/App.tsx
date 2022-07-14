import React, {useEffect, useReducer} from 'react';

import {AppContext, mainReducer, initialState} from './contexts/main';
import Navigation from './components/Navigation';

const App = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  useEffect(() => {
    const fetchLiveShows = async () => {
      const response = await fetch(
        'https://admin.idaidaida.net/wp-json/ida/v3/live',
      );
      const liveShows = await response.json();

      dispatch({
        type: 'FETCH_LIVE_SHOWS',
        data: liveShows,
      });
    };

    fetchLiveShows();
  }, []);

  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        <Navigation />
      </AppContext.Provider>
    </>
  );
};

export default App;
