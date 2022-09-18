import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Text} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

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
});

const Navigation = () => {
  let navigate = useNavigate();

  return (
    <Appbar style={styles.container}>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="music"
          onPress={() => navigate('/', {replace: true})}
        />

        <Text style={styles.textStyle}>Live</Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="calendar-star"
          onPress={() => navigate('/schedule', {replace: true})}
        />
        <Text style={styles.textStyle}>Schedule</Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="album"
          onPress={() => navigate('/episodes', {replace: true})}
        />
        <Text style={styles.textStyle}>Explore</Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          icon="account-circle"
          onPress={() => navigate('/myida', {replace: true})}
        />
        <Text style={styles.textStyle}>My Ida</Text>
      </View>
    </Appbar>
  );
};

export default Navigation;
