import React, {useContext} from 'react';
import {View, StyleSheet, FlatList} from 'react-native';
import {Card, Title} from 'react-native-paper';

import {AppContext} from '../../contexts/main';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
});

const Item = ({item}: any) => {
  return (
    <Card>
      <Card.Cover source={{uri: item.featured_image.url}} />
      <Card.Title title={item.show_title} subtitle={item.title} />
    </Card>
  );
};

const ExploreView = () => {
  const {state} = useContext(AppContext);
  console.log('state at latests', state);
  const {latest} = state;

  const hasLatestShows = latest && latest && latest.length > 0;

  return (
    <View style={styles.container}>
      <Title>Explore shows</Title>
      {hasLatestShows && (
        <View>
          <FlatList
            data={latest}
            renderItem={({item}) => <Item item={item} />}
            keyExtractor={item => item.show_title}
          />
        </View>
      )}
    </View>
  );
};

export default ExploreView;
