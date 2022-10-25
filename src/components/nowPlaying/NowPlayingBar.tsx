import React from 'react';
import {View, Image, StyleSheet, Pressable} from 'react-native';
import {Text, IconButton} from 'react-native-paper';

import MixcloudPlayer from './MixcloudPlayer';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    height: 65,
    backgroundColor: theme.colors.primary,
    flexDirection: 'row',
  },
  containerHelsinki: {
    backgroundColor: theme.colors.accent,
    marginBottom: 3,
  },
  divider: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  closeButtonContainer: {
    position: 'absolute',
    backgroundColor: theme.colors.darkGray,
    paddingHorizontal: 5,
    top: -22,
    left: 353,
  },
  closeButtonIcon: {
    color: theme.colors.gray,
    fontSize: 25,
  },
  playButtonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 12,
    flex: 1,
  },
  playButton: {
    alignSelf: 'center',
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  showTitleText: {
    ...theme.fonts.regular,
    fontSize: 16,
    margin: 5,
  },
  textColorGray: {
    color: theme.colors.gray,
  },
  artistText: {
    ...theme.fonts.light,
    fontSize: 12,
    marginLeft: 5,
    marginBottom: 2,
  },

  channelText: {
    ...theme.fonts.light,
    paddingVertical: 4,
    paddingHorizontal: 8,
    fontSize: 10,
    borderRadius: 4,
    overflow: 'hidden',
    alignSelf: 'flex-start',
    marginTop: 5,
    marginRight: 5,
  },
  channelStyleHelsinki: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.accent,
  },
  channelStyleTallinn: {
    backgroundColor: theme.colors.blue,
    color: theme.colors.primary,
  },
  thumbNail: {
    width: 65,
    height: 65,
  },
});

type Props = {
  handlePress: () => void;
  handleCloseNowPlaying: () => void;
  showNowPlayingBar: boolean;
  buffering: boolean;
  studio: string | null;
  nowPlaying: boolean;
  show_title: string | null;
  artist: string | null;
  image: string | null;
  streamType: string | null;
  location: string;
};

const NowPlayingBar: React.FC<Props> = ({
  handlePress,
  handleCloseNowPlaying,
  showNowPlayingBar,
  buffering,
  studio,
  nowPlaying,
  show_title,
  artist,
  image,
  streamType,
  location,
}) => {
  if (showNowPlayingBar && streamType === 'live' && location !== '/') {
    return (
      <View
        style={[
          styles.container,
          studio === 'helsinki' && styles.containerHelsinki,
        ]}>
        <View style={styles.flexContainer}>
          {image && (
            <Image
              accessibilityLabel="Live show image"
              source={{
                uri: image,
              }}
              style={styles.thumbNail}
            />
          )}
          <IconButton
            accessibilityLabel={
              buffering
                ? 'Stream is loading'
                : !nowPlaying
                ? 'Play stream'
                : 'Pause stream'
            }
            style={styles.playButton}
            size={35}
            color={
              studio === 'helsinki' ? theme.colors.gray : theme.colors.text
            }
            icon={buffering ? 'loading' : !nowPlaying ? 'play' : 'stop'}
            onPress={() => handlePress()}
          />
          <View style={styles.textContainer}>
            <Text
              style={[
                styles.showTitleText,
                studio === 'helsinki' && styles.textColorGray,
              ]}>
              {/* take now playing artist from from schedule state */}
              {show_title?.toUpperCase()}
            </Text>
            {artist ? (
              <Text
                style={[
                  styles.artistText,
                  studio === 'helsinki' && styles.textColorGray,
                ]}>
                {artist}
              </Text>
            ) : null}
          </View>
          <Text
            style={[
              styles.channelText,
              studio === 'helsinki'
                ? styles.channelStyleHelsinki
                : styles.channelStyleTallinn,
            ]}>
            {studio?.toUpperCase()}
          </Text>
        </View>
      </View>
    );
  }

  if (showNowPlayingBar && streamType === 'mixcloud') {
    return (
      <View
        style={[
          styles.container,
          studio === 'helsinki' && styles.containerHelsinki,
        ]}>
        <View style={styles.flexContainer}>
          <MixcloudPlayer />
          <Pressable
            accessibilityLabel="Close player"
            onPress={() => handleCloseNowPlaying()}
            style={styles.closeButtonContainer}>
            <Text style={styles.closeButtonIcon}>X</Text>
          </Pressable>
        </View>
      </View>
    );
  }

  return null;
};

export default NowPlayingBar;
