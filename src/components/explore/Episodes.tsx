import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';
import {useInfiniteQuery} from '@tanstack/react-query';

import LinkButtons from './LinkButtons';
import EpisodeItem from './EpisodeItem';
import Loading from '../layout/Loading';
import Error from '../layout/Error';

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
  const [pageNumber, setPageNumber] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  console.log(!searchQuery);
  // const [genre, setGenre] = useState('');

  const fetchLatestEpisodes = async ({pageParam = 1}) => {
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=${pageParam}&posts_per_page=36`,
    );
    return response.json();
  };

  const {isLoading, isError, data, fetchNextPage} = useInfiniteQuery(
    ['LatestEpisodes'],
    fetchLatestEpisodes,
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
    return (
      <View style={styles.container}>
        <LinkButtons />
        <Error />
      </View>
    );
  }
  if (isLoading) {
    return (
      <View style={styles.container}>
        <LinkButtons />
        <Loading />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <LinkButtons />
      <View>
        <TextInput
          style={styles.searchInput}
          placeholder="SEARCH"
          onChangeText={setSearchQuery}
          value={searchQuery}
          inlineImageLeft="search_icon"
          inlineImagePadding={4}
          clearButtonMode="always"
        />
        <FlatList
          data={data.pages.map(page => page).flat()}
          renderItem={({item}) => <EpisodeItem item={item} />}
          //keyExtractor={item => item.featured_image.url}
          onEndReached={() => fetchMore()}
        />
      </View>
    </View>
  );
};

export default Episodes;
