import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'react-native-paper';

import theme from '~src/theme';

const styles = StyleSheet.create({
  textContainer: {
    margin: 10,
  },
  text: {
    ...theme.fonts.light,
  },
  tallinn: {
    color: theme.colors.text,
  },
  helsinki: {
    color: theme.colors.gray,
  },
});

type Props = {
  channel: string;
};

const Offline: React.FC<Props> = ({channel}) => (
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

export default Offline;
