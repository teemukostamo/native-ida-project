import {configureFonts, DefaultTheme} from 'react-native-paper';

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'ida-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'ida-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'ida-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'ida-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'Menlo-Bold',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'Menlo-Bold',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'ida-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'ida-Regular',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: 'normal',
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: 'normal',
    },
  },
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ebaccb',
    accent: '#7162dd',
    text: '#e3706a',
    gray: '#e3e3e3',
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
