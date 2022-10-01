import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import {useLocation, useNavigate} from 'react-router-native';
import {getViewNameFromLocation} from '~src/utils/common';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingTop: 10,
    marginHorizontal: 15,
  },
  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    marginBottom: 20,
    color: theme.colors.backdrop,
  },
  selectedTextStyle: {
    alignSelf: 'center',
    marginBottom: 20,
    color: theme.colors.green,
  },
});

const Navigation = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const viewName = getViewNameFromLocation(location.pathname);

  return (
    <Appbar style={styles.container}>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="music"
          onPress={() => navigate('/', {replace: true})}
          color={
            viewName === 'live' ? theme.colors.green : theme.colors.backdrop
          }
        />
        <Text
          style={
            viewName === 'live' ? styles.selectedTextStyle : styles.textStyle
          }>
          Live
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="calendar-star"
          onPress={() => navigate('/schedule', {replace: true})}
          color={
            viewName === 'schedule' ? theme.colors.green : theme.colors.backdrop
          }
        />
        <Text
          style={
            viewName === 'schedule'
              ? styles.selectedTextStyle
              : styles.textStyle
          }>
          Schedule
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="album"
          onPress={() => navigate('/episodes', {replace: true})}
          color={
            viewName === 'episodes' || viewName === 'shows'
              ? theme.colors.green
              : theme.colors.backdrop
          }
        />
        <Text
          style={
            viewName === 'episodes' || viewName === 'shows'
              ? styles.selectedTextStyle
              : styles.textStyle
          }>
          Explore
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="account-circle"
          onPress={() => navigate('/myida', {replace: true})}
          color={
            viewName === 'my ida' ? theme.colors.green : theme.colors.backdrop
          }
        />
        <Text
          style={
            viewName === 'my ida' ? styles.selectedTextStyle : styles.textStyle
          }>
          My Ida
        </Text>
      </View>
    </Appbar>
  );
};

export default Navigation;
