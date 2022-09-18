import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import Tallinn from './Tallinn';
import Helsinki from './Helsinki';
import Loading from '../layout/Loading';
import {AppContext} from '~src/contexts/main';

const styles = StyleSheet.create({
  liveContainer: {
    flex: 1,
  },
});

const LiveView: React.FC = () => {
  const {state} = useContext(AppContext);

  return state.live ? (
    <View style={styles.liveContainer}>
      <View style={styles.liveContainer}>
        <Tallinn nowPlaying={state.nowPlaying} liveState={state.live} />
        <Helsinki nowPlaying={state.nowPlaying} liveState={state.live} />
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default LiveView;
