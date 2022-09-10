import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {Text} from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
  textContainer: {
    margin: 10,
  },
  text: {
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : 'FavoritMono-Regular',
  },
  tallinn: {
    color: theme.colors.primary,
  },
  helsinki: {
    color: theme.colors.gray,
  },
});

type Props = {
  channel: string;
};

const Offline: React.FC<Props> = ({channel}) => {
  return (
    <View style={styles.textContainer}>
      <Text
        style={[
          styles.text,
          channel === 'tallinn' ? styles.tallinn : styles.helsinki,
        ]}>
        Offline
      </Text>
    </View>
  );
};

export default Offline;