import React from 'react';
import EpisodeDetails from '~src/components/episodes/EpisodeDetails';
import {render} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('EpisodeDetails', () => {
  it('renders', async () => {
    await render(<EpisodeDetails item={episodes[0]} />);
  });
});
