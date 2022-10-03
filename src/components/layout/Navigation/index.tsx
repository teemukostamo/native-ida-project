import * as React from 'react';
import {useLocation, useNavigate} from 'react-router-native';
import {getViewNameFromLocation} from '~src/utils/common';

import NavigationContent from './NavigationContent';

const Navigation = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const onNavigate = (route: string) => {
    navigate(route, {replace: true});
  };

  return (
    <NavigationContent
      viewName={getViewNameFromLocation(location.pathname)}
      onNavigate={onNavigate}
    />
  );
};

export default Navigation;
