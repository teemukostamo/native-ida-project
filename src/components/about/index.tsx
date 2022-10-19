import React from 'react';
import {Linking} from 'react-native';

import AboutContent from './AboutContent';

const AboutView = () => {
  const openUrl = (url: string) => {
    Linking.openURL(url);
  };
  return <AboutContent openUrl={openUrl} />;
};

export default AboutView;
