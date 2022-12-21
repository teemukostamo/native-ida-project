import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import useLive from '../../hooks/useLive';

import Tallinn from './Tallinn';
import Helsinki from './Helsinki';
import Loading from '../layout/Loading';
import Error from '../layout/Error';

import {AppContext} from '~src/contexts/main';

const styles = StyleSheet.create({
  liveContainer: {
    flex: 1,
  },
});

const LiveView: React.FC = () => {
  const {state} = useContext(AppContext);
  const {isLoading, isError, data} = useLive();

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  return (
    <View style={styles.liveContainer}>
      <View style={styles.liveContainer}>
        <Tallinn nowPlaying={state.nowPlaying} liveState={data} />
        <Helsinki nowPlaying={state.nowPlaying} liveState={data} />
      </View>
    </View>
  );
};

export default LiveView;
