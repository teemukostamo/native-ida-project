/**
 * @format
 */

import * as React from 'react';
import {AppRegistry} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';

import {name as appName} from './app.json';
import App from './src/App';
import TrackPlayer from 'react-native-track-player';
import {PlaybackService} from '~src/services/trackPlayer/PlaybackService';

import theme from './src/theme';

// Initialize Apollo Client
const client = new ApolloClient({
  uri: 'http://FIXME:3000/graphql',
  cache: new InMemoryCache(),
});

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </PaperProvider>
  );
}

AppRegistry.registerComponent(appName, () => Main);

TrackPlayer.registerPlaybackService(() => PlaybackService);
