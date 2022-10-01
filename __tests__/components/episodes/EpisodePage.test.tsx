import React from 'react';
import EpisodePage from '~src/components/episodes/index';
import {render} from '~__test_helpers__/testUtils';

describe('EpisodePage', () => {
  it('renders', async () => {
    await render(<EpisodePage />);
  });
});
