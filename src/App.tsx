import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {AppContext, mainReducer, initialState} from './contexts/main';
import Navigation from './components/Navigation';

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

    fetchLiveShows();
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
