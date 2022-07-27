import React, {Dispatch, useContext} from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Title, Text, IconButton} from 'react-native-paper';
import {AppContext} from '../../contexts/main';
import ActionTypes from '../../contexts/actionTypes';

import {NowPlayingState} from '../../contexts/nowPlaying/types';
import {LiveShowData} from '../../contexts/live/types';

import theme from '../../theme';

interface Props {
  studio: string;
  nowPlaying: NowPlayingState;
  liveShow: LiveShowData;
  onPress: (
    dispatch: Dispatch<ActionTypes>,
    show_title: string,
    artist: string,
  ) => void;
}

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
  liveTextStyle: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    position: 'relative',
    bottom: 125,
    marginLeft: 3,
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    fontFamily: 'Menlo-Bold',
    fontWeight: 'bold',
    color: theme.colors.gray,
  },
});

const OnAir: React.FC<Props> = ({studio, onPress, nowPlaying, liveShow}) => {
  const {dispatch} = useContext(AppContext);
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
            <Text style={styles.liveTextStyle}>
              Live in {studio.toUpperCase()}
            </Text>
          </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
          <View style={styles.titleTextContainer}>
            <Title>{liveShow.show_title}</Title>
            <Text>{liveShow.artist}</Text>
          </View>
          <IconButton
            style={styles.playButton}
            icon={
              nowPlaying.nowPlaying && nowPlaying.studio === studio
                ? 'stop'
                : 'play'
            }
            onPress={() =>
              onPress(dispatch, liveShow.show_title, liveShow.artist)
            }
          />
        </View>
      </View>
    );
  }
  return null;
};

export default OnAir;
