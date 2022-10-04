import TrackPlayer, {TrackType} from 'react-native-track-player';

export const setupPlayer = async () => {
  const buffer = 0.5;
  try {
    await TrackPlayer.setupPlayer({
      playBuffer: buffer,
      minBuffer: buffer * 2,
      maxBuffer: buffer * 2,
      waitForBuffer: true,
    });
  } catch (error) {
    console.log('setupPlayer Error: ', error);
  }
};

export const startPlayback = async (
  url: string,
  show_title: string,
  artist: string,
  image: string,
) => {
  await TrackPlayer.reset();
  await TrackPlayer.add([
    {
      id: '1',
      url,
      type: TrackType.Default,
      title: show_title,
      artist,
      artwork: image,
    },
  ]);
  await TrackPlayer.play();
};

export const stopPlayback = async () => {
  await TrackPlayer.reset();
};
