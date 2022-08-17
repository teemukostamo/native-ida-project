import React, {useState} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 10,
  },
  textStyle: {
    fontFamily: 'Menlo-Bold',
    marginHorizontal: 15,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 12,
    borderRadius: 8,
    overflow: 'hidden',
  },
  channelStyleInactive: {
    backgroundColor: 'black',
    color: theme.colors.gray,
  },
  channelStyleAll: {
    backgroundColor: theme.colors.green,
    color: theme.colors.gray,
  },
  channelStyleHelsinki: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.accent,
  },
  channelStyleTallinn: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.primary,
  },
});

const ChannelButtons: React.FC = () => {
  const [active, setActive] = useState('all');
  console.log(active);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setActive('all')}>
        <Text
          style={[
            styles.textStyle,
            active === 'all'
              ? styles.channelStyleAll
              : styles.channelStyleInactive,
          ]}>
          ALL
        </Text>
      </Pressable>
      <Pressable onPress={() => setActive('tallinn')}>
        <Text
          style={[
            styles.textStyle,
            active === 'tallinn'
              ? styles.channelStyleTallinn
              : styles.channelStyleInactive,
          ]}>
          TALLINN
        </Text>
      </Pressable>
      <Pressable onPress={() => setActive('helsinki')}>
        <Text
          style={[
            styles.textStyle,
            active === 'helsinki'
              ? styles.channelStyleHelsinki
              : styles.channelStyleInactive,
          ]}>
          HELSINKI
        </Text>
      </Pressable>
    </View>
  );
};

export default ChannelButtons;
