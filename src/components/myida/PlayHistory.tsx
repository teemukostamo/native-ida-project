import React from 'react';
import {View, Text} from 'react-native';

import {FavoriteEpisodeType} from '../../contexts/favorites/types';

type Props = {
  episodes: FavoriteEpisodeType[];
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
