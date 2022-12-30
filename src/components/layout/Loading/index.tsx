import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
    color: theme.colors.primary,
  },
});

const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator color={theme.colors.green} size="large" />
  </View>
);

export default Loading;
