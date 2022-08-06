import React, {useState} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';

import ShowItem from './ShowItem';
import Loading from '../layout/Loading';
import Error from '../layout/Error';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
});

const Episodes: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const fetchLatestShows = async ({pageParam = 1}) => {
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast?paged=${pageParam}&posts_per_page=24&order=ASC&orderby=title&acf[0]=artist`,
    );
    return response.json();
  };

  const {isLoading, isError, data, fetchNextPage} = useInfiniteQuery(
    ['LatestShows'],
    fetchLatestShows,
    {
      getNextPageParam: () => pageNumber + 1,
    },
  );

  const fetchMore = () => {
    if (pageNumber < 100) {
      setPageNumber(pageNumber + 1);
      fetchNextPage();
    }
  };

  if (isError) {
    return <Error />;
  }
  if (isLoading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={data.pages.map(page => page).flat()}
          renderItem={({item}) => <ShowItem item={item} />}
          // keyExtractor={item => item.ID}
          onEndReached={() => fetchMore()}
        />
      </View>
    </View>
  );
};

export default Episodes;
