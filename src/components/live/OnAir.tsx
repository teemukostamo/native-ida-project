import React, {useContext} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Title, Text, IconButton} from 'react-native-paper';
import {AppContext} from '~src/contexts/main';

import {NowPlayingState} from '~src/contexts/nowPlaying/types';
import {LiveShowData} from '~src/contexts/live/types';

import {
  stopPlayerPress,
  onTallinnPlayPress,
  onHelsinkiPlayPress,
} from '~src/contexts/nowPlaying/actions';

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
  },
  titleTextContainer: {
    flex: 1,
    marginLeft: 10,
  },
  imageContainer: {
    flex: 5,
  },
  playButton: {
    alignSelf: 'flex-end',
    marginBottom: 12,
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
});

interface Props {
  studio: string;
  nowPlaying: NowPlayingState;
  liveShow: LiveShowData;
}

const OnAir: React.FC<Props> = ({studio, nowPlaying, liveShow}) => {
  const {dispatch} = useContext(AppContext);

  if (liveShow) {
    const image = {
      uri: liveShow.episode_image
        ? liveShow.episode_image.url
        : liveShow.show_image.url,
    };

    const handlePress = () => {
      if (nowPlaying.nowPlaying) {
        if (studio === nowPlaying.studio) {
          stopPlayerPress(dispatch);
        } else {
          if (studio === 'helsinki') {
            onHelsinkiPlayPress(dispatch, liveShow.show_title, liveShow.artist);
          }
          if (studio === 'tallinn') {
            onTallinnPlayPress(dispatch, liveShow.show_title, liveShow.artist);
          }
        }
      }

      if (!nowPlaying.nowPlaying) {
        if (studio === 'tallinn') {
          onTallinnPlayPress(dispatch, liveShow.show_title, liveShow.artist);
        }
        if (studio === 'helsinki') {
          onHelsinkiPlayPress(dispatch, liveShow.show_title, liveShow.artist);
        }
      }
    };

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <View style={styles.liveTextContainer}>
              <Text style={styles.liveTextStyle}>
                Live in {studio.toUpperCase()}
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <Title
              style={{
                color:
                  studio === 'helsinki' ? theme.colors.gray : theme.colors.text,
              }}>
              {liveShow.show_title}
            </Title>
            <Text
              style={{
                color:
                  studio === 'helsinki' ? theme.colors.gray : theme.colors.text,
              }}>
              {liveShow.artist}
            </Text>
          </View>
          <IconButton
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

export default OnAir;
