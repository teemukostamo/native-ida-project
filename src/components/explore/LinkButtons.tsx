import React from 'react';
import {View, StyleSheet} from 'react-native';
import {useNavigate, useLocation} from 'react-router-native';
import {Chip} from 'react-native-paper';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
  },
  chipContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingBottom: 6,
  },
});

const LinkButtons = () => {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        {/* <Chip
          mode="outlined"
          selected={location.pathname === '/picks'}
          onPress={() => navigate('/picks')}>
          Picks
        </Chip> */}
        <Chip
          mode="outlined"
          selected={location.pathname === '/shows'}
          onPress={() => navigate('/shows')}>
          Shows
        </Chip>
        <Chip
          mode="outlined"
          selected={location.pathname === '/episodes'}
          onPress={() => navigate('/episodes')}>
          Episodes
        </Chip>
        <Chip
          mode="outlined"
          selected={location.pathname === '/search'}
          onPress={() => navigate('/search')}>
          Search
        </Chip>
      </View>
    </View>
  );
};

export default LinkButtons;
