import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title} from 'react-native-paper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
});

const MyIdaView = () => {
  return (
    <View style={styles.container}>
      <Title>my ida coming soon</Title>
    </View>
  );
};

export default MyIdaView;
