import React, {useState} from 'react';
import {View, StyleSheet, FlatList, TextInput} from 'react-native';

import LinkButtons from './LinkButtons';
import EpisodeItem from './EpisodeItem';
import Loading from '../layout/Loading';
import Error from '../layout/Error';
import Dropdown from '../layout/Dropdown';
import ChannelButtons from '../layout/ChannelButtons';
import {DropdownOptionType} from '../layout/types';
import {GENRE_OPTIONS} from '../../constants';
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
  // const defaultUrl =
  //   'https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=${pageParam}&posts_per_page=36';
  const [searchQuery, setSearchQuery] = useState('');
  // const [genre, setGenre] = useState('');
  // const [fetchUrl, setFetchUrl] = useState(defaultUrl);

  // useEffect(() => {
  //   console.log('effect ran');
  //   if (searchQuery || genre) {
  //     console.log(searchQuery);
  //     setFetchUrl(
  //       fetchUrlBuilder('episode', pageNumber, '', genre, searchQuery),
  //     );
  //   } else {
  //     setFetchUrl(defaultUrl);
  //   }
  // }, [searchQuery, genre, pageNumber]);

  const onGenreChange = (value: DropdownOptionType) => {
    console.log('value', value);
    // setGenre(value.value);
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
          onSubmitEditing={() => console.log('klikd submit')}
        />
        <Dropdown
          onSelect={onGenreChange}
          data={GENRE_OPTIONS}
          label={'GENRES'}
        />
        <ChannelButtons />
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
