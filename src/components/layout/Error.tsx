import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
});

const Error = () => (
  <View style={styles.container}>
    <Title>Error</Title>
  </View>
);

export default Error;
