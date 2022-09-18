import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {LatestEpisode} from '~src/contexts/latest/types';
import {AppContext} from '~src/contexts/main';
import {onPlayMixcloudPress} from '~src/contexts/nowPlaying/actions';
import {addToPlayHistory} from '~src/contexts/favorites/actions';

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
  item: LatestEpisode;
};

const MixcloudPlayButton: React.FC<Props> = ({item}) => {
  const {dispatch} = useContext(AppContext);

  const channel =
    item.taxonomies && item.taxonomies.channel
      ? item.taxonomies.channel[0].slug
      : '';

  const onPlayPress = () => {
    addToPlayHistory(dispatch, item);
    onPlayMixcloudPress(
      dispatch,
      item.show_title,
      item.related_show_artist,
      item.mixcloud,
    );
  };

  return (
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
      />
    </View>
  );
};

export default MixcloudPlayButton;
