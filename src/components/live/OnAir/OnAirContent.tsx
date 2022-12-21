import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Title, Text, IconButton} from 'react-native-paper';

import {NowPlayingState} from '~src/contexts/nowPlaying/types';
import {LiveShowDataType} from '~src/schemas/live';
import GenreButtonsContent from '../../layout/GenreButtons/GenreButtonsContent';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  titleTextContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-evenly',
  },
  imageContainer: {
    flex: 5,
  },
  playButton: {
    alignSelf: 'flex-end',
    marginBottom: 1,
  },
  liveInContainer: {
    margin: 5,
    alignItems: 'stretch',
  },
  liveTextContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  liveTextStyle: {
    ...theme.fonts.light,
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    marginTop: 5,
    paddingHorizontal: 3,
    fontWeight: 'bold',
    color: theme.colors.gray,
    alignSelf: 'flex-start',
  },
  liveShowArtistTextHelsinki: {
    ...theme.fonts.light,
    marginTop: 8,
    color: theme.colors.gray,
  },
  liveShowArtistTextTallinn: {
    ...theme.fonts.light,
    marginTop: 8,
    color: theme.colors.text,
  },
  channelStyleHelsinki: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.accent,
  },
  channelStyleTallinn: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.primary,
  },
  genreStyleHelsinki: {
    backgroundColor: theme.colors.gray,
    color: theme.colors.accent,
  },
  genreStyleTallinn: {
    backgroundColor: theme.colors.text,
    color: theme.colors.primary,
  },
});

interface Taxonomies {
  name: string;
  slug: string;
}

interface Props {
  studio: string;
  nowPlaying: NowPlayingState;
  liveShow: LiveShowDataType;
  genres: Taxonomies[];
  handlePress: () => void;
}

const OnAirContent: React.FC<Props> = ({
  studio,
  nowPlaying,
  liveShow,
  genres,
  handlePress,
}) => {
  if (liveShow) {
    const image = {
      uri: liveShow.episode_image
        ? liveShow.episode_image.url
        : liveShow.show_image.url,
    };

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.liveTextContainer}>
              <GenreButtonsContent
                channel={studio}
                genres={genres}
                setChannel={() => {}}
                setGenre={() => {}}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <Text
              style={
                studio === 'helsinki'
                  ? styles.liveShowArtistTextHelsinki
                  : styles.liveShowArtistTextTallinn
              }>
              {liveShow.artist}
            </Text>
            <Title
              style={{
                color:
                  studio === 'helsinki' ? theme.colors.gray : theme.colors.text,
              }}>
              {liveShow.show_title}
            </Title>
          </View>
          <IconButton
            accessibilityLabel={`Play live stream from ${studio}`}
            color={
              studio === 'helsinki' ? theme.colors.gray : theme.colors.text
            }
            size={30}
            style={styles.playButton}
            icon={
              nowPlaying.nowPlaying && nowPlaying.studio === studio
                ? 'stop'
                : 'play'
            }
            onPress={() => handlePress()}
          />
        </View>
      </View>
    );
  }

  return null;
};

export default OnAirContent;
