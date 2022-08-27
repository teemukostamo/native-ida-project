import React, {useContext, useState} from 'react';
import {useTrackPlayerEvents, Event, State} from 'react-native-track-player';

import {AppContext} from '../../contexts/main';
import {
  stopPlayerPress,
  onTallinnPlayPress,
  onHelsinkiPlayPress,
} from '../../contexts/nowPlaying/actions';

import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';

import Mixcloud from './mixcloud';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: theme.colors.gray,
    flexDirection: 'row',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  playButtonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 12,
    flex: 1,
  },
  studioText: {
    fontFamily: 'Menlo-Bold',
    margin: 5,
    flex: 5,
  },
});

const NowPlayingBar = () => {
  const {state, dispatch} = useContext(AppContext);
  const [buffering, setBuffering] = useState(false);
  const {nowPlaying} = state;

  useTrackPlayerEvents([Event.PlaybackState], async event => {
    console.log('event state', event);
    if (event.state === State.Buffering) {
      setBuffering(true);
    } else {
      setBuffering(false);
    }
  });

  const handlePress = () => {
    if (nowPlaying.nowPlaying) {
      stopPlayerPress(dispatch);
    }

    if (
      !nowPlaying.nowPlaying &&
      nowPlaying.studio &&
      nowPlaying.show_title &&
      nowPlaying.artist
    ) {
      if (nowPlaying.studio === 'helsinki') {
        onHelsinkiPlayPress(dispatch, nowPlaying.show_title, nowPlaying.artist);
      }
      if (nowPlaying.studio === 'tallinn') {
        onTallinnPlayPress(dispatch, nowPlaying.show_title, nowPlaying.artist);
      }
    }
  };

  return nowPlaying.showNowPlayingBar ? (
    <View style={styles.container}>
      {nowPlaying.streamType === 'live' ? (
        <View style={styles.flexContainer}>
          <Text style={styles.studioText}>
            Now playing {nowPlaying.show_title?.toUpperCase()} by{' '}
            {nowPlaying.artist} from {nowPlaying.studio?.toUpperCase()}
          </Text>
          <IconButton
            icon={
              buffering ? 'loading' : !nowPlaying.nowPlaying ? 'play' : 'stop'
            }
            onPress={() => handlePress()}
          />
        </View>
      ) : (
        <Mixcloud />
      )}
    </View>
  ) : null;
};

export default NowPlayingBar;
