import React from 'react';
import Filters from '~src/components/layout/Filters';
import {render} from '~__test_helpers__/testUtils';

describe('Filters', () => {
  it('renders', async () => {
    await render(<Filters />);
  });
});
