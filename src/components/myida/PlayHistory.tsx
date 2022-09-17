import React from 'react';
import {View, Text} from 'react-native';
import {LatestEpisode} from '../../contexts/latest/types';

type Props = {
  episodes: LatestEpisode[];
};

const PlayHistory: React.FC<Props> = ({episodes}) => {
  console.log('favorite episodes', episodes);
  return (
    <View>
      <Text>Favorite episodes list</Text>
    </View>
  );
};

export default PlayHistory;
