import TrackPlayer, {TrackType} from 'react-native-track-player';

export const setupPlayer = async () => {
  const buffer = 0.5;
  await TrackPlayer.setupPlayer({
    playBuffer: buffer,
    minBuffer: buffer * 2,
    maxBuffer: buffer * 2,
    waitForBuffer: true,
  });
};

export const startPlayback = async (
  url: string,
  show_title: string,
  artist: string,
  // imageUrl: string,
) => {
  await TrackPlayer.stop();
  await TrackPlayer.add([
    {
      id: '1',
      url,
      type: TrackType.Default,
      title: show_title,
      artist,
      // artwork: imageUrl,
    },
  ]);
  await TrackPlayer.play();
};

export const stopPlayback = async () => {
  await TrackPlayer.stop();
};
