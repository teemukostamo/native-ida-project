import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import ShowItem from '../shows/ShowItem';
import Filters from '../layout/Filters';
import Loading from '../layout/Loading';
import Error from '../layout/Error';
import FavoriteModal from '../layout/FavoriteModal';

import useShows from '~src/hooks/useShows';
import {ShowSchema} from '~src/schemas/show';
import theme from '~src/theme';

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

  try {
    return (
      <View style={styles.container}>
        <Filters />
        <FlatList
          data={data?.pages.map(page => page).flat()}
          renderItem={({item}) => <ShowItem item={ShowSchema.parse(item)} />}
          keyExtractor={item => item.ID}
          onEndReached={() => fetchMore()}
          ListFooterComponent={isFetching ? <Loading /> : null}
        />
        <FavoriteModal />
      </View>
    );
  } catch (error) {
    console.log('error with shows: ', error);
    return <Error />;
  }
};

export default ExploreShows;
