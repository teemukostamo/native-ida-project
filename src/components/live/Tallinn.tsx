import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LiveShows} from '../../contexts/live/types';
import {NowPlayingState} from '../../contexts/nowPlaying/types';

import OffAir from './OffAir';
import OnAir from './OnAir';

const styles = StyleSheet.create({
  flexItemA: {
    flex: 3,
    backgroundColor: '#ebaccb',
  },
  title: {
    marginTop: 50,
    marginLeft: 10,
  },
});

interface Props {
  liveState: LiveShows;
  nowPlaying: NowPlayingState;
  onPress: () => void;
}

const Tallinn: React.FC<Props> = ({nowPlaying, liveState, onPress}) => {
  return liveState && liveState.tallinn ? (
    <View style={styles.flexItemA}>
      {liveState?.tallinn.live_show ? (
        <OnAir
          liveShow={liveState?.tallinn.live_show}
          nowPlaying={nowPlaying}
          onPress={onPress}
          town="tallinn"
        />
      ) : (
        <OffAir
          styles={styles}
          city="Tallinn"
          nextShow={liveState?.tallinn.next_show.show_title}
          nextShowStartTime={
            liveState?.tallinn.next_show.episode_time.episode_start
          }
        />
      )}
    </View>
  ) : null;
};

export default Tallinn;
