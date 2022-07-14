import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LiveShows} from '../../types/liveRequest';
import OnAir from './OnAir';
import OffAir from './OffAir';

const styles = StyleSheet.create({
  flexItemB: {
    flexGrow: 1,
    backgroundColor: '#7162dd',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
  },
});

interface Props {
  liveState: LiveShows;
  onPress: () => void;
}

const Helsinki: React.FC<Props> = ({liveState, onPress}) => {
  console.log('livestate in helsinki', liveState?.live);
  return liveState && liveState.live ? (
    <View style={styles.flexItemB}>
      {liveState?.live.helsinki.live_show ? (
        <OnAir onPress={onPress} town="Helsinki" />
      ) : (
        <OffAir
          styles={styles}
          city="Helsinki"
          nextShow={liveState?.live.helsinki.next_show.show_title}
          nextShowStartTime={
            liveState?.live.helsinki.next_show.episode_time.episode_start
          }
        />
      )}
    </View>
  ) : //some offline spinner here
  null;
};

export default Helsinki;
