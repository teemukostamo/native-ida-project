import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

import {liveMock} from '../../mockdata/live';

const styles = StyleSheet.create({
  flexContainer: {
    display: 'flex',
    backgroundColor: 'green',
    justifyContent: 'space-evenly',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flexItemA: {
    flexGrow: 1,
    backgroundColor: '#ebaccb',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flexItemB: {
    flexGrow: 1,
    backgroundColor: '#7162dd',
    position: 'relative',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  titleTallinn: {
    marginTop: 50,
    marginLeft: 10,
  },
  titleHelsinki: {
    marginTop: 10,
    marginLeft: 10,
    color: 'white',
  },
});

const LiveView = () => {
  return (
    <View style={styles.flexContainer}>
      <View style={styles.flexItemA}>
        <Title style={styles.titleTallinn}>
          {liveMock.tallinn.next_show.title}
        </Title>
      </View>
      <View style={styles.flexItemB}>
        <Title style={styles.titleHelsinki}>
          {liveMock.helsinki.next_show.title}
        </Title>
      </View>
    </View>
  );
};

export default LiveView;
