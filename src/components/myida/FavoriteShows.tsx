import React from 'react';
import {View, FlatList, StyleSheet, Text} from 'react-native';

import ShowItem from '../shows/ShowItem';
import {ShowItemType} from '~src/contexts/shows/types';
import FavoriteModal from '../layout/FavoriteModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

type Props = {
  shows: ShowItemType[];
};

const FavoriteShows: React.FC<Props> = ({shows}) => {
  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={<Text>No favorites added</Text>}
        data={shows.map(show => show)}
        renderItem={({item}) => <ShowItem item={item} />}
        // keyExtractor={item => item.ID}
      />
      <FavoriteModal />
    </View>
  );
};

export default FavoriteShows;
