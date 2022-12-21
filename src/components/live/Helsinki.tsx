import React from 'react';
import {View, StyleSheet} from 'react-native';

import {LiveShowsType} from '~src/schemas/live';
import {NowPlayingState} from '~src/contexts/nowPlaying/types';

import OnAir from './OnAir';
import OffAir from './OffAir';
import Offline from './Offline';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: theme.colors.accent,
  },
});

interface Props {
  liveState: LiveShowsType;
  nowPlaying: NowPlayingState;
}

const Helsinki: React.FC<Props> = ({liveState, nowPlaying}) => {
  return liveState && liveState.helsinki ? (
    <View style={styles.container}>
      {liveState?.helsinki.live_show ? (
        <OnAir
          liveShow={liveState?.helsinki.live_show}
          nowPlaying={nowPlaying}
          studio="helsinki"
          genres={liveState.helsinki.live_show.taxonomies.genres ?? []}
        />
      ) : liveState.helsinki.next_show ? (
        <OffAir
          studio="helsinki"
          nextShow={liveState?.helsinki.next_show.show_title}
          nextShowStartTime={
            liveState?.helsinki.next_show.episode_time.episode_start
          }
        />
      ) : (
        <Offline channel="helsinki" />
      )}
    </View>
  ) : null;
};

export default Helsinki;
