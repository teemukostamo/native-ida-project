import React from 'react';
import {useNavigate} from 'react-router-native';

import BackButtonContent from './BackButtonContent';

const BackButton = () => {
  const navigate = useNavigate();

  return <BackButtonContent onNavigate={() => navigate(-1)} />;
};

export default BackButton;
