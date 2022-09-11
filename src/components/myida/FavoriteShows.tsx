import React from 'react';
import {View, Text} from 'react-native';

import {FavoriteShowType} from '../../contexts/favorites/types';

type Props = {
  shows: FavoriteShowType[];
};

const FavoriteShows: React.FC<Props> = ({shows}) => {
  console.log('favorite shows', shows);
  return (
    <View>
      <Text>Favorite shows list</Text>
      {shows.map(show => (
        <Text>{show.show_name}</Text>
      ))}
    </View>
  );
};

export default FavoriteShows;
