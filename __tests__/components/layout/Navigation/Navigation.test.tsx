import React from 'react';
import Navigation from '~src/components/layout/Navigation';
import {render} from '~__test_helpers__/testUtils';

describe('Navigation', () => {
  it('renders', async () => {
    await render(<Navigation />);
  });
});
