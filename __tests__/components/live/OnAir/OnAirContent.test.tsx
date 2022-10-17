import React from 'react';
import OnAirContent from '~src/components/live/OnAir/OnAirContent';
import {fireEvent, render} from '~__test_helpers__/testUtils';

import {initialNowPlaying} from '~src/contexts/nowPlaying/reducer';
import {onAir} from '~__test_helpers__/mockdata/live';

describe('OnAir', () => {
  it('play press calls handlePress', async () => {
    const handlePress = jest.fn();
    const {getByLabelText} = await render(
      <OnAirContent
        handlePress={handlePress}
        studio="helsinki"
        genres={[
          {
            name: 'Hip Hop',
            slug: 'hip-hop',
          },
          {
            name: 'Metal',
            slug: 'metal',
          },
        ]}
        liveShow={onAir.helsinki.live_show}
        nowPlaying={initialNowPlaying}
      />,
    );

    const playBtn = getByLabelText('Play live stream from helsinki');
    fireEvent.press(playBtn);
    expect(handlePress).toBeCalled();
  });
});
