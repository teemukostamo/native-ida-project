import React from 'react';
import Loading from '~src/components/layout/Loading';
import {render} from '~__test_helpers__/testUtils';

describe('Loading', () => {
  it('renders', async () => {
    await render(<Loading />);
  });
});
