import React from 'react';
import FavoriteShows from '~src/components/myida/FavoriteShows';
import {render} from '~__test_helpers__/testUtils';
import shows from '~__test_helpers__/mockdata/shows';

describe('FavoriteShows', () => {
  it('renders all FavoriteShows', async () => {
    const {getAllByTestId} = await render(<FavoriteShows shows={shows} />);

    const showCards = getAllByTestId('show-item-container');
    expect(showCards).toHaveLength(4);
  });
});
