import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
});

const Loading = () => (
  <View style={styles.container}>
    <Title>Loading</Title>
  </View>
);

export default Loading;
