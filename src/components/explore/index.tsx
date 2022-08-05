import React, {Dispatch, useContext, useState} from 'react';
import {View, StyleSheet, FlatList, ImageBackground} from 'react-native';
import {Text, Title, IconButton} from 'react-native-paper';
import {useInfiniteQuery} from '@tanstack/react-query';
import {format, parseISO} from 'date-fns';

import {LatestShow} from '../../contexts/latest/types';
import {AppContext} from '../../contexts/main';
import {onPlayMixcloudPress} from '../../contexts/nowPlaying/actions';

import theme from '../../theme';
import ActionTypes from '../../contexts/actionTypes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  cardContainer: {
    margin: 10,
    backgroundColor: theme.colors.accent,
  },
  cardContainerHelsinki: {
    backgroundColor: theme.colors.accent,
  },
  cardContainerTallinn: {
    backgroundColor: theme.colors.primary,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    // flex: 1,
    justifyContent: 'center',
  },
  imageContentContainer: {
    height: 300,
  },
  titleContainer: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    // flex: 1,
    marginLeft: 10,
  },
  liveTextStyle: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    position: 'relative',
    bottom: 755,
    marginLeft: 3,
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    fontFamily: 'Menlo-Bold',
    fontWeight: 'bold',
    color: theme.colors.gray,
  },
  playButton: {
    padding: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    position: 'relative',
    top: 80,
  },
  playButtonHelsinki: {
    backgroundColor: 'rgba(227, 227, 227, 0.8)',
    color: theme.colors.accent,
  },
  playButtonTallinn: {
    backgroundColor: 'rgba(227, 112, 106, 0.8)',
    color: theme.colors.primary,
  },
  showDateText: {
    marginTop: 8,
    fontFamily: 'Menlo-Bold',
  },
  showTitleText: {
    margin: 1,
  },
});

interface Props {
  item: LatestShow;
  dispatch: Dispatch<ActionTypes>;
}

const Item: React.FC<Props> = ({item, dispatch}) => {
  //console.log('item in item', item);
  const channel = item.taxonomies.channel
    ? item.taxonomies.channel[0].slug
    : '';

  return (
    <View
      style={[
        styles.cardContainer,
        channel === 'helsinki'
          ? styles.cardContainerHelsinki
          : styles.cardContainerTallinn,
      ]}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{uri: item.featured_image.sizes.medium_large}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.imageContentContainer}>
            <Text style={styles.liveTextStyle}>{channel.toUpperCase()}</Text>
            <IconButton
              icon="play"
              color={
                channel === 'helsinki'
                  ? theme.colors.accent
                  : theme.colors.primary
              }
              style={[
                styles.playButton,
                channel === 'helsinki'
                  ? styles.playButtonHelsinki
                  : styles.playButtonTallinn,
              ]}
              size={50}
              onPress={() =>
                onPlayMixcloudPress(
                  dispatch,
                  item.show_title,
                  item.related_show_artist,
                  item.mixcloud,
                )
              }
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text
            style={[
              styles.showDateText,
              channel === 'helsinki' && {color: theme.colors.gray},
            ]}>
            {format(parseISO(item.episode_time.episode_start), 'dd.MM.yyyy')}
          </Text>
          <Title
            style={[
              styles.showTitleText,
              channel === 'helsinki' && {color: theme.colors.gray},
            ]}>
            {item.show_title}
          </Title>
        </View>
      </View>
    </View>
  );
};

const ExploreView = () => {
  const {dispatch} = useContext(AppContext);
  const [pageNumber, setPageNumber] = useState(1);

  const fetchLatestShows = async ({pageParam = 1}: any) => {
    console.log('pageParam', pageParam);
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=${pageParam}&posts_per_page=36`,
    );
    return response.json();
  };

  const {isLoading, isError, data, hasNextPage, fetchNextPage} =
    useInfiniteQuery(['latestShows'], fetchLatestShows, {
      getNextPageParam: () => pageNumber + 1,
    });

  console.log(hasNextPage);
  console.log('latest data', data?.pageParams);

  const fetchMore = () => {
    if (pageNumber < 100) {
      setPageNumber(pageNumber + 1);
      fetchNextPage();
    }
  };

  if (isError) {
    return (
      <View>
        <Title>Error</Title>
      </View>
    );
  }

  if (isLoading) {
    return (
      <View>
        <Title>Loading</Title>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title>Explore shows</Title>
      {!isLoading && (
        <View>
          <FlatList
            data={data.pages.map(page => page).flat()}
            renderItem={({item}) => <Item dispatch={dispatch} item={item} />}
            keyExtractor={item => item.featured_image.url}
            onEndReached={() => fetchMore()}
          />
        </View>
      )}
    </View>
  );
};

export default ExploreView;
