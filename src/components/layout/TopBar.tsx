import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';
import {useLocation} from 'react-router-native';
import {getViewNameFromLocation} from '../../utils';

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

const TopBar: React.FC = () => {
  const location = useLocation();
  const viewName = getViewNameFromLocation(location.pathname);
  console.log('location', viewName);
  return (
    <View style={styles.container}>
      <Title style={styles.pageTitleStyle}>{viewName}</Title>
      <Title style={styles.idaStyle}>IDA</Title>
    </View>
  );
};

export default TopBar;
