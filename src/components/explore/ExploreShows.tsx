import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ShowItem from '../shows/ShowItem';
import Filters from '../layout/Filters';
import Loading from '../layout/Loading';
import Error from '../layout/Error';

import useShows from '~src/hooks/useShows';

import theme from '~src/theme';
import FavoriteModal from '../layout/FavoriteModal';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
    justifyContent: 'space-between',
  },
});

const ExploreShows: React.FC = () => {
  const {isFetching, isLoading, isError, data, fetchMore} = useShows();

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
        renderItem={({item}) => <ShowItem item={item} />}
        keyExtractor={item => item.ID}
        onEndReached={() => fetchMore()}
        ListFooterComponent={isFetching ? <Loading /> : null}
      />
      <FavoriteModal />
    </View>
  );
};

export default ExploreShows;
