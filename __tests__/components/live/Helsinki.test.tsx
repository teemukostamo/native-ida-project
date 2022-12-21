import React from 'react';
import Helsinki from '~src/components/live/Helsinki';
import {render} from '~__test_helpers__/testUtils';

import {initialNowPlaying} from '~src/contexts/nowPlaying/reducer';
import {offAir, offline} from '~__test_helpers__/mockdata/live';
import {LiveShowsSchema} from '~src/schemas/live';

describe('Helsinki', () => {
  it('renders next show when offair', async () => {
    const {getByText} = await render(
      <Helsinki
        liveState={LiveShowsSchema.parse(offAir)}
        nowPlaying={initialNowPlaying}
      />,
    );

    expect(getByText('helsinki is off air.')).toBeDefined();
    expect(getByText('Up next is PLANET FUN FUN')).toBeDefined();
    expect(getByText('at 2022-09-19 11:00:00')).toBeDefined();
  });

  it('renders offline when next show info not available', async () => {
    const {getByText, queryByText} = await render(
      <Helsinki
        liveState={LiveShowsSchema.parse(offline)}
        nowPlaying={initialNowPlaying}
      />,
    );
    expect(queryByText('helsinki is off air.')).toBeNull();
    expect(getByText('Offline')).toBeDefined();
  });
});
