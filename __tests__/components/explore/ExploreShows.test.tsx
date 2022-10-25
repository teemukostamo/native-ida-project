/**
 * @jest-environment jsdom
 */

import React from 'react';
import ExploreShows from '~src/components/explore/ExploreShows';
import {render} from '~__test_helpers__/testUtils';

describe('ExploreShows', () => {
  it('renders', async () => {
    await render(<ExploreShows />);
  });
});
