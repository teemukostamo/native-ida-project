import React from 'react';
import Tallinn from '~src/components/live/Tallinn';
import {render} from '~__test_helpers__/testUtils';

import {initialNowPlaying} from '~src/contexts/nowPlaying/reducer';
import {offAir, offline} from '~__test_helpers__/mockdata/live';
import {LiveShows} from '~src/contexts/live/types';

describe('Tallinn', () => {
  it('renders offair view', async () => {
    const {getByText} = await render(
      <Tallinn
        liveState={offAir as LiveShows}
        nowPlaying={initialNowPlaying}
      />,
    );
    expect(getByText('tallinn is off air.')).toBeDefined();
    expect(getByText('Up next is RHYTHM DOCTOR´S WAITING ROOM')).toBeDefined();
    expect(getByText('at 2022-09-19 11:00:00')).toBeDefined();
  });

  it('renders offline when next show info not available', async () => {
    const {getByText, queryByText} = await render(
      <Tallinn
        liveState={offline as LiveShows}
        nowPlaying={initialNowPlaying}
      />,
    );
    expect(queryByText('tallinn is off air.')).toBeNull();
    expect(getByText('Offline')).toBeDefined();
  });
});
