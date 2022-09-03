import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Menlo-Bold',
    letterSpacing: 4,
    fontWeight: '900',
    fontSize: 24,
    color: theme.colors.darkGray,
    margin: 20,
  },
});

const MyIdaView = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.linkText}>About IDA</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>About app</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>Support</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MyIdaView;
