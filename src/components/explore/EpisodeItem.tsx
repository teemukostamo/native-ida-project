import React, {useContext} from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Text, Title, IconButton} from 'react-native-paper';
import {format, parseISO} from 'date-fns';

import {LatestEpisode} from '../../contexts/latest/types';
import {AppContext} from '../../contexts/main';
import {onPlayMixcloudPress} from '../../contexts/nowPlaying/actions';

import theme from '../../theme';

const styles = StyleSheet.create({
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
    justifyContent: 'center',
  },
  imageContentContainer: {
    height: 300,
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextContainer: {
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
  item: LatestEpisode;
}

const EpisodeItem: React.FC<Props> = ({item}) => {
  const {dispatch} = useContext(AppContext);

  if (item?.code === 'not_found') {
    return null;
  }

  const channel =
    item.taxonomies && item.taxonomies.channel
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
          source={{
            uri: item.featured_image
              ? item.featured_image.sizes.medium_large
              : '/assets/images/ida-logo-1024.png',
          }}
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
            {item.episode_time.episode_start
              ? format(parseISO(item.episode_time.episode_start), 'dd.MM.yyyy')
              : 'unknown'}
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

export default EpisodeItem;
