import React, {useContext} from 'react';
import {onPlayMixcloudPress} from '~src/contexts/nowPlaying/actions';
import {AppContext} from '~src/contexts/main';
import {addToPlayHistory} from '~src/contexts/favorites/actions';
import {EpisodeItemType} from '~src/schemas/episode';
import EpisodeDetailsContent from './EpisodeDetailsContent';

type Props = {
  item: EpisodeItemType;
};

const EpisodeDetails: React.FC<Props> = ({item}) => {
  const {dispatch} = useContext(AppContext);

  const channel =
    (item.taxonomies.channel && item.taxonomies.channel[0].slug) || '';

  const onPlayPress = (episodeItem: EpisodeItemType) => {
    addToPlayHistory(dispatch, episodeItem);
    onPlayMixcloudPress(
      dispatch,
      episodeItem.title,
      episodeItem.related_show_artist,
      episodeItem.mixcloud,
      channel,
    );
  };

  return <EpisodeDetailsContent item={item} onPlayPress={onPlayPress} />;
};

export default EpisodeDetails;
