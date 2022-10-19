import React, {useContext} from 'react';
import {AppContext} from '~src/contexts/main';
import {setGenre, setChannel} from '~src/contexts/filters/actions';
import GenreButtonsContent from './GenreButtonsContent';

type Genre = {
  name?: string;
  slug?: string;
};

type Props = {
  channel: string;
  genres?: Genre[];
};

const GenreButtons: React.FC<Props> = ({channel, genres}) => {
  const {dispatch} = useContext(AppContext);

  const onSetChannelPress = (channelToSet: string) => {
    setChannel(dispatch, channelToSet);
  };

  const onSetGenrePress = (name: string, slug: string) => {
    setGenre(dispatch, name, slug);
  };

  return (
    <GenreButtonsContent
      channel={channel}
      genres={genres}
      setChannel={onSetChannelPress}
      setGenre={onSetGenrePress}
    />
  );
};

export default GenreButtons;
