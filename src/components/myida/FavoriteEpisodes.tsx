import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {LatestEpisode} from '../../contexts/latest/types';

import EpisodeItem from '../episodes/EpisodeItem';
import FavoriteModal from '../layout/FavoriteModal';

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
          ListEmptyComponent={<Text>No favorites added</Text>}
          data={episodes.map(episode => episode)}
          renderItem={({item}) => <EpisodeItem item={item} />}
        />
        <FavoriteModal />
      </View>
    </View>
  );
};

export default FavoriteEpisodes;
