import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageTitleStyle: {
    color: theme.colors.backdrop,
    marginLeft: 10,
  },
  idaStyle: {
    color: theme.colors.backdrop,
    marginRight: 10,
  },
});

const Search: React.FC = () => {
  return (
    <View style={styles.container}>
      <Title style={styles.pageTitleStyle}>search</Title>
    </View>
  );
};

export default Search;
