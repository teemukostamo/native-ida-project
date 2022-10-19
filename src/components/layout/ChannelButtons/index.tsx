import React, {useContext} from 'react';
import {AppContext} from '~src/contexts/main';
import {setChannel} from '~src/contexts/filters/actions';
import ChannelButtonsContent from './ChannelButtonsContent';

const ChannelButtons: React.FC = () => {
  const {state, dispatch} = useContext(AppContext);
  const channel = state.filters.channel;

  const handleChange = (selectedChannel: string) => {
    setChannel(dispatch, selectedChannel);
  };

  return (
    <ChannelButtonsContent channel={channel} handleChange={handleChange} />
  );
};

export default ChannelButtons;
