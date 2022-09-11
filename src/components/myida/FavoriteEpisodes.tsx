import React from 'react';
import {View, Text} from 'react-native';

import {FavoriteEpisodeType} from '../../contexts/favorites/types';

type Props = {
  episodes: FavoriteEpisodeType[];
};

const FavoriteEpisodes: React.FC<Props> = ({episodes}) => {
  console.log('favorite episodes', episodes);
  return (
    <View>
      <Text>Favorite episodes list</Text>
      {episodes.map(episode => (
        <Text>{episode.episode_name}</Text>
      ))}
    </View>
  );
};

export default FavoriteEpisodes;
