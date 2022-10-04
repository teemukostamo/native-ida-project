import React from 'react';
import NowPlaying from '~src/components/nowPlaying';
import {render} from '~__test_helpers__/testUtils';

describe('NowPlaying', () => {
  it('renders', async () => {
    await render(<NowPlaying />);
  });
});
