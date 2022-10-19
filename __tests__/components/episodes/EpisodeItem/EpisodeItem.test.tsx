import React from 'react';
import EpisodeItem from '~src/components/episodes/EpisodeItem';
import {render} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('EpisodeItem', () => {
  it('renders', async () => {
    await render(<EpisodeItem item={episodes[1]} />);
  });
});
