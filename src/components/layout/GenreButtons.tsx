import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    //    backgroundColor: theme.colors.gray,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    fontFamily: 'Menlo-Bold',
    margin: 3,
    marginVertical: 5,
    paddingVertical: 1,
    paddingHorizontal: 5,
    fontSize: 12,
  },
  channelStyleHelsinki: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.accent,
  },
  channelStyleTallinn: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.primary,
  },
  genreStyleHelsinki: {
    backgroundColor: theme.colors.gray,
    color: theme.colors.accent,
  },
  genreStyleTallinn: {
    backgroundColor: theme.colors.text,
    color: theme.colors.primary,
  },
});

type Genre = {
  name?: string;
  slug?: string;
};

type Props = {
  channel: string;
  genres?: Genre[];
};

const GenreButtons: React.FC<Props> = ({channel, genres}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => console.log('pressed')}>
        <Text
          style={[
            styles.textStyle,
            channel === 'helsinki'
              ? styles.channelStyleHelsinki
              : styles.channelStyleTallinn,
          ]}>
          {channel.toUpperCase()}
        </Text>
      </Pressable>
      {genres?.map(genre => (
        <Pressable key={genre.slug} onPress={() => console.log('pressed')}>
          <Text
            style={[
              styles.textStyle,
              channel === 'helsinki'
                ? styles.genreStyleHelsinki
                : styles.genreStyleTallinn,
            ]}>
            {genre?.name?.toUpperCase()}
          </Text>
        </Pressable>
      ))}
    </View>
  );
};

export default GenreButtons;
