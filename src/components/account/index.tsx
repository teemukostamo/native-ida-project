import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'react-native-paper';
import BackButton from '../layout/BackButton';

import FavoriteStorage from '../../utils/AsyncStorageUtil';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  linkText: {
    fontFamily: 'Menlo-Bold',
    letterSpacing: 4,
    fontWeight: '900',
    fontSize: 24,
    color: theme.colors.darkGray,
    margin: 20,
  },
});

const Account = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text style={styles.linkText}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>CREATE ACCOUNT</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>ABOUT IDA</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>ABOUT APP</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>SUPPORT</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.linkText}>SETTINGS</Text>
      </TouchableOpacity>

      {/* Temporary for dev puposes. Reload app after to update state also  */}
      <TouchableOpacity onPress={() => FavoriteStorage.removeFavorites()}>
        <Text style={styles.linkText}>CLEAR ASYNC STORAGE</Text>
      </TouchableOpacity>
      <BackButton />
    </View>
  );
};

export default Account;