import React from 'react';
import {StyleSheet, Pressable, View} from 'react-native';
import {Text} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import theme from '~src/theme';

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 30,
  },
  itemContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginBottom: 15,
  },
  text: {
    ...theme.fonts.light,
    marginLeft: 30,
    fontSize: 25,
    color: theme.colors.gray,
    textTransform: 'uppercase',
  },
});

type Props = {
  pathName: string;
  showIsFavorite: boolean;
  episodeIsFavorite: boolean;
  handleShow: () => void;
  handleEpisode: () => void;
};

const FavoriteModalContent: React.FC<Props> = ({
  pathName,
  showIsFavorite,
  episodeIsFavorite,
  handleShow,
  handleEpisode,
}) => (
  <View style={styles.contentContainer}>
    {!pathName.endsWith('/shows') && (
      <Pressable
        testID="save-episode-link"
        accessibilityLabel="Save episode to favorites"
        style={styles.itemContainer}
        onPress={() => handleEpisode()}>
        <Icon
          color={theme.colors.green}
          size={30}
          name={!episodeIsFavorite ? 'bookmark-o' : 'bookmark'}
        />
        <Text style={styles.text}>
          {!episodeIsFavorite ? 'Save Episode' : 'Remove saved episode'}
        </Text>
      </Pressable>
    )}
    <Pressable
      testID="save-show-link"
      accessibilityLabel="Save show to favorites"
      style={styles.itemContainer}
      onPress={() => handleShow()}>
      <Icon
        color={theme.colors.green}
        size={30}
        name={!showIsFavorite ? 'heart-o' : 'heart'}
      />
      <Text style={styles.text}>
        {!showIsFavorite ? 'Favorite show' : 'Unfavorite show'}
      </Text>
    </Pressable>
    <Pressable
      accessibilityLabel="Share"
      style={styles.itemContainer}
      onPress={() => console.log('pressed')}>
      <Icon color={theme.colors.green} size={30} name="share-square-o" />
      <Text style={styles.text}>Share</Text>
    </Pressable>
    {pathName.includes('/episodes') && (
      <Pressable
        testID="more-from-host-link"
        accessibilityLabel="Find more from host"
        style={styles.itemContainer}
        onPress={() => console.log('pressed')}>
        <Icon color={theme.colors.green} size={30} name="headphones" />
        <Text style={styles.text}>More From Host</Text>
      </Pressable>
    )}
  </View>
);

export default FavoriteModalContent;
