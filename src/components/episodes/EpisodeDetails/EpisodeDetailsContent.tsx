import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {IconButton, Title} from 'react-native-paper';
import theme from '~src/theme';
import GenreButtons from '../../layout/GenreButtons';
import {stripHtmlTags, decodeHtmlCharCodes} from '~src/utils/common';
import {LatestEpisode} from '~src/contexts/latest/types';

const styles = StyleSheet.create({
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
    ...theme.fonts.light,
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
  descriptionTextStyle: {
    ...theme.fonts.light,
    fontSize: 14,
    marginTop: 5,
  },
  descriptionTextStyleHelsinki: {
    color: theme.colors.gray,
  },
  descriptionTextStyleTallinn: {
    color: theme.colors.text,
  },
  playButton: {
    padding: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    position: 'relative',
    top: 50,
  },
  playButtonHelsinki: {
    backgroundColor: 'rgba(227, 227, 227, 0.8)',
    color: theme.colors.accent,
  },
  playButtonTallinn: {
    backgroundColor: 'rgba(227, 112, 106, 0.8)',
    color: theme.colors.primary,
  },
});

type Props = {
  item: LatestEpisode;
  onPlayPress: (episodeItem: LatestEpisode) => void;
};

const EpisodeDetailsContent: React.FC<Props> = ({item, onPlayPress}) => {
  if (item) {
    const imageSrc = item.featured_image?.url
      ? {
          uri: item.featured_image?.url,
        }
      : require('../../../../assets/images/ida-logo-1024.png');
    const channel = item.taxonomies.channel
      ? item.taxonomies.channel[0].slug
      : 'all';

    const genres = item.taxonomies.genres ? item.taxonomies.genres : [];

    return (
      <View style={styles.imageContainer}>
        <ImageBackground
          source={imageSrc}
          resizeMode="cover"
          style={styles.image}>
          <View style={styles.imageContentContainer}>
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
              onPress={() => onPlayPress(item)}
            />
          </View>
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
            {item.related_show_artist ? item.related_show_artist : ''}
          </Text>
          <Title
            style={
              channel === 'tallinn'
                ? styles.showTitleTextTallinn
                : styles.showTitleTextHelsinki
            }>
            {item.title}
          </Title>
          <GenreButtons channel={channel} genres={genres} />
          {item.tracklist &&
            item.tracklist.split('\n').map(tracklist_item => (
              <Text
                key={tracklist_item}
                style={[
                  styles.descriptionTextStyle,
                  channel === 'tallinn'
                    ? styles.descriptionTextStyleTallinn
                    : styles.descriptionTextStyleHelsinki,
                ]}>
                {decodeHtmlCharCodes(stripHtmlTags(tracklist_item))}
              </Text>
            ))}
        </View>
      </View>
    );
  }

  return null;
};

export default EpisodeDetailsContent;
