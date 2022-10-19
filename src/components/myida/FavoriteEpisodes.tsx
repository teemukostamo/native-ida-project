import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {LatestEpisode} from '~src/contexts/latest/types';

import EpisodeItem from '../episodes/EpisodeItem';
import FavoriteModal from '../layout/FavoriteModal';
import EmptyListPlaceholder from './EmptyListPlaceholder';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  episodesContainer: {
    flex: 1,
  },
});

type Props = {
  episodes: LatestEpisode[];
};

const FavoriteEpisodes: React.FC<Props> = ({episodes}) => {
  return (
    <View style={styles.container}>
      <View style={styles.episodesContainer}>
        <FlatList
          ListEmptyComponent={
            <EmptyListPlaceholder text="No favorite episodes added" />
          }
          data={episodes.map(episode => episode)}
          renderItem={({item}) => <EpisodeItem item={item} />}
        />
        <FavoriteModal />
      </View>
    </View>
  );
};

export default FavoriteEpisodes;
