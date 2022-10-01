import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {AppContext} from '~src/contexts/main';
import {openModal} from '~src/contexts/favoriteModal/actions';

import theme from '~src/theme';

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

type Props = {
  item: any;
};

const FavoriteModalTrigger: React.FC<Props> = ({item}) => {
  const {dispatch} = useContext(AppContext);

  const channel = item.taxonomies.channel[0].slug;
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
            item,
          })
        }
        icon="dots-horizontal"
        accessibilityLabel="Press to save to favorites"
      />
    </View>
  );
};

export default FavoriteModalTrigger;
