import React from 'react';
import {useNavigate} from 'react-router-native';
import {LatestEpisode} from '../../../contexts/latest/types';

import EpisodeItemContent from './EpisodeItemContent';

type Props = {
  item: LatestEpisode;
};

const EpisodeItem: React.FC<Props> = ({item}) => {
  let navigate = useNavigate();

  const handlePress = () => {
    navigate(`/episodes/${item.slug}/${item.related_show_ID}`);
  };

  return <EpisodeItemContent item={item} handlePress={handlePress} />;
};

export default EpisodeItem;
