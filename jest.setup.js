/* eslint-disable no-undef */
import '@testing-library/jest-native/extend-expect';
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

jest.mock(
  './node_modules/react-native/Libraries/EventEmitter/NativeEventEmitter',
);
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');
jest.mock('react-native-track-player', () => ({
  Event: {
    PlaybackState: 'playback-state',
  },
  useTrackPlayerEvents: jest.fn(),
  setupPlayer: jest.fn(),
}));

// jest.mock('react-native-track-player', () => () => {
//   return {
//     __esModule: true,
//     Event: {
//       PlaybackState: 'playback-state',
//     },
//     default: {
//       Event: {
//         PlaybackState: 'playback-state',
//       },
//       addEventListener: () => ({
//         remove: jest.fn(),
//       }),
//       registerEventHandler: jest.fn(),
//       registerPlaybackService: jest.fn(),
//       setupPlayer: jest.fn(),
//       destroy: jest.fn(),
//       updateOptions: jest.fn(),
//       reset: jest.fn(),
//       add: jest.fn(),
//       remove: jest.fn(),
//       skip: jest.fn(),
//       skipToNext: jest.fn(),
//       skipToPrevious: jest.fn(),
//       removeUpcomingTracks: jest.fn(),
//       // playback commands
//       play: jest.fn(),
//       pause: jest.fn(),
//       stop: jest.fn(),
//       seekTo: jest.fn(),
//       setVolume: jest.fn(),
//       setRate: jest.fn(),
//       // player getters
//       getQueue: jest.fn(),
//       getTrack: jest.fn(),
//       getCurrentTrack: jest.fn(),
//       getVolume: jest.fn(),
//       getDuration: jest.fn(),
//       getPosition: jest.fn(),
//       getBufferedPosition: jest.fn(),
//       getState: jest.fn(),
//       getRate: jest.fn(),
//     },
//     useTrackPlayerProgress: () => ({
//       position: 100,
//       duration: 200,
//     }),
//   };
// });
