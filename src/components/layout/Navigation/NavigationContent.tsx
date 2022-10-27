import * as React from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Text} from 'react-native-paper';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    elevation: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    paddingTop: 10,
    marginHorizontal: 15,
  },
  itemContainer: {
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  textStyle: {
    alignSelf: 'center',
    marginBottom: 20,
    color: theme.colors.darkGray,
  },
  selectedTextStyle: {
    alignSelf: 'center',
    marginBottom: 20,
    color: theme.colors.green,
  },
});

type Props = {
  onNavigate: (route: string) => void;
  viewName: string;
};
const NavigationContent: React.FC<Props> = ({onNavigate, viewName}) => {
  return (
    <Appbar style={styles.container}>
      <View style={styles.itemContainer}>
        <Appbar.Action
          accessibilityLabel="Navigate to live"
          icon="music"
          onPress={() => onNavigate('/')}
          color={
            viewName === 'live' ? theme.colors.green : theme.colors.darkGray
          }
        />
        <Text
          style={
            viewName === 'live' ? styles.selectedTextStyle : styles.textStyle
          }>
          Live
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          accessibilityLabel="Navigate to schedule"
          icon="calendar-star"
          onPress={() => onNavigate('/schedule')}
          color={
            viewName === 'schedule' ? theme.colors.green : theme.colors.darkGray
          }
        />
        <Text
          style={
            viewName === 'schedule'
              ? styles.selectedTextStyle
              : styles.textStyle
          }>
          Schedule
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          accessibilityLabel="Navigate to explore"
          icon="album"
          onPress={() => onNavigate('/episodes')}
          color={
            viewName === 'episodes' || viewName === 'shows'
              ? theme.colors.green
              : theme.colors.darkGray
          }
        />
        <Text
          style={
            viewName === 'episodes' || viewName === 'shows'
              ? styles.selectedTextStyle
              : styles.textStyle
          }>
          Explore
        </Text>
      </View>
      <View style={styles.itemContainer}>
        <Appbar.Action
          accessibilityLabel="Navigate to my ida"
          icon="account-circle"
          onPress={() => onNavigate('/myida')}
          color={
            viewName === 'my ida' ? theme.colors.green : theme.colors.darkGray
          }
        />
        <Text
          style={
            viewName === 'my ida' ? styles.selectedTextStyle : styles.textStyle
          }>
          My Ida
        </Text>
      </View>
    </Appbar>
  );
};

export default NavigationContent;
