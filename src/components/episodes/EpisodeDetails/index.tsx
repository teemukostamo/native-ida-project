import React, {useContext} from 'react';
import {onPlayMixcloudPress} from '~src/contexts/nowPlaying/actions';
import {AppContext} from '~src/contexts/main';
import {addToPlayHistory} from '~src/contexts/favorites/actions';
import {LatestEpisode} from '~src/contexts/latest/types';
import EpisodeDetailsContent from './EpisodeDetailsContent';

type Props = {
  item: LatestEpisode;
};

const EpisodeDetails: React.FC<Props> = ({item}) => {
  const {dispatch} = useContext(AppContext);

  const onPlayPress = (episodeItem: LatestEpisode) => {
    addToPlayHistory(dispatch, episodeItem);
    onPlayMixcloudPress(
      dispatch,
      episodeItem.title,
      episodeItem.related_show_artist,
      episodeItem.mixcloud,
    );
  };

  return <EpisodeDetailsContent item={item} onPlayPress={onPlayPress} />;
};

export default EpisodeDetails;
