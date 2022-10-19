import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import ShowItem from '../shows/ShowItem';
import {ShowItemType} from '~src/contexts/shows/types';
import FavoriteModal from '../layout/FavoriteModal';
import EmptyListPlaceholder from './EmptyListPlaceholder';

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
        ListEmptyComponent={
          <EmptyListPlaceholder text="No favorite shows added" />
        }
        data={shows.map(show => show)}
        renderItem={({item}) => <ShowItem item={item} />}
        // keyExtractor={item => item.ID}
      />
      <FavoriteModal />
    </View>
  );
};

export default FavoriteShows;
