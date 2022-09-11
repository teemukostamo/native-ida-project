import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {AppContext} from '../../contexts/main';
import {openModal} from '../../contexts/favoriteModal/actions';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end',
  },
  colorHelsinki: {
    backgroundColor: 'rgba(227, 227, 227, 0.8)',
  },
  colorTallinn: {
    backgroundColor: 'rgba(227, 112, 106, 0.8)',
  },
});

interface NameSlug {
  name: string;
  slug: string;
}

type Props = {
  channel: string | null;
  episode_name?: string | null;
  episode_id?: string | null;
  episode_image?: string | null;
  episode_time?: string | null;
  episode_slug?: string | null;
  show_name: string | null;
  show_id: string | null;
  show_image?: string | null;
  show_slug: string | null;
  share_url: string | null;
  mixcloud?: string | null;
  genres?: NameSlug[] | null;
};

const FavoriteModalTrigger: React.FC<Props> = ({
  channel,
  episode_id,
  episode_name,
  episode_image,
  episode_slug,
  episode_time,
  show_id,
  show_name,
  show_slug,
  show_image,
  share_url,
  mixcloud,
  genres,
}) => {
  const {dispatch} = useContext(AppContext);

  return (
    <View
      style={[
        styles.container,
        channel === 'tallinn' ? styles.colorTallinn : styles.colorHelsinki,
      ]}>
      <IconButton
        color={
          channel === 'tallinn' ? theme.colors.primary : theme.colors.accent
        }
        size={30}
        onPress={() =>
          openModal(dispatch, {
            isOpen: true,
            channel,
            episode_name,
            episode_id,
            episode_image,
            episode_slug,
            episode_time,
            show_id,
            show_name,
            show_slug,
            show_image,
            share_url,
            mixcloud,
            genres,
          })
        }
        icon="dots-horizontal"
      />
    </View>
  );
};

export default FavoriteModalTrigger;
