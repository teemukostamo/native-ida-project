import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import useEpisodes from '../../hooks/useEpisodes';
import EpisodeItem from '../episodes/EpisodeItem';
import Loading from '../layout/Loading';
import Error from '../layout/Error';
import Filters from '../layout/Filters';

import theme from '../../theme';
import FavoriteModal from '../layout/FavoriteModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  searchInput: {
    fontFamily: 'Menlo-Bold',
    margin: 10,
    backgroundColor: theme.colors.primary,
    paddingVertical: 2,
    paddingLeft: 6,
    paddingHorizontal: 1,
    color: theme.colors.backdrop,
  },
});

const ExploreEpisodes: React.FC = () => {
  const {isLoading, isFetching, isError, data, fetchMore} = useEpisodes();

  if (isError) {
    return (
      <View style={styles.container}>
        <Error />
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Filters />
      <FlatList
        data={data?.pages.map(page => page).flat()}
        renderItem={({item}) => <EpisodeItem item={item} />}
        // keyExtractor={item => item.id}
        onEndReached={() => fetchMore()}
        ListFooterComponent={isFetching ? <Loading /> : null}
        refreshing={isFetching}
      />
      <FavoriteModal />
    </View>
  );
};

export default ExploreEpisodes;
