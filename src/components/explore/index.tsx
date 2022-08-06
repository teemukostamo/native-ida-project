import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {Chip} from 'react-native-paper';

import HotTips from './HotTips';
import Shows from './Shows';
import Episodes from './Episodes';
import Search from './Search';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 8,
  },
});

const ExploreView = () => {
  const [activeView, setActiveView] = useState('picks');

  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <Chip
          mode="outlined"
          selected={activeView === 'picks'}
          onPress={() => setActiveView('picks')}>
          Picks
        </Chip>
        <Chip
          mode="outlined"
          selected={activeView === 'shows'}
          onPress={() => setActiveView('shows')}>
          Shows
        </Chip>
        <Chip
          mode="outlined"
          selected={activeView === 'episodes'}
          onPress={() => setActiveView('episodes')}>
          Episodes
        </Chip>
        <Chip
          mode="outlined"
          selected={activeView === 'search'}
          onPress={() => setActiveView('search')}>
          Search
        </Chip>
      </View>
      {activeView === 'picks' && <HotTips />}
      {activeView === 'shows' && <Shows />}
      {activeView === 'episodes' && <Episodes />}
      {activeView === 'search' && <Search />}
    </View>
  );
};

export default ExploreView;
