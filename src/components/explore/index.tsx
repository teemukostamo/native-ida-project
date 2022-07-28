import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import NowPlayingBar from '../nowPlaying';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ExploreView = () => {
  return (
    <View style={styles.container}>
      <Title>explore shows coming soon</Title>
      <NowPlayingBar />
    </View>
  );
};

export default ExploreView;
