import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

import theme from '~src/theme';

const styles = StyleSheet.create({
  imageContentContainer: {
    height: 300,
  },
  playButton: {
    padding: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    position: 'relative',
    top: 108,
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
  channel: string;
  onPlayPress: () => void;
};

const MixcloudPlayButtonContent: React.FC<Props> = ({channel, onPlayPress}) => (
  <View style={styles.imageContentContainer}>
    <IconButton
      icon="play"
      color={
        channel === 'helsinki' ? theme.colors.accent : theme.colors.primary
      }
      style={[
        styles.playButton,
        channel === 'helsinki'
          ? styles.playButtonHelsinki
          : styles.playButtonTallinn,
      ]}
      size={50}
      onPress={() => onPlayPress()}
      accessibilityLabel="Play on MixCloud"
    />
  </View>
);

export default MixcloudPlayButtonContent;
