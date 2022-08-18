import React from 'react';
import {View, StyleSheet, FlatList} from 'react-native';

import EpisodeItem from './EpisodeItem';
import Loading from '../layout/Loading';
import Error from '../layout/Error';
import Filters from '../layout/Filters';

import useLatestEpisodes from '../../hooks/useLatestEpisodes';

import theme from '../../theme';

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

const Episodes: React.FC = () => {
  const {isLoading, isError, data, fetchMore} = useLatestEpisodes();
  // take filter values from context and do something

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
      <View>
        <Filters />
        <FlatList
          data={data?.pages.map(page => page).flat()}
          renderItem={({item}) => <EpisodeItem item={item} />}
          //keyExtractor={item => item.id}
          onEndReached={() => fetchMore()}
        />
      </View>
    </View>
  );
};

export default Episodes;
