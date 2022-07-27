import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {AppContext, mainReducer, initialState} from './contexts/main';
import Navigation from './components/Navigation';
import {getMsToNextHour} from './utils';

import theme from './theme';

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
    console.log('fetching shows on initial render at: ', new Date());
    fetchLiveShows();

    setTimeout(() => {
      fetchLiveShows();
      console.log('fetched shows at the next hour at: ', new Date());
      setInterval(() => {
        console.log('fetched shows at every hour at: ', new Date());
        fetchLiveShows();
      }, 3600000);
    }, getMsToNextHour());
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.primary,
    },
  });

  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        <SafeAreaView style={styles.container}>
          <Navigation />
        </SafeAreaView>
      </AppContext.Provider>
    </>
  );
};

export default App;
