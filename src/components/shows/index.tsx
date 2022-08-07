import React, {useState} from 'react';
import {View, Text, StyleSheet, ImageBackground, FlatList} from 'react-native';
import {Title} from 'react-native-paper';
import {useParams} from 'react-router-native';
import {useInfiniteQuery, useQuery} from '@tanstack/react-query';
import theme from '../../theme';
import Error from '../layout/Error';
import EpisodeItem from '../explore/EpisodeItem';
import Loading from '../layout/Loading';
import DescriptionText from './DescriptionText';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1,
  },
  coverImage: {
    width: 66,
    height: 58,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  imageContentContainer: {
    height: 200,
  },
  showInfoContainer: {
    padding: 10,
  },
  showInfoContainerTallinn: {
    padding: 10,
    backgroundColor: theme.colors.primary,
  },
  showInfoContainerHelsinki: {
    backgroundColor: theme.colors.accent,
  },
  showArtistText: {
    fontFamily: 'Menlo-Bold',
  },
  showArtistTextHelsinki: {
    color: theme.colors.gray,
  },
  showArtistTextTallinn: {
    color: theme.colors.text,
  },
  showTitleTextHelsinki: {
    color: theme.colors.gray,
  },
  showTitleTextTallinn: {
    color: theme.colors.text,
  },
  epidodesContainer: {
    flex: 1,
  },
});

const ShowPage: React.FC = () => {
  let {slug, id} = useParams();

  const [pageNumber, setPageNumber] = useState(1);

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
    isLoading,
    isError,
  } = useQuery([`${slug}-info`], fetchShowDetails, {
    keepPreviousData: true,
  });

  const {
    // isLoading: isShowInfoLoading,
    // isError: isShowInfoError,
    data: episodes,
    fetchNextPage,
  } = useInfiniteQuery([`${slug}-episodes`], fetchLatestEpisodes, {
    getNextPageParam: () => pageNumber + 1,
  });

  const fetchMore = () => {
    console.log('fetchmore ran');
    if (pageNumber < 100) {
      setPageNumber(pageNumber + 1);
      fetchNextPage();
    }
  };

  if (showDetails) {
    const imageSrc = showDetails?.featured_image?.url
      ? {
          uri: showDetails?.featured_image?.url,
        }
      : require('../../../assets/images/ida-logo-1024.png');
    const channel = showDetails.taxonomies.channel[0].slug;

    console.log('showdetails', showDetails);
    return (
      <View style={styles.container}>
        <View style={styles.epidodesContainer}>
          {isLoading && <Loading />}
          {isError && <Error />}
          {episodes && !isLoading && (
            <FlatList
              ListHeaderComponent={
                <>
                  <View style={styles.imageContainer}>
                    <ImageBackground
                      source={imageSrc}
                      resizeMode="cover"
                      style={styles.image}>
                      <View style={styles.imageContentContainer} />
                    </ImageBackground>
                    <View
                      style={[
                        styles.showInfoContainer,
                        channel === 'tallinn'
                          ? styles.showInfoContainerTallinn
                          : styles.showInfoContainerHelsinki,
                      ]}>
                      <Text
                        style={[
                          styles.showArtistText,
                          channel === 'tallinn'
                            ? styles.showArtistTextTallinn
                            : styles.showArtistTextHelsinki,
                        ]}>
                        {showDetails.acf?.artist ? showDetails.acf?.artist : ''}
                      </Text>
                      <Title
                        style={
                          channel === 'tallinn'
                            ? styles.showTitleTextTallinn
                            : styles.showTitleTextHelsinki
                        }>
                        {showDetails.title}
                      </Title>
                      {showDetails?.acf?.eng_content && (
                        <DescriptionText html={showDetails?.acf?.eng_content} />
                      )}
                      {showDetails?.acf?.eng_content && (
                        <Text>{showDetails?.acf?.eng_content}</Text>
                      )}
                    </View>
                  </View>
                </>
              }
              data={episodes.pages.map(page => page).flat()}
              renderItem={({item}) => <EpisodeItem item={item} />}
              //keyExtractor={item => item.featured_image.url}
              onEndReached={() => fetchMore()}
            />
          )}
        </View>
      </View>
    );
  }

  return null;
};

export default ShowPage;
