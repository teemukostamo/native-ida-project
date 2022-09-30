import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
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

const PlayHistory: React.FC<Props> = ({episodes}) => {
  return (
    <View style={styles.container}>
      <View style={styles.episodesContainer}>
        <FlatList
          ListEmptyComponent={
            <EmptyListPlaceholder text="No episodes listened to yet" />
          }
          data={episodes.map(episode => episode)}
          renderItem={({item}) => <EpisodeItem item={item} />}
        />
        <FavoriteModal />
      </View>
    </View>
  );
};

export default PlayHistory;
