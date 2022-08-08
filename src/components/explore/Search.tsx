import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import theme from '../../theme';
import LinkButtons from './LinkButtons';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flex: 1,
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
      <LinkButtons />
      <Title style={styles.pageTitleStyle}>search</Title>
    </View>
  );
};

export default Search;
