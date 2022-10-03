import React from 'react';
import FavoriteModalTrigger from '~src/components/layout/FavoriteModalTrigger';
import {render} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';
import shows from '~__test_helpers__/mockdata/shows';

describe('FavoriteModalTrigger', () => {
  it('renders with an episode', async () => {
    await render(<FavoriteModalTrigger item={episodes[3]} />);
  });
  it('renders with a show', async () => {
    await render(<FavoriteModalTrigger item={shows[0]} />);
  });
});
