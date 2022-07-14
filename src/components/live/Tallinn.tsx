import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LiveShows} from '../../types/liveRequest';
import OffAir from './OffAir';
import OnAir from './OnAir';

const styles = StyleSheet.create({
  flexItemA: {
    flexGrow: 1,
    backgroundColor: '#ebaccb',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  title: {
    marginTop: 50,
    marginLeft: 10,
  },
});

interface Props {
  liveState: LiveShows | null;
  onPress: () => void;
}

const Tallinn: React.FC<Props> = ({liveState, onPress}) => {
  return liveState && liveState.live && liveState.live.tallinn ? (
    <View style={styles.flexItemA}>
      {liveState?.live.tallinn.live_show ? (
        <OnAir onPress={onPress} town="Tallinn" />
      ) : (
        <OffAir
          styles={styles}
          city="Tallinn"
          nextShow={liveState?.live.tallinn.next_show.show_title}
          nextShowStartTime={
            liveState?.live.tallinn.next_show.episode_time.episode_start
          }
        />
      )}
    </View>
  ) : null;
};

export default Tallinn;
