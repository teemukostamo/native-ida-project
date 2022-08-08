import * as React from 'react';
import {IconButton} from 'react-native-paper';
import {useNavigate} from 'react-router-native';

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <IconButton
      onPress={() => navigate(-1)}
      icon="chevron-left"
      color="white"
      size={40}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{
        position: 'absolute',
        top: 600,
        zIndex: 999,
        left: 10,
        backgroundColor: 'rgba(227, 227, 227, 0.8)',
      }}
    />
  );
};

export default BackButton;
