import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';

import LiveView from './live';
import ExploreView from './explore';
import RecentsView from './recents';
import MyIdaView from './myida';

import theme from '../theme';

const Navigation: React.FC = () => {
  const LiveRoute = () => <LiveView />;
  const ExploreRoute = () => <ExploreView />;
  const RecentsRoute = () => <RecentsView />;
  const MyIdaRoute = () => <MyIdaView />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'live', title: 'Live', icon: 'music'},
    {key: 'explore', title: 'Explore', icon: 'album'},
    {key: 'recents', title: 'Recents', icon: 'history'},
    {key: 'myida', title: 'My Ida', icon: 'account-circle'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    live: LiveRoute,
    explore: ExploreRoute,
    recents: RecentsRoute,
    myida: MyIdaRoute,
  });

  return (
    <BottomNavigation
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={{backgroundColor: theme.colors.gray}}
      safeAreaInsets={{bottom: 1}}
    />
  );
};

export default Navigation;
