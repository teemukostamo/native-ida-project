import React, {useEffect, useReducer} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeRouter, Route, Routes, Navigate} from 'react-router-native';
import {useTrackPlayerEvents, Event} from 'react-native-track-player';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

import Navigation from './components/layout/Navigation';
import NowPlayingBar from './components/nowPlaying';
import LiveView from './components/live';
import ScheduleView from './components/schedule';
import MyIdaView from './components/myida';
import AccountView from './components/account';
import ShowPage from './components/shows';
import EpisodePage from './components/episodes';
import ExploreShows from './components/explore/ExploreShows';
import ExploreEpisodes from './components/explore/ExploreEpisodes';
import TopBar from './components/layout/TopBar';

import {AppContext, mainReducer, initialState} from './contexts/main';
import {getLiveShows} from './contexts/live/actions';
import {getFullSchedule} from './contexts/schedule/actions';
import {getMsToNextHour} from './utils/utils';

import {setupPlayer} from './components/trackPlayer';

import theme from './theme';
import {getFavorites} from './contexts/favorites/actions';

const queryClient = new QueryClient();

const App = () => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  const events = [Event.PlaybackState, Event.PlaybackError];
  useTrackPlayerEvents(events, async event => {
    if (event.event === Event.PlaybackError) {
      console.warn('An error occured while playing the current track.');
    }
    if (event.event === Event.PlaybackState) {
      console.log('player state is ', event.state);
    }
  });

  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      getLiveShows(dispatch);
      //getLatestEpisodes(dispatch);
      getFullSchedule(dispatch);
      getFavorites(dispatch);

      setTimeout(() => {
        getLiveShows(dispatch);
        //getLatestEpisodes(dispatch);
        console.log('fetched shows at the next hour at: ', new Date());

        setInterval(() => {
          getLiveShows(dispatch);
          //getLatestEpisodes(dispatch);
          console.log('fetched shows at every hour at: ', new Date());
        }, 3600000);
      }, getMsToNextHour());
    }

    const initPlayer = async () => {
      await setupPlayer();
    };
    initPlayer();

    return () => {
      isMounted = false;
    };
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
                <Route path="/schedule" element={<ScheduleView />} />
                <Route path="/myida" element={<MyIdaView />} />
                <Route path="/account" element={<AccountView />} />
                <Route path="shows" element={<ExploreShows />} />
                <Route path="episodes" element={<ExploreEpisodes />} />
                <Route path="/shows/:slug/:id" element={<ShowPage />} />
                <Route path="/episodes/:slug/:id" element={<EpisodePage />} />
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
