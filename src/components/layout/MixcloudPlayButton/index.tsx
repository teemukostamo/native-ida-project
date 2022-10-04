import React, {useContext} from 'react';
import {LatestEpisode} from '~src/contexts/latest/types';
import {AppContext} from '~src/contexts/main';
import {onPlayMixcloudPress} from '~src/contexts/nowPlaying/actions';
import {addToPlayHistory} from '~src/contexts/favorites/actions';

import MixcloudPlayButtonContent from './MixcloudPlayButtonContent';

type Props = {
  item: LatestEpisode;
};

const MixcloudPlayButton: React.FC<Props> = ({item}) => {
  const {dispatch} = useContext(AppContext);

  const channel =
    item.taxonomies && item.taxonomies.channel
      ? item.taxonomies.channel[0].slug
      : '';

  const onPlayPress = () => {
    addToPlayHistory(dispatch, item);
    onPlayMixcloudPress(
      dispatch,
      item.show_title,
      item.related_show_artist,
      item.mixcloud,
      channel,
    );
  };

  return (
    <MixcloudPlayButtonContent channel={channel} onPlayPress={onPlayPress} />
  );
};

export default MixcloudPlayButton;
