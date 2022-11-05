import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Title, IconButton} from 'react-native-paper';
import {useLocation, useNavigate} from 'react-router-native';
import ExploreViewSelector from '../ExploreViewSelector';

import {getViewNameFromLocation} from '~src/utils/common';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 40,
  },
  pageTitleStyle: {
    color: theme.colors.darkGray,
    marginLeft: 10,
  },
  idaStyle: {
    color: theme.colors.darkGray,
    marginRight: 10,
    marginLeft: 10,
  },
  accountIconStyle: {
    bottom: 15,
  },
});

const TopBar: React.FC = () => {
  const location = useLocation();
  let navigate = useNavigate();
  const viewName = getViewNameFromLocation(location.pathname);

  if (
    location.pathname.split('/').length > 2 ||
    viewName === 'account' ||
    viewName === 'about' ||
    viewName === 'support'
  ) {
    return (
      <View style={styles.container}>
        <IconButton
          onPress={() => navigate(-1)}
          accessibilityLabel="Go back"
          icon="chevron-left"
          color="white"
          size={30}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            alignSelf: 'flex-end',
            top: 3,
            padding: 1,
          }}
        />
        <Title style={styles.pageTitleStyle}>{viewName}</Title>
        <Title style={styles.idaStyle}>IDA</Title>
      </View>
    );
  }

  if (viewName === 'shows' || viewName === 'episodes') {
    return (
      <View style={styles.container}>
        <ExploreViewSelector />
        <Title style={styles.idaStyle}>IDA</Title>
      </View>
    );
  }

  if (viewName === 'my ida') {
    return (
      <View style={styles.container}>
        <Title style={styles.idaStyle}>IDA</Title>
        <View style={styles.accountIconStyle}>
          <IconButton
            size={30}
            icon="account"
            color={theme.colors.green}
            onPress={() => navigate('/account')}
          />
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Title style={styles.pageTitleStyle}>{viewName}</Title>
      <Title style={styles.idaStyle}>IDA</Title>
    </View>
  );
};

export default TopBar;
