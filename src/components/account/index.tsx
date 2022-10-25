import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';

import FavoriteStorage from '~src/utils/AsyncStorageUtil';

import theme from '~src/theme';
import {useNavigate} from 'react-router-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
  },
  linkText: {
    ...theme.fonts.light,
    letterSpacing: 4,
    fontWeight: '900',
    fontSize: 24,
    color: theme.colors.accent,
    margin: 20,
  },
});

const Account = () => {
  let navigate = useNavigate();

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.linkText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>SETTINGS</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('/support')}>
        <Text style={styles.linkText}>SUPPORT</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('/about')}>
        <Text style={styles.linkText}>ABOUT</Text>
      </TouchableOpacity>

      {/* Clears async storage. Reload app after clear to update state also  */}
      <TouchableOpacity onPress={() => FavoriteStorage.removeFavorites()}>
        <Text style={styles.linkText}>CLEAR HISTORY AND FAVORITES</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Account;
