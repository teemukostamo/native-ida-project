import React from 'react';
import SearchBar from '~src/components/layout/SearchBar';
import {render} from '~__test_helpers__/testUtils';

describe('SearchBar', () => {
  it('renders', async () => {
    await render(<SearchBar />);
  });
});
