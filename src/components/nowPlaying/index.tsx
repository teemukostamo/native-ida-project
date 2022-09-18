import React, {useContext, useState} from 'react';
import {useTrackPlayerEvents, Event, State} from 'react-native-track-player';

import {View, StyleSheet, Pressable} from 'react-native';
import {Text, IconButton} from 'react-native-paper';
import {
  closeNowPlaying,
  stopPlayerPress,
  onTallinnPlayPress,
  onHelsinkiPlayPress,
} from '~src/contexts/nowPlaying/actions';
import {AppContext} from '~src/contexts/main';

import Mixcloud from './mixcloud';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: theme.colors.gray,
    flexDirection: 'row',
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButtonContainer: {
    position: 'absolute',
    backgroundColor: theme.colors.darkGray,
    paddingHorizontal: 5,
    top: -22,
    left: 353,
  },
  closeButtonIcon: {
    color: theme.colors.gray,
    fontSize: 25,
  },
  playButtonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 12,
    flex: 1,
  },
  studioText: {
    ...theme.fonts.light,
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
            {/* take now playing artist from from schedule state */}
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
        <View style={styles.flexContainer}>
          <Mixcloud />
          <Pressable
            onPress={() => closeNowPlaying(dispatch)}
            style={styles.closeButtonContainer}>
            <Text style={styles.closeButtonIcon}>X</Text>
          </Pressable>
        </View>
      )}
    </View>
  ) : null;
};

export default NowPlayingBar;
