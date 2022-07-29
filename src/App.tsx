import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {useTrackPlayerEvents, Event} from 'react-native-track-player';

import Navigation from './components/Navigation';
import NowPlayingBar from './components/nowPlaying';

import {AppContext, mainReducer, initialState} from './contexts/main';
import {getLiveShows} from './contexts/live/actions';
import {getLatestShows} from './contexts/latest/actions';
import {getFullSchedule} from './contexts/schedule/actions';
import {getMsToNextHour} from './utils';

import {setupPlayer} from './components/trackPlayer';

import theme from './theme';

const App = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const events = [Event.PlaybackState, Event.PlaybackError];
  useTrackPlayerEvents(events, async event => {
    if (event.type === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.type === Event.PlaybackState) {
      console.log('player state is ', event.state);
    }
  });

  useEffect(() => {
    getLiveShows(dispatch);
    getLatestShows(dispatch);
    getFullSchedule(dispatch);

    setTimeout(() => {
      getLiveShows(dispatch);
      getLatestShows(dispatch);
      console.log('fetched shows at the next hour at: ', new Date());

      setInterval(() => {
        getLiveShows(dispatch);
        getLatestShows(dispatch);
        console.log('fetched shows at every hour at: ', new Date());
      }, 3600000);
    }, getMsToNextHour());

    const initPlayer = async () => {
      await setupPlayer();
    };
    initPlayer();
  }, []);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: theme.colors.gray,
      flexDirection: 'column-reverse',
    },
  });

  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        <SafeAreaView style={styles.container}>
          <NowPlayingBar />
          <Navigation />
        </SafeAreaView>
      </AppContext.Provider>
    </>
  );
};

export default App;
