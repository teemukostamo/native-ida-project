import React from 'react';
import Schedule from '~src/components/schedule';
import {render} from '~__test_helpers__/testUtils';

describe('Schedule', () => {
  it('renders', async () => {
    await render(<Schedule />);
  });
});
