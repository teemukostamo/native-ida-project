/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './src/App';
import TrackPlayer from 'react-native-track-player';
import {PlaybackService} from '~src/services/trackPlayer/PlaybackService';

import theme from './src/theme';

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

TrackPlayer.registerPlaybackService(() => PlaybackService);
