import React, {useContext} from 'react';
import {AppContext} from '~src/contexts/main';

import {NowPlayingState} from '~src/contexts/nowPlaying/types';
import {LiveShowDataSchema, LiveShowDataType} from '~src/schemas/live';
import OnAirContent from './OnAirContent';
import Error from '~src/components/layout/Error';
import {
  stopPlayerPress,
  onTallinnPlayPress,
  onHelsinkiPlayPress,
} from '~src/contexts/nowPlaying/actions';

interface Taxonomies {
  name: string;
  slug: string;
}

interface Props {
  studio: string;
  nowPlaying: NowPlayingState;
  liveShow: LiveShowDataType;
  genres: Taxonomies[];
}

const OnAir: React.FC<Props> = ({studio, nowPlaying, liveShow, genres}) => {
  const {dispatch} = useContext(AppContext);

  const handlePress = () => {
    if (nowPlaying.nowPlaying) {
      if (studio === nowPlaying.studio) {
        stopPlayerPress(dispatch);
      } else {
        if (studio === 'helsinki' && liveShow) {
          onHelsinkiPlayPress(
            dispatch,
            liveShow.show_title,
            liveShow.artist,
            liveShow.episode_image
              ? liveShow.episode_image.url
              : liveShow.show_image.url,
          );
        }
        if (studio === 'tallinn' && liveShow) {
          onTallinnPlayPress(
            dispatch,
            liveShow.show_title,
            liveShow.artist,
            liveShow.episode_image
              ? liveShow.episode_image.url
              : liveShow.show_image.url,
          );
        }
      }
    }

    if (!nowPlaying.nowPlaying) {
      if (studio === 'tallinn' && liveShow) {
        onTallinnPlayPress(
          dispatch,
          liveShow.show_title,
          liveShow.artist,
          liveShow.episode_image
            ? liveShow.episode_image.url
            : liveShow.show_image.url,
        );
      }
      if (studio === 'helsinki' && liveShow) {
        onHelsinkiPlayPress(
          dispatch,
          liveShow.show_title,
          liveShow.artist,
          liveShow.episode_image
            ? liveShow.episode_image.url
            : liveShow.show_image.url,
        );
      }
    }
  };

  try {
    return (
      <OnAirContent
        studio={studio}
        nowPlaying={nowPlaying}
        liveShow={LiveShowDataSchema.parse(liveShow)}
        genres={genres}
        handlePress={handlePress}
      />
    );
  } catch (error) {
    console.log('error in onAir: ', error);
    return <Error />;
  }
};

export default OnAir;
