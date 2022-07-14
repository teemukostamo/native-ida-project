import React from 'react';
import {View} from 'react-native';
import {Title, Text} from 'react-native-paper';

interface Props {
  city: string;
  nextShow?: string;
  nextShowStartTime?: string;
  styles: any;
}

const OffAir: React.FC<Props> = ({
  styles,
  city,
  nextShow,
  nextShowStartTime,
}) => (
  <View>
    <Title style={styles.title}>{`${city} is off air.`}</Title>
    <Text>{`Up next is ${nextShow} at ${nextShowStartTime}`}</Text>
  </View>
);

export default OffAir;
