import React from 'react';
import FavoriteModal from '~src/components/layout/FavoriteModal';
import {render} from '~__test_helpers__/testUtils';

describe('FavoriteModal', () => {
  it('renders', async () => {
    await render(<FavoriteModal />);
  });
});
