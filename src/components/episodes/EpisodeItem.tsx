import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import {Text, Title} from 'react-native-paper';
import {useNavigate} from 'react-router-native';
import {format, parseISO} from 'date-fns';
import GenreButtons from '../layout/GenreButtons';
import {LatestEpisode} from '../../contexts/latest/types';
import MixcloudPlayButton from '../layout/MixcloudPlayButton';
import FavoriteModalTrigger from '../layout/FavoriteModalTrigger';

import theme from '~src/theme';

const styles = StyleSheet.create({
  cardContainer: {
    margin: 10,
    backgroundColor: theme.colors.accent,
  },
  cardContainerHelsinki: {
    backgroundColor: theme.colors.accent,
  },
  cardContainerTallinn: {
    backgroundColor: theme.colors.primary,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titleTextContainer: {
    marginLeft: 10,
  },
  showDateText: {
    marginTop: 8,
    fontFamily: 'Menlo-Bold',
  },
  showTitleText: {
    margin: 1,
  },
});

type Props = {
  item: LatestEpisode;
};

const EpisodeItem: React.FC<Props> = ({item}) => {
  let navigate = useNavigate();

  const handlePress = () => {
    navigate(`/episodes/${item.slug}/${item.related_show_ID}`);
  };

  if (item?.code === 'not_found') {
    return null;
  }

  const channel =
    item.taxonomies && item.taxonomies.channel
      ? item.taxonomies.channel[0].slug
      : '';

  return (
    <View
      style={[
        styles.cardContainer,
        channel === 'helsinki'
          ? styles.cardContainerHelsinki
          : styles.cardContainerTallinn,
      ]}>
      <View style={styles.imageContainer}>
        <ImageBackground
          source={{
            uri: item.featured_image
              ? item.featured_image.sizes.medium_large
              : '/assets/images/ida-logo-1024.png',
          }}
          resizeMode="cover"
          style={styles.image}>
          <FavoriteModalTrigger item={item} />
          <MixcloudPlayButton item={item} />
          <GenreButtons channel={channel} genres={item.taxonomies.genres} />
        </ImageBackground>
      </View>
      <View style={styles.titleContainer}>
        <View style={styles.titleTextContainer}>
          <Text
            style={[
              styles.showDateText,
              channel === 'helsinki' && {color: theme.colors.gray},
            ]}>
            {item?.episode_time?.episode_start
              ? format(parseISO(item.episode_time.episode_start), 'dd.MM.yyyy')
              : 'unknown'}
          </Text>
          <Title
            onPress={() => handlePress()}
            style={[
              styles.showTitleText,
              channel === 'helsinki' && {color: theme.colors.gray},
            ]}>
            {item.show_title ? item.show_title : item.title}
          </Title>
        </View>
      </View>
    </View>
  );
};

export default EpisodeItem;
