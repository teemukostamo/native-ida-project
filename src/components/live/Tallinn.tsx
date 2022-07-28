import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LiveShows} from '../../contexts/live/types';
import {NowPlayingState} from '../../contexts/nowPlaying/types';

import OffAir from './OffAir';
import OnAir from './OnAir';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: theme.colors.primary,
  },
  title: {
    marginTop: 10,
    marginLeft: 10,
  },
});

interface Props {
  liveState: LiveShows;
  nowPlaying: NowPlayingState;
}

const Tallinn: React.FC<Props> = ({nowPlaying, liveState}) => {
  return liveState && liveState.tallinn ? (
    <View style={styles.container}>
      {liveState?.tallinn.live_show ? (
        <OnAir
          liveShow={liveState?.tallinn.live_show}
          nowPlaying={nowPlaying}
          studio="tallinn"
        />
      ) : (
        <OffAir
          studio="tallinn"
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
