import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, IconButton} from 'react-native-paper';
import {useLocation, useNavigate} from 'react-router-native';
import ExploreViewSelector from './ExploreViewSelector';

import {getViewNameFromLocation} from '~src/utils/utils';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  pageTitleStyle: {
    color: theme.colors.backdrop,
    marginLeft: 10,
  },
  idaStyle: {
    color: theme.colors.backdrop,
    marginRight: 10,
  },
  accountIconStyle: {
    marginRight: 10,
    bottom: 15,
  },
});

const TopBar: React.FC = () => {
  const location = useLocation();
  let navigate = useNavigate();

  const viewName = getViewNameFromLocation(location.pathname);

  return (
    <View style={styles.container}>
      {viewName === 'shows' || viewName === 'episodes' ? (
        <ExploreViewSelector />
      ) : (
        <Title style={styles.pageTitleStyle}>{viewName}</Title>
      )}
      {viewName === 'my ida' ? (
        <View style={styles.accountIconStyle}>
          <IconButton
            size={30}
            icon="account"
            color={theme.colors.green}
            onPress={() => navigate('/account')}
          />
        </View>
      ) : (
        <Title style={styles.idaStyle}>IDA</Title>
      )}
    </View>
  );
};

export default TopBar;
