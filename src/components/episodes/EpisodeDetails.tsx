import React, {useContext} from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {IconButton, Title} from 'react-native-paper';
import theme from '../../theme';
import GenreButtons from '../layout/GenreButtons';
import {stripHtmlTags, decodeHtmlCharCodes} from '../../utils';
import {onPlayMixcloudPress} from '../../contexts/nowPlaying/actions';
import {AppContext} from '../../contexts/main';

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
  descriptionTextStyle: {
    fontFamily: 'Menlo-Bold',
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

type Genre = {
  name?: string;
  slug?: string;
};

type Props = {
  imageUrl?: string;
  channel: string;
  artist?: string;
  title: string;
  mixcloud: string;
  tracklist?: string;
  genres?: Genre[];
};

const EpisodeDetails: React.FC<Props> = ({
  imageUrl,
  channel,
  artist = 'unknown artist',
  title,
  tracklist,
  mixcloud,
  genres,
}) => {
  const {dispatch} = useContext(AppContext);

  const imageSrc = imageUrl
    ? {
        uri: imageUrl,
      }
    : require('../../../assets/images/ida-logo-1024.png');

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
            onPress={() =>
              onPlayMixcloudPress(dispatch, title, artist, mixcloud)
            }
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
          {artist ? artist : ''}
        </Text>
        <Title
          style={
            channel === 'tallinn'
              ? styles.showTitleTextTallinn
              : styles.showTitleTextHelsinki
          }>
          {title}
        </Title>
        <GenreButtons channel={channel} genres={genres} />
        {tracklist &&
          tracklist.split('\n').map(tracklist_item => (
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
};

export default EpisodeDetails;
