import React, {useContext, useEffect, useState} from 'react';
import {useTrackPlayerEvents, Event, State} from 'react-native-track-player';
import {useLocation} from 'react-router-native';
import {
  closeNowPlaying,
  stopPlayerPress,
  onTallinnPlayPress,
  onHelsinkiPlayPress,
  updateNowPlaying,
} from '~src/contexts/nowPlaying/actions';
import {AppContext} from '~src/contexts/main';
import useLive from '../../hooks/useLive';

import NowPlayingBar from './NowPlayingBar';

const NowPlaying = () => {
  const location = useLocation();
  const {state, dispatch} = useContext(AppContext);
  const [buffering, setBuffering] = useState(false);
  const {data: live} = useLive();

  const {
    studio,
    showNowPlayingBar,
    nowPlaying,
    show_title,
    artist,
    image,
    streamType,
  } = state.nowPlaying;
  const helsinki = live?.helsinki;
  const tallinn = live?.tallinn;

  useEffect(() => {
    if (studio === 'helsinki' && helsinki?.live_show && show_title) {
      if (helsinki.live_show.show_title !== show_title) {
        updateNowPlaying(
          dispatch,
          helsinki.live_show.show_title,
          helsinki.live_show.artist,
          helsinki.live_show.show_image.url,
        );
      }
    }

    if (studio === 'tallinn' && tallinn?.live_show && show_title) {
      if (tallinn.live_show.show_title !== show_title) {
        updateNowPlaying(
          dispatch,
          tallinn.live_show.show_title,
          tallinn.live_show.artist,
          tallinn.live_show.show_image.url,
        );
      }
    }
  }, [
    dispatch,
    live,
    helsinki?.live_show,
    tallinn?.live_show,
    show_title,
    studio,
  ]);

  useTrackPlayerEvents([Event.PlaybackState], async event => {
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
      location={location.pathname}
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
