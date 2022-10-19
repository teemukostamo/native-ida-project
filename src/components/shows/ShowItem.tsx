import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {useNavigate} from 'react-router-native';
import {Title} from 'react-native-paper';

import {ShowItemType} from '~src/contexts/shows/types';

import theme from '~src/theme';
import GenreButtons from '../layout/GenreButtons';
import FavoriteModalTrigger from '../layout/FavoriteModalTrigger';

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    paddingBottom: 8,
    backgroundColor: theme.colors.accent,
  },
  cardContainerHelsinki: {
    backgroundColor: theme.colors.accent,
  },
  cardContainerTallinn: {
    backgroundColor: theme.colors.primary,
  },
  image: {
    height: 300,
    flex: 1,
    justifyContent: 'space-between',
  },
  genreButtonsContainer: {
    alignSelf: 'flex-start',
  },
  modalTriggerContainer: {
    alignSelf: 'flex-end',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    marginLeft: 10,
  },
  liveTextStyle: {
    backgroundColor: 'rgba(52, 52, 52, 0.6)',
    position: 'relative',
    bottom: 755,
    marginLeft: 3,
    marginTop: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 3,
    ...theme.fonts.light,
    fontWeight: 'bold',
    color: theme.colors.gray,
  },
  playButton: {
    padding: 1,
    backgroundColor: 'red',
    alignSelf: 'center',
    position: 'relative',
    top: 80,
  },
  playButtonHelsinki: {
    backgroundColor: 'rgba(227, 227, 227, 0.8)',
    color: theme.colors.accent,
  },
  playButtonTallinn: {
    backgroundColor: 'rgba(227, 112, 106, 0.8)',
    color: theme.colors.primary,
  },
  showDateText: {
    marginTop: 8,
    ...theme.fonts.light,
  },
  showTitleText: {
    margin: 1,
  },
});

interface Props {
  item: ShowItemType;
}

const ShowItem: React.FC<Props> = ({item}) => {
  let navigate = useNavigate();

  if (item?.code === 'not_found') {
    return null;
  }

  const handlePress = () => {
    navigate(`/shows/${item?.slug}/${item?.ID}`);
  };

  const channel =
    item?.taxonomies && item.taxonomies.channel
      ? item.taxonomies.channel[0].slug
      : '';

  return (
    <View
      testID="show-item-container"
      style={[
        styles.cardContainer,
        channel === 'helsinki'
          ? styles.cardContainerHelsinki
          : styles.cardContainerTallinn,
      ]}>
      <ImageBackground
        source={{
          uri: item?.featured_image
            ? item.featured_image.sizes.medium_large
            : '/assets/images/ida-logo-1024.png',
        }}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.modalTriggerContainer}>
          <FavoriteModalTrigger item={item} />
        </View>
        <View style={styles.genreButtonsContainer}>
          <GenreButtons channel={channel} genres={item?.taxonomies.genres} />
        </View>
      </ImageBackground>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Title
            onPress={() => handlePress()}
            style={[
              styles.showTitleText,
              channel === 'helsinki' && {color: theme.colors.gray},
            ]}>
            {item?.title}
          </Title>
        </View>
      </View>
    </View>
  );
};

export default ShowItem;
