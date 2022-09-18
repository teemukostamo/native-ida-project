import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, Text} from 'react-native-paper';
import theme from '~src/theme';

const styles = StyleSheet.create({
  nextShowContainer: {
    flexDirection: 'row',
  },
  nextShowHelsinki: {
    ...theme.fonts.light,
    color: theme.colors.gray,
    marginLeft: 10,
  },
  nextShowHelsinkiTitle: {
    color: theme.colors.gray,
    marginTop: 10,
    marginLeft: 10,
  },
  nextShowTallinnTitle: {
    marginTop: 10,
    marginLeft: 10,
    color: theme.colors.text,
  },
  nextShowTallinn: {
    ...theme.fonts.light,
    color: theme.colors.text,
    marginLeft: 10,
  },
});

interface Props {
  studio: string;
  nextShow?: string;
  nextShowStartTime?: string;
}

const OffAir: React.FC<Props> = ({studio, nextShow, nextShowStartTime}) => (
  <View>
    <Title
      style={
        studio === 'tallinn'
          ? styles.nextShowTallinnTitle
          : styles.nextShowHelsinkiTitle
      }>{`${studio} is off air.`}</Title>
    <View style={styles.nextShowContainer}>
      <Text
        style={
          studio === 'tallinn'
            ? styles.nextShowTallinn
            : styles.nextShowHelsinki
        }>
        Up next is {nextShow?.toUpperCase()}
      </Text>
    </View>
    <Text
      style={
        studio === 'tallinn' ? styles.nextShowTallinn : styles.nextShowHelsinki
      }>{`at ${nextShowStartTime}`}</Text>
  </View>
);

export default OffAir;
