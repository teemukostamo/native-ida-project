import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import Tallinn from './Tallinn';
import Helsinki from './Helsinki';
import {AppContext} from '../../contexts/main';

const styles = StyleSheet.create({
  liveContainer: {
    display: 'flex',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});

const LiveView: React.FC = () => {
  const {state, dispatch} = useContext(AppContext);

  const onPress = () => {
    dispatch({
      type: 'PLAY_HELSINKI',
    });
  };

  return state.live ? (
    <View style={styles.liveContainer}>
      <Tallinn
        nowPlaying={state.nowPlaying}
        onPress={onPress}
        liveState={state.live}
      />
      <Helsinki
        nowPlaying={state.nowPlaying}
        onPress={onPress}
        liveState={state.live}
      />
    </View>
  ) : null;
};

export default LiveView;
