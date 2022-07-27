import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';

import LiveView from './live';
import ExploreView from './explore';
import RecentsView from './recents';
import MyIdaView from './myida';

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
    {key: 'myida', title: 'My Ida', icon: 'history'},
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
      // eslint-disable-next-line react-native/no-inline-styles
      //barStyle={{backgroundColor: '#e3e3e3'}}
      safeAreaInsets={{bottom: 1}}
    />
  );
};

export default Navigation;
