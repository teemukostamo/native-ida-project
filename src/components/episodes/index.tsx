import React, {useState} from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import {useParams} from 'react-router-native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import theme from '~src/theme';
import Error from '../layout/Error';
import EpisodeItem from './EpisodeItem';
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

  console.log(episodeDetails);

  if (episodeDetails.data) {
    const episodeItem = {
      ID: episodeDetails.data.ID,
      slug: episodeDetails.data.slug,
      title: episodeDetails.data.title,
      episode_time: episodeDetails.data.episode_time,
      episode_timestamps: episodeDetails.data.episode_time,
      mixcloud: episodeDetails.data.mixcloud,
      show_title: episodeDetails.data.show_title,
      featured_image: episodeDetails.data.featured_image,
      related_show_ID: episodeDetails.data.related_show_id,
      related_show_artist: episodeDetails.data.related_show_artist,
      related_show_slug: episodeDetails.data.related_show_slug,
      taxonomies: episodeDetails.data.taxonomies,
      tracklist: episodeDetails.data.tracklist,
    };

    return (
      <View style={styles.container}>
        <BackButton />
        <View style={styles.episodesContainer}>
          <FlatList
            ListEmptyComponent={<Loading />}
            ListHeaderComponent={<EpisodeDetails item={episodeItem} />}
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
