import React from 'react';
import {View} from 'react-native';
import {Title, Button} from 'react-native-paper';

interface Props {
  town: string;
  onPress: () => void;
}

const OnAir: React.FC<Props> = ({town, onPress}) => {
  return (
    <View>
      <View>
        <Title>in prog</Title>
        <Button icon="camera" mode="contained" onPress={() => onPress()}>
          Press me
        </Button>
      </View>
    </View>
  );
};

export default OnAir;
