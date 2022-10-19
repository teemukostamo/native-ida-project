import React from 'react';
import AboutView from '~src/components/about';
import {render} from '~__test_helpers__/testUtils';

describe('AboutView', () => {
  it('renders', async () => {
    await render(<AboutView />);
  });
});
