import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Title} from 'react-native-paper';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    margin: 10,
    alignSelf: 'flex-start',
  },
  textContent: {
    ...theme.fonts.light,
    color: theme.colors.darkGray,
  },
  link: {
    ...theme.fonts.light,
    color: theme.colors.green,
  },
  linkTallinn: {
    ...theme.fonts.light,
    color: theme.colors.blue,
  },
  linkHelsinki: {
    ...theme.fonts.light,
    color: theme.colors.accent,
  },
});

const SupportView = () => {
  return (
    <View style={styles.container}>
      <Title>SUPPORT Ida Radio</Title>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Tallinn</Text>
        <Text style={styles.textContent}>Recipient: MTÜ IDA</Text>
        <Text style={styles.textContent}>Account nr: EE747700771002953743</Text>
        <Text style={styles.textContent}>BIC/SWIFT: LHVBEE22</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Helsinki</Text>
        <Text style={styles.textContent}>Recipient: IDA Radio ry</Text>
        <Text style={styles.textContent}>Account nr: FI7915443000144282</Text>
        <Text style={styles.textContent}>BIC/SWIFT: NDEAFIHH</Text>
        <Text style={styles.textContent}>Mobilepay number: 92555</Text>
      </View>
    </View>
  );
};

export default SupportView;
