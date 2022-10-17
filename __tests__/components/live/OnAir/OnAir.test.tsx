import React from 'react';
import OnAir from '~src/components/live/OnAir';
import {render} from '~__test_helpers__/testUtils';

import {initialNowPlaying} from '~src/contexts/nowPlaying/reducer';
import {onAir} from '~__test_helpers__/mockdata/live';

describe('OnAir', () => {
  it('renders', async () => {
    const {getByText} = await render(
      <OnAir
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
    expect(getByText('HELSINKI')).toBeDefined();
    expect(getByText('HIP HOP')).toBeDefined();
    expect(getByText('METAL')).toBeDefined();
    expect(getByText('Chuck Main, Double M, Sammy Jam')).toBeDefined();
    expect(getByText('So Damn Tuff')).toBeDefined();
  });

  it('renders null if liveshow is false', async () => {
    const {queryByText} = await render(
      <OnAir
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
        liveShow={false}
        nowPlaying={initialNowPlaying}
      />,
    );
    expect(queryByText('HELSINKI')).toBeNull();
    expect(queryByText('HIP HOP')).toBeNull();
    expect(queryByText('METAL')).toBeNull();
  });
});
