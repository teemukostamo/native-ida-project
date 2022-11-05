import React from 'react';
import NowPlayingBar from '~src/components/nowPlaying/NowPlayingBar';
import {render, fireEvent} from '~__test_helpers__/testUtils';

describe('NowPlayingBar', () => {
  it('renders null if showNowPlayingBar is false', async () => {
    const handlePress = jest.fn();
    const handleCloseNowPlaying = jest.fn();
    const showNowPlayingBar = false;
    const buffering = true;
    const studio = 'helsinki';
    const nowPlaying = true;
    const show_title = 'Some great show';
    const artist = 'Cool Artist';
    const image = 'www.gif.com';
    const streamType = 'live';

    const {queryByText} = await render(
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
        location="episodes"
      />,
    );

    expect(queryByText(show_title)).toBeNull();
  });

  it('presses pause if stream is playing', async () => {
    const handlePress = jest.fn();
    const handleCloseNowPlaying = jest.fn();
    const showNowPlayingBar = true;
    const buffering = false;
    const studio = 'helsinki';
    const nowPlaying = true;
    const show_title = 'Some great show';
    const artist = 'Cool Artist';
    const image = 'www.gif.com';
    const streamType = 'live';

    const {getByLabelText, getByText} = await render(
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
        location="episodes"
      />,
    );

    expect(getByText(show_title)).toBeDefined();

    const pause = getByLabelText('Pause stream');
    fireEvent.press(pause);
    expect(handlePress).toBeCalled();
  });

  it('presses play if stream is paused', async () => {
    const handlePress = jest.fn();
    const handleCloseNowPlaying = jest.fn();
    const showNowPlayingBar = true;
    const buffering = false;
    const studio = 'helsinki';
    const nowPlaying = false;
    const show_title = 'Some great show';
    const artist = 'Cool Artist';
    const image = 'www.gif.com';
    const streamType = 'live';

    const {getByLabelText, getByText} = await render(
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
        location="episodes"
      />,
    );

    expect(getByText(show_title)).toBeDefined();

    const play = getByLabelText('Play stream');
    fireEvent.press(play);
    expect(handlePress).toBeCalled();
  });

  it('renders mixcloud player correctly', async () => {
    const handlePress = jest.fn();
    const handleCloseNowPlaying = jest.fn();
    const showNowPlayingBar = true;
    const buffering = false;
    const studio = 'helsinki';
    const nowPlaying = false;
    const show_title = 'Some great show';
    const artist = 'Cool Artist';
    const image = 'www.gif.com';
    const streamType = 'mixcloud';

    const {queryByLabelText, getByLabelText, queryByText} = await render(
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
        location="episodes"
      />,
    );

    expect(queryByText(show_title)).toBeNull();

    expect(queryByLabelText('Play stream')).toBeNull();
    expect(queryByLabelText('Pause stream')).toBeNull();

    const closePlayerBtn = getByLabelText('Close player');
    fireEvent.press(closePlayerBtn);
    expect(handleCloseNowPlaying).toBeCalled();
  });
});
