import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Title, Button} from 'react-native-paper';

import {NowPlayingState} from '../../contexts/nowPlaying/types';
import {LiveShowData} from '../../contexts/live/types';

interface Props {
  town: string;
  nowPlaying: NowPlayingState;
  liveShow: LiveShowData;
  onPress: () => void;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
});

const OnAir: React.FC<Props> = ({town, onPress, nowPlaying, liveShow}) => {
  if (liveShow) {
    const image = {uri: liveShow.show_image.url};

    return (
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <Title>in prog</Title>
          <Button icon="camera" mode="contained" onPress={() => onPress()}>
            {!nowPlaying.nowPlaying || nowPlaying.streamType !== town
              ? 'Play'
              : 'Pause'}
          </Button>
        </ImageBackground>
      </View>
    );
  }
  return null;
};

export default OnAir;
