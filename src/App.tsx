import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeRouter, Route, Routes, Navigate} from 'react-router-native';
import {useTrackPlayerEvents, Event} from 'react-native-track-player';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Navigation from './components/layout/Navigation';
import NowPlayingBar from './components/nowPlaying';
import LiveView from './components/live';
import ExploreView from './components/explore';
import ScheduleView from './components/schedule';
import MyIdaView from './components/myida';

import {AppContext, mainReducer, initialState} from './contexts/main';
import {getLiveShows} from './contexts/live/actions';
import {getFullSchedule} from './contexts/schedule/actions';
import {getMsToNextHour} from './utils';

import {setupPlayer} from './components/trackPlayer';

import theme from './theme';
import TopBar from './components/layout/TopBar';

const queryClient = new QueryClient();

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
    //getLatestShows(dispatch);
    getFullSchedule(dispatch);

    setTimeout(() => {
      getLiveShows(dispatch);
      //getLatestShows(dispatch);
      console.log('fetched shows at the next hour at: ', new Date());

      setInterval(() => {
        getLiveShows(dispatch);
        //getLatestShows(dispatch);
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
      flexDirection: 'column',
    },
  });

  return (
    <>
      <AppContext.Provider value={{state, dispatch}}>
        <NativeRouter>
          <QueryClientProvider client={queryClient}>
            <SafeAreaView style={styles.container}>
              <TopBar />
              <Routes>
                <Route path="/" element={<LiveView />} />
                <Route path="/explore" element={<ExploreView />} />
                <Route path="/schedule" element={<ScheduleView />} />
                <Route path="/myida" element={<MyIdaView />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
              <NowPlayingBar />
              <Navigation />
            </SafeAreaView>
          </QueryClientProvider>
        </NativeRouter>
      </AppContext.Provider>
    </>
  );
};

export default App;
