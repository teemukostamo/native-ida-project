/**
 * @jest-environment jsdom
 */

import React from 'react';
import EpisodeView from '~src/components/episodes/index';
import {render} from '~__test_helpers__/testUtils';

describe('EpisodeView', () => {
  it('renders', async () => {
    await render(<EpisodeView />);
  });
});
