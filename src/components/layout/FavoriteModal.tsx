import React, {useContext} from 'react';
import {StyleSheet, Pressable, View, Platform} from 'react-native';
import {Modal, Portal, Text, Provider} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import {AppContext} from '../../contexts/main';
import {closeModal} from '../../contexts/favoriteModal/actions';
import {
  addFavoriteShow,
  removeFavoriteShow,
  addFavoriteEpisode,
  removeFavoriteEpisode,
} from '../../contexts/favorites/actions';

import theme from '../../theme';
import {useLocation} from 'react-router-native';

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: theme.colors.darkGray,
    height: 300,
    alignSelf: 'stretch',
    top: 182,
    zIndex: 9999,
    elevation: 9999,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
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
    marginLeft: 30,
    fontSize: 25,
    color: theme.colors.gray,
    fontFamily: Platform.OS === 'ios' ? 'Menlo-Bold' : 'FavoritMono-Regular',
    textTransform: 'uppercase',
  },
});

const FavoriteModal = () => {
  const {state, dispatch} = useContext(AppContext);
  console.log(state.favoriteModal);
  const {isOpen, ...episode} = state.favoriteModal;
  const show = {
    channel: episode.channel,
    show_name: episode.show_name,
    show_id: episode.show_id,
    show_image: episode.show_image,
    show_slug: episode.show_slug,
    share_url: episode.share_url,
    genres: episode.genres,
  };

  const showIsFavorite = state.favorites.shows.find(
    existing => existing.show_id === show.show_id,
  );
  const episodeIsFavorite = state.favorites.episodes.find(
    existing => existing.episode_id === episode.episode_id,
  );

  const handleEpisode = () => {
    if (!episodeIsFavorite) {
      addFavoriteEpisode(dispatch, episode);
    } else {
      removeFavoriteEpisode(dispatch, episode);
    }
    closeModal(dispatch);
  };

  const handleShow = () => {
    if (!showIsFavorite) {
      addFavoriteShow(dispatch, show);
    } else {
      removeFavoriteShow(dispatch, show);
    }
    closeModal(dispatch);
  };

  console.log();

  const location = useLocation();

  return isOpen ? (
    <Provider>
      <Portal>
        <Modal
          visible={isOpen}
          onDismiss={() => closeModal(dispatch)}
          contentContainerStyle={styles.modalContainer}>
          <View style={styles.contentContainer}>
            {!location.pathname.endsWith('/shows') && (
              <Pressable
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
              style={styles.itemContainer}
              onPress={() => console.log('pressed')}>
              <Icon
                color={theme.colors.green}
                size={30}
                name="share-square-o"
              />
              <Text style={styles.text}>Share</Text>
            </Pressable>
            {location.pathname.includes('/episodes') && (
              <Pressable
                style={styles.itemContainer}
                onPress={() => console.log('pressed')}>
                <Icon color={theme.colors.green} size={30} name="headphones" />
                <Text style={styles.text}>More From Host</Text>
              </Pressable>
            )}
          </View>
        </Modal>
      </Portal>
    </Provider>
  ) : null;
};

export default FavoriteModal;
