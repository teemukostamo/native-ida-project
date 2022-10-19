import React from 'react';
import LiveView from '~src/components/live';
import {render} from '~__test_helpers__/testUtils';

describe('LiveView', () => {
  it('renders', async () => {
    await render(<LiveView />);
  });
});
