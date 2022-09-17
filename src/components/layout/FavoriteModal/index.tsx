import React, {useContext} from 'react';
import {Modal, Portal, Provider} from 'react-native-paper';

import {AppContext} from '~src/contexts/main';
import {closeModal} from '~src/contexts/favoriteModal/actions';
import {
  addFavoriteShow,
  removeFavoriteShow,
  addFavoriteEpisode,
  removeFavoriteEpisode,
} from '~src/contexts/favorites/actions';
import FavoriteModalContent from './FavoriteModalContent';

import {useLocation} from 'react-router-native';
import {StyleSheet} from 'react-native';
import theme from '~src/theme';

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
});

const FavoriteModal = () => {
  const {state, dispatch} = useContext(AppContext);
  const {isOpen, item} = state.favoriteModal;

  const showIsFavorite = state.favorites.shows.some(
    existing => existing?.ID === item?.ID,
  );
  const episodeIsFavorite = state.favorites.episodes.some(
    existing => existing.ID === item?.ID,
  );

  const handleEpisode = () => {
    if (item && 'mixcloud' in item) {
      if (!episodeIsFavorite) {
        addFavoriteEpisode(dispatch, item);
      } else {
        removeFavoriteEpisode(dispatch, item);
      }
      closeModal(dispatch);
    }
  };

  const handleShow = () => {
    if (item && 'post_date' in item) {
      if (!showIsFavorite) {
        addFavoriteShow(dispatch, item);
      } else {
        removeFavoriteShow(dispatch, item);
      }
      closeModal(dispatch);
    }
  };

  const handleCloseModal = () => {
    closeModal(dispatch);
  };
  const location = useLocation();

  return (
    <Provider>
      <Portal>
        <Modal
          visible={isOpen}
          onDismiss={() => handleCloseModal()}
          contentContainerStyle={styles.modalContainer}>
          <FavoriteModalContent
            pathName={location.pathname}
            showIsFavorite={showIsFavorite}
            episodeIsFavorite={episodeIsFavorite}
            handleShow={handleShow}
            handleEpisode={handleEpisode}
          />
        </Modal>
      </Portal>
    </Provider>
  );
};

export default FavoriteModal;
