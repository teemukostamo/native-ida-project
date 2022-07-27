import React, {useContext} from 'react';

import {AppContext} from '../../contexts/main';

import {View, StyleSheet} from 'react-native';
import {Text, IconButton} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    height: 55,
    backgroundColor: 'red',
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
});

const NowPlayingBar = () => {
  const {state} = useContext(AppContext);
  console.log(state);

  return state.nowPlaying.showNowPlayingBar ? (
    <View style={styles.container}>
      <View style={styles.flexContainer}>
        <Text>Now playing bar</Text>
        <IconButton
          icon={state.nowPlaying.nowPlaying ? 'play' : 'pause'}
          onPress={() => console.log('pressed nowplaying bar')}
        />
      </View>
    </View>
  ) : null;
};

export default NowPlayingBar;
