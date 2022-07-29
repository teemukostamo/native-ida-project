import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';

import LiveView from './live';
import ExploreView from './explore';
import ScheduleView from './schedule';
import MyIdaView from './myida';

import theme from '../theme';

const Navigation: React.FC = () => {
  const LiveRoute = () => <LiveView />;
  const ScheduleRoute = () => <ScheduleView />;
  const ExploreRoute = () => <ExploreView />;
  const MyIdaRoute = () => <MyIdaView />;

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'live', title: 'Live', icon: 'music'},
    {key: 'schedule', title: 'Schedule', icon: 'calendar-star'},
    {key: 'explore', title: 'Explore', icon: 'album'},
    {key: 'myida', title: 'My Ida', icon: 'account-circle'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    live: LiveRoute,
    schedule: ScheduleRoute,
    explore: ExploreRoute,
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
