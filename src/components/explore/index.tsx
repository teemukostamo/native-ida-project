import React, {Dispatch, useContext} from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ImageBackground,
  Button,
} from 'react-native';
import {Text, Title} from 'react-native-paper';
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
    position: 'relative',
    bottom: 690,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    alignSelf: 'center',
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
  const channel = item.taxonomies.channel
    ? item.taxonomies.channel[0].slug
    : '';

  //console.log('item', item);
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
          source={{uri: item.featured_image.url}}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.imageContentContainer}>
            <Text style={styles.liveTextStyle}>{channel.toUpperCase()}</Text>
            <Button
              title="moro"
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
  const {state, dispatch} = useContext(AppContext);
  const {latest} = state;

  const hasLatestShows = latest && latest && latest.length > 0;

  return (
    <View style={styles.container}>
      <Title>Explore shows</Title>
      {hasLatestShows && (
        <View>
          <FlatList
            data={latest}
            renderItem={({item}) => <Item dispatch={dispatch} item={item} />}
            keyExtractor={item => item.featured_image.url}
          />
        </View>
      )}
    </View>
  );
};

export default ExploreView;
