import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textStyle: {
    ...theme.fonts.light,
    margin: 3,
    marginVertical: 5,
    paddingVertical: 1,
    paddingHorizontal: 5,
    fontSize: 12,
    borderRadius: 3,
    overflow: 'hidden',
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
  setChannel: (channel: string) => void;
  setGenre: (name: string, slug: string) => void;
};

const GenreButtonsContent: React.FC<Props> = ({
  channel,
  genres,
  setChannel,
  setGenre,
}) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setChannel(channel)}>
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
        <Pressable
          accessibilityLabel={`Select ${genre.name} genre`}
          key={genre.slug}
          onPress={() =>
            genre.name && genre.slug && setGenre(genre.name, genre.slug)
          }>
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

export default GenreButtonsContent;
