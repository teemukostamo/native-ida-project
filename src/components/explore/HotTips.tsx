import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import theme from '../../theme';
import Error from '../layout/Error';
import EpisodeItem from '../explore/EpisodeItem';
import Loading from '../layout/Loading';
import ShowItem from './ShowItem';
import {Title} from 'react-native-paper';
import LinkButtons from './LinkButtons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1,
  },
  epidodesContainer: {
    flex: 1,
  },
});

const HotTips: React.FC = () => {
  const fetchHotTips = async () => {
    const response = await fetch(
      'https://admin.idaidaida.net/wp-json/ida/v3/front-page-feed',
    );
    return response.json();
  };

  const {data, isLoading, isFetching, isError} = useQuery(
    ['hot-tips'],
    fetchHotTips,
    {
      keepPreviousData: false,
    },
  );

  isError && <Error />;
  if (isLoading) {
    return (
      <View style={styles.container}>
        <Text>
          <Loading />;
        </Text>
      </View>
    );
  }

  if (data) {
    return (
      <View style={styles.container}>
        <LinkButtons />
        <View style={styles.epidodesContainer}>
          <Title>Latest episodes</Title>
          <FlatList
            ListEmptyComponent={<Loading />}
            data={data.latest_episodes}
            renderItem={({item}) => <EpisodeItem item={item} />}
            refreshing={isFetching}
          />
          <Title>Featured shows</Title>
          <FlatList
            ListEmptyComponent={<Loading />}
            data={data.featured_shows}
            renderItem={({item}) => <ShowItem item={item} />}
            refreshing={isFetching}
          />
        </View>
      </View>
    );
  }

  return null;
};

export default HotTips;
