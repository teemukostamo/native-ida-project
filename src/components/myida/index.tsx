import React, {useContext, useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Text} from 'react-native-paper';
import {AppContext} from '~src/contexts/main';

import FavoriteEpisodes from './FavoriteEpisodes';
import FavoriteShows from './FavoriteShows';
import PlayHistory from './PlayHistory';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  linksContainer: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
  },
  linkContainerSelected: {
    borderBottomColor: theme.colors.primary,
    borderBottomWidth: 2,
  },
  linkText: {
    letterSpacing: 2,
    fontSize: 20,
    color: theme.colors.darkGray,
  },
  linkTextSelected: {
    letterSpacing: 2,
    fontSize: 20,
    color: theme.colors.green,
  },
});

const MyIdaView = () => {
  const {state} = useContext(AppContext);
  const [selectedView, setSelectedView] = useState('episodes');

  return (
    <View style={styles.container}>
      <View style={styles.linksContainer}>
        <Pressable
          style={[selectedView === 'episodes' && styles.linkContainerSelected]}
          onPress={() => setSelectedView('episodes')}>
          <Text
            style={[
              selectedView === 'episodes'
                ? styles.linkTextSelected
                : styles.linkText,
            ]}>
            Episodes
          </Text>
        </Pressable>
        <Pressable
          style={[selectedView === 'shows' && styles.linkContainerSelected]}
          onPress={() => setSelectedView('shows')}>
          <Text
            style={[
              selectedView === 'shows'
                ? styles.linkTextSelected
                : styles.linkText,
            ]}>
            Shows
          </Text>
        </Pressable>
        <Pressable
          style={[selectedView === 'history' && styles.linkContainerSelected]}
          onPress={() => setSelectedView('history')}>
          <Text
            style={[
              selectedView === 'history'
                ? styles.linkTextSelected
                : styles.linkText,
            ]}>
            History
          </Text>
        </Pressable>
      </View>
      {selectedView === 'episodes' && (
        <FavoriteEpisodes episodes={state.favorites.episodes} />
      )}
      {selectedView === 'shows' && (
        <FavoriteShows shows={state.favorites.shows} />
      )}
      {selectedView === 'history' && (
        <PlayHistory episodes={state.favorites.history} />
      )}
    </View>
  );
};

export default MyIdaView;
