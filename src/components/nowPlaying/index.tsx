import React, {useContext} from 'react';

import {AppContext} from '../../contexts/main';
import {
  stopPlayerPress,
  onTallinnPlayPress,
  onHelsinkiPlayPress,
} from '../../contexts/nowPlaying/actions';

import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';

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
  },
  studioText: {
    fontFamily: 'Menlo-Bold',
    margin: 5,
  },
});

const NowPlayingBar = () => {
  const {state, dispatch} = useContext(AppContext);
  const {nowPlaying} = state;
  console.log('nowPlaying state at nowplaying', nowPlaying);

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
      <View style={styles.flexContainer}>
        <Text style={styles.studioText}>
          Now playing {nowPlaying.show_title?.toUpperCase()} by{' '}
          {nowPlaying.artist} from {nowPlaying.studio?.toUpperCase()}
        </Text>
        <IconButton
          icon={!nowPlaying.nowPlaying ? 'play' : 'stop'}
          onPress={() => handlePress()}
        />
      </View>
    </View>
  ) : null;
};

export default NowPlayingBar;
