import React from 'react';
import GenreDropdown from '~src/components/layout/GenreDropdown';
import {render} from '~__test_helpers__/testUtils';

describe('GenreDropdown', () => {
  it('renders', async () => {
    await render(<GenreDropdown />);
  });
});
