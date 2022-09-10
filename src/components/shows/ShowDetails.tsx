import React from 'react';
import {View, Text, StyleSheet, ImageBackground} from 'react-native';
import {Title} from 'react-native-paper';
import theme from '../../theme';
import GenreButtons from '../layout/GenreButtons';
import {stripHtmlTags} from '../../utils';

const styles = StyleSheet.create({
  coverImage: {
    width: 66,
    height: 58,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    justifyContent: 'center',
  },
  imageContentContainer: {
    height: 200,
  },
  showInfoContainer: {
    padding: 10,
  },
  showInfoContainerTallinn: {
    padding: 10,
    backgroundColor: theme.colors.primary,
  },
  showInfoContainerHelsinki: {
    backgroundColor: theme.colors.accent,
  },
  showArtistText: {
    fontFamily: 'Menlo-Bold',
  },
  showArtistTextHelsinki: {
    color: theme.colors.gray,
  },
  showArtistTextTallinn: {
    color: theme.colors.text,
  },
  showTitleTextHelsinki: {
    color: theme.colors.gray,
  },
  showTitleTextTallinn: {
    color: theme.colors.text,
  },
  descriptionTextStyle: {
    fontFamily: 'Menlo-Bold',
    fontSize: 14,
    marginTop: 5,
  },
  descriptionTextStyleHelsinki: {
    color: theme.colors.gray,
  },
  descriptionTextStyleTallinn: {
    color: theme.colors.text,
  },
});

type Genre = {
  name?: string;
  slug?: string;
};

type Props = {
  imageUrl?: string;
  channel: string;
  artist?: string;
  title: string;
  description?: string;
  genres?: Genre[];
};

const ShowDetails: React.FC<Props> = ({
  imageUrl,
  channel,
  artist,
  title,
  description,
  genres,
}) => {
  const imageSrc = imageUrl
    ? {
        uri: imageUrl,
      }
    : require('../../../assets/images/ida-logo-1024.png');

  return (
    <View style={styles.imageContainer}>
      <ImageBackground
        source={imageSrc}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.imageContentContainer} />
      </ImageBackground>
      <View
        style={[
          styles.showInfoContainer,
          channel === 'tallinn'
            ? styles.showInfoContainerTallinn
            : styles.showInfoContainerHelsinki,
        ]}>
        <Text
          style={[
            styles.showArtistText,
            channel === 'tallinn'
              ? styles.showArtistTextTallinn
              : styles.showArtistTextHelsinki,
          ]}>
          {artist ? artist : ''}
        </Text>
        <Title
          style={
            channel === 'tallinn'
              ? styles.showTitleTextTallinn
              : styles.showTitleTextHelsinki
          }>
          {title}
        </Title>
        <GenreButtons channel={channel} genres={genres} />
        {description ? (
          <Text
            style={[
              styles.descriptionTextStyle,
              channel === 'helsinki'
                ? styles.descriptionTextStyleHelsinki
                : styles.descriptionTextStyleTallinn,
            ]}>
            {stripHtmlTags(description)}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default ShowDetails;
