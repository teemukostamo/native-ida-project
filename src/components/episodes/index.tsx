import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useParams} from 'react-router-native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import theme from '../../theme';
import Error from '../layout/Error';
import EpisodeItem from '../explore/EpisodeItem';
import Loading from '../layout/Loading';
import EpisodeDetails from './EpisodeDetails';
import BackButton from '../layout/BackButton';
import FavoriteModal from '../layout/FavoriteModal';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1,
  },
  episodesContainer: {
    flex: 1,
  },
});

const EpisodePage: React.FC = () => {
  let {slug, id} = useParams();

  const [pageNumber, setPageNumber] = useState(1);

  const fetchLatestEpisodes = async ({pageParam = 1}) => {
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=${pageParam}&show_id=${id}&posts_per_page=36`,
    );
    return response.json();
  };

  const fetchEpisodeDetails = async () => {
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/episodes/${slug}`,
    );
    return response.json();
  };

  const {
    data: episodeDetails,
    isLoading: isEpisodeDetailsLoading,
    isError: isEpisodeDetailsError,
  } = useQuery([`${slug}-info`], fetchEpisodeDetails, {
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

  isEpisodeDetailsError && <Error />;
  if (isEpisodeDetailsLoading) {
    return (
      <View style={styles.container}>
        <Text>
          <Loading />;
        </Text>
      </View>
    );
  }

  if (episodeDetails.data) {
    const channel = episodeDetails.data.taxonomies.channel[0].slug;
    const genres = episodeDetails.data.taxonomies.genres
      ? episodeDetails.data.taxonomies.genres
      : [];

    return (
      <View style={styles.container}>
        <BackButton />
        <View style={styles.episodesContainer}>
          <FlatList
            ListEmptyComponent={<Loading />}
            ListHeaderComponent={
              <EpisodeDetails
                channel={channel}
                artist={episodeDetails.data.related_show_artist}
                title={episodeDetails.data.title}
                tracklist={episodeDetails.data.tracklist}
                mixcloud={episodeDetails.data.mixcloud}
                imageUrl={episodeDetails?.data.featured_image?.url}
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

export default EpisodePage;
