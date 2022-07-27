import React from 'react';
import {View} from 'react-native';
import {Title, Text} from 'react-native-paper';

interface Props {
  studio: string;
  nextShow?: string;
  nextShowStartTime?: string;
  styles: any;
}

const OffAir: React.FC<Props> = ({
  styles,
  studio,
  nextShow,
  nextShowStartTime,
}) => (
  <View>
    <Title style={styles.title}>{`${studio} is off air.`}</Title>
    <Text>{`Up next is ${nextShow} at ${nextShowStartTime}`}</Text>
  </View>
);

export default OffAir;
