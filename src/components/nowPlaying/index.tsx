import React, {useContext, useState} from 'react';
import {useTrackPlayerEvents, Event, State} from 'react-native-track-player';
import {
  closeNowPlaying,
  stopPlayerPress,
  onTallinnPlayPress,
  onHelsinkiPlayPress,
} from '~src/contexts/nowPlaying/actions';
import {AppContext} from '~src/contexts/main';

import NowPlayingBar from './NowPlayingBar';

const NowPlaying = () => {
  const {state, dispatch} = useContext(AppContext);
  const [buffering, setBuffering] = useState(false);
  const {
    studio,
    showNowPlayingBar,
    nowPlaying,
    show_title,
    artist,
    image,
    streamType,
  } = state.nowPlaying;

  useTrackPlayerEvents([Event.PlaybackState], async event => {
    console.log('event state', event);
    if (event.state === State.Buffering) {
      setBuffering(true);
    } else {
      setBuffering(false);
    }
  });

  const handlePress = () => {
    if (nowPlaying) {
      stopPlayerPress(dispatch);
    }

    if (!nowPlaying && studio && show_title) {
      if (studio === 'helsinki') {
        onHelsinkiPlayPress(
          dispatch,
          show_title,
          artist || 'Unknown artist',
          image || 'image not found',
        );
      }
      if (studio === 'tallinn') {
        onTallinnPlayPress(
          dispatch,
          show_title,
          artist || 'Unknown artist',
          image || 'image not found',
        );
      }
    }
  };

  const handleCloseNowPlaying = () => {
    closeNowPlaying(dispatch);
  };

  return (
    <NowPlayingBar
      handlePress={handlePress}
      handleCloseNowPlaying={handleCloseNowPlaying}
      showNowPlayingBar={showNowPlayingBar}
      buffering={buffering}
      studio={studio}
      nowPlaying={nowPlaying}
      show_title={show_title}
      artist={artist}
      image={image}
      streamType={streamType}
    />
  );
};

export default NowPlaying;
