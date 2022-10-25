/**
 * @jest-environment jsdom
 */

import React from 'react';
import ExploreEpisodes from '~src/components/explore/ExploreEpisodes';
import {render} from '~__test_helpers__/testUtils';

describe('ExploreEpisodes', () => {
  it('renders', async () => {
    await render(<ExploreEpisodes />);
  });
});
