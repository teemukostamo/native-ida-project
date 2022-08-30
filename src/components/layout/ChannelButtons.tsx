import React, {useContext} from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {AppContext} from '../../contexts/main';
import {setChannel} from '../../contexts/filters/actions';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 8,
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
    backgroundColor: 'rgba(7, 7, 7, 0.8)',
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

const ChannelButtons: React.FC = ({}) => {
  const {state, dispatch} = useContext(AppContext);
  const channel = state.filters.channel;

  const handleChange = (selectedChannel: string) => {
    setChannel(dispatch, selectedChannel);
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={() => handleChange('all')}>
        <Text
          style={[
            styles.textStyle,
            channel === 'all'
              ? styles.channelStyleAll
              : styles.channelStyleInactive,
          ]}>
          ALL
        </Text>
      </Pressable>
      <Pressable onPress={() => handleChange('tallinn')}>
        <Text
          style={[
            styles.textStyle,
            channel === 'tallinn'
              ? styles.channelStyleTallinn
              : styles.channelStyleInactive,
          ]}>
          TALLINN
        </Text>
      </Pressable>
      <Pressable onPress={() => handleChange('helsinki')}>
        <Text
          style={[
            styles.textStyle,
            channel === 'helsinki'
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
