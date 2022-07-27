import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LiveShows} from '../../contexts/live/types';
import {NowPlayingState} from '../../contexts/nowPlaying/types';

import OnAir from './OnAir';
import OffAir from './OffAir';

const styles = StyleSheet.create({
  flexItemB: {
    flex: 3,
    backgroundColor: '#7162dd',
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
  },
});

interface Props {
  liveState: LiveShows;
  nowPlaying: NowPlayingState;
  onPress: () => void;
}

const Helsinki: React.FC<Props> = ({liveState, nowPlaying, onPress}) => {
  return liveState && liveState.helsinki ? (
    <View style={styles.flexItemB}>
      {liveState.helsinki.live_show ? (
        <OnAir
          liveShow={liveState?.helsinki.live_show}
          nowPlaying={nowPlaying}
          onPress={onPress}
          town="helsinki"
        />
      ) : (
        <OffAir
          styles={styles}
          city="Helsinki"
          nextShow={liveState?.helsinki.next_show.show_title}
          nextShowStartTime={
            liveState?.helsinki.next_show.episode_time.episode_start
          }
        />
      )}
    </View>
  ) : //some data loading spinner here
  null;
};

export default Helsinki;
