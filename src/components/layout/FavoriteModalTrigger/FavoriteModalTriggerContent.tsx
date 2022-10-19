import React from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
  },
  colorHelsinki: {
    backgroundColor: 'rgba(227, 227, 227, 0.8)',
  },
  colorTallinn: {
    backgroundColor: 'rgba(227, 112, 106, 0.8)',
  },
});

type Props = {
  handlePress: () => void;
  channel: string;
};

const FavoriteModalTriggerContent: React.FC<Props> = ({
  handlePress,
  channel,
}) => {
  return (
    <View
      style={[
        styles.container,
        channel === 'tallinn' ? styles.colorTallinn : styles.colorHelsinki,
      ]}>
      <IconButton
        color={
          channel === 'tallinn' ? theme.colors.primary : theme.colors.accent
        }
        size={30}
        onPress={() => handlePress()}
        icon="dots-horizontal"
        accessibilityLabel="Press to save to favorites"
      />
    </View>
  );
};

export default FavoriteModalTriggerContent;
