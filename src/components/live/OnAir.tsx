import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {Title, Text, IconButton} from 'react-native-paper';

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
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  imageContainer: {
    flex: 5,
  },
  playButton: {
    alignSelf: 'flex-end',
  },
});

const OnAir: React.FC<Props> = ({town, onPress, nowPlaying, liveShow}) => {
  if (liveShow) {
    const image = {uri: liveShow.show_image.url};

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}>
            <Title>in prog</Title>
          </ImageBackground>
        </View>
        <View style={styles.titleContainer}>
          <Title>{liveShow.show_title}</Title>
          <Text>{liveShow.artist}</Text>
          <IconButton
            style={styles.playButton}
            icon={
              !nowPlaying.nowPlaying || nowPlaying.streamType !== town
                ? 'play'
                : 'pause'
            }
            onPress={() => onPress()}
          />
        </View>
      </View>
    );
  }
  return null;
};

export default OnAir;
