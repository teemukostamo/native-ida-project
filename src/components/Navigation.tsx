import * as React from 'react';
import {Text} from 'react-native';
import {BottomNavigation} from 'react-native-paper';

import LiveView from './LiveView';

const Navigation = () => {
  const LiveRoute = () => <LiveView />;
  const ExploreRoute = () => <Text>Explore</Text>;
  const RecentsRoute = () => <Text>Recents</Text>;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'live', title: 'Live', icon: 'music', color: '#795548'},
    {key: 'explore', title: 'Explore', icon: 'album', color: '#607D8B'},
    {key: 'recents', title: 'Recents', icon: 'history', color: '#3F51B5'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    live: LiveRoute,
    explore: ExploreRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{backgroundColor: '#e3e3e3'}}
    />
  );
};

export default Navigation;
