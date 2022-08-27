import {configureFonts, DefaultTheme} from 'react-native-paper';

enum fontWeights {
  normal = 'normal',
}

const fontConfig = {
  web: {
    regular: {
      fontFamily: 'ida-Regular',
      fontWeight: fontWeights.normal,
    },
    medium: {
      fontFamily: 'ida-Regular',
      fontWeight: fontWeights.normal,
    },
    light: {
      fontFamily: 'sans-serif-light',
      fontWeight: fontWeights.normal,
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: fontWeights.normal,
    },
  },
  ios: {
    regular: {
      fontFamily: 'ida-Regular',
      fontWeight: fontWeights.normal,
    },
    medium: {
      fontFamily: 'ida-Regular',
      fontWeight: fontWeights.normal,
    },
    light: {
      fontFamily: 'Menlo-Bold',
      fontWeight: fontWeights.normal,
    },
    thin: {
      fontFamily: 'Menlo-Bold',
      fontWeight: fontWeights.normal,
    },
  },
  android: {
    regular: {
      fontFamily: 'Ida-Regular',
      fontWeight: fontWeights.normal,
    },
    medium: {
      fontFamily: 'Ida-Regular',
      fontWeight: fontWeights.normal,
    },
    light: {
      fontFamily: 'Ida-Regular',
      fontWeight: fontWeights.normal,
    },
    thin: {
      fontFamily: 'sans-serif-thin',
      fontWeight: fontWeights.normal,
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
    blue: '#0099d2',
    green: '#1db287',
  },
  fonts: configureFonts(fontConfig),
};

export default theme;
