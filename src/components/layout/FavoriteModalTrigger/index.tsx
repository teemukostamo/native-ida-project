import React, {useContext} from 'react';
import {AppContext} from '~src/contexts/main';
import {openModal} from '~src/contexts/favoriteModal/actions';
import {EpisodeItemType} from '~src/schemas/episode';
import {ShowItemType} from '~src/schemas/show';
import FavoriteModalTriggerContent from './FavoriteModalTriggerContent';

type Props = {
  item: ShowItemType | EpisodeItemType;
};

const FavoriteModalTrigger: React.FC<Props> = ({item}) => {
  const {dispatch} = useContext(AppContext);
  const handlePress = () => {
    openModal(dispatch, {
      isOpen: true,
      item,
    });
  };

  const channel =
    (item && item.taxonomies.channel && item.taxonomies.channel[0].slug) ??
    'tallinn';

  return (
    <FavoriteModalTriggerContent channel={channel} handlePress={handlePress} />
  );
};

export default FavoriteModalTrigger;
