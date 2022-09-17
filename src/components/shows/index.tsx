import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useParams} from 'react-router-native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import theme from '../../theme';
import Error from '../layout/Error';
import EpisodeItem from '../episodes/EpisodeItem';
import Loading from '../layout/Loading';
import ShowDetails from './ShowDetails';
import BackButton from '../layout/BackButton';
import FavoriteModal from '../layout/FavoriteModal';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1,
  },
  epidodesContainer: {
    flex: 1,
  },
});

const ShowPage: React.FC = () => {
  const [pageNumber, setPageNumber] = useState(1);
  let {slug, id} = useParams();

  const fetchLatestEpisodes = async ({pageParam = 1}) => {
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=${pageParam}&show_id=${id}&posts_per_page=36`,
    );
    return response.json();
  };

  const fetchShowDetails = async () => {
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast/${slug}`,
    );
    return response.json();
  };

  const {
    data: showDetails,
    isLoading: isShowDetailsLoading,
    isError: isShowDetailsError,
  } = useQuery([`${slug}-info`], fetchShowDetails, {
    keepPreviousData: true,
  });

  const {
    data: episodes,
    fetchNextPage,
    isFetching,
  } = useInfiniteQuery([`${slug}-episodes`], fetchLatestEpisodes, {
    getNextPageParam: () => pageNumber + 1,
  });

  const fetchMore = () => {
    if (pageNumber < 100) {
      setPageNumber(pageNumber + 1);
      fetchNextPage();
    }
  };

  isShowDetailsError && <Error />;
  if (isShowDetailsLoading) {
    return (
      <View style={styles.container}>
        <Text>
          <Loading />;
        </Text>
      </View>
    );
  }

  if (showDetails) {
    const channel = showDetails?.taxonomies.channel[0].slug;
    const genres = showDetails.taxonomies.genres
      ? showDetails.taxonomies.genres
      : [];

    return (
      <View style={styles.container}>
        <BackButton />
        <View style={styles.epidodesContainer}>
          <FlatList
            ListEmptyComponent={<Loading />}
            ListHeaderComponent={
              <ShowDetails
                channel={channel}
                artist={showDetails.acf?.artist}
                title={showDetails.title}
                description={showDetails?.acf?.eng_content}
                imageUrl={showDetails?.featured_image?.url}
                genres={genres}
              />
            }
            data={episodes?.pages.map(page => page).flat()}
            renderItem={({item}) => <EpisodeItem item={item} />}
            onEndReached={() => fetchMore()}
            refreshing={isFetching}
            ListFooterComponent={isFetching ? <Loading /> : null}
          />
          <FavoriteModal />
        </View>
      </View>
    );
  }

  return null;
};

export default ShowPage;
