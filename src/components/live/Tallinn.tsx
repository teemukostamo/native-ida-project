import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LiveShows} from '../../contexts/live/types';
import {NowPlayingState} from '../../contexts/nowPlaying/types';
import {onTallinnPlayPress} from '../../contexts/nowPlaying/actions';

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
}

const Tallinn: React.FC<Props> = ({nowPlaying, liveState}) => {
  return liveState && liveState.tallinn ? (
    <View style={styles.flexItemA}>
      {liveState?.tallinn.live_show ? (
        <OnAir
          liveShow={liveState?.tallinn.live_show}
          nowPlaying={nowPlaying}
          onPress={onTallinnPlayPress}
          studio="tallinn"
        />
      ) : (
        <OffAir
          styles={styles}
          studio="Tallinn"
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
