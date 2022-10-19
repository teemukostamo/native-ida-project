import React from 'react';
import ExploreViewSelector from '~src/components/layout/ExploreViewSelector';
import {render} from '~__test_helpers__/testUtils';

describe('ExploreViewSelector', () => {
  it('renders', async () => {
    await render(<ExploreViewSelector />);
  });
});
