import React from 'react';
import FavoriteEpisodes from '~src/components/myida/FavoriteEpisodes';
import {render} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('FavoriteEpisodes', () => {
  it('renders all favoriteEpisodes', async () => {
    const {getAllByLabelText} = await render(
      <FavoriteEpisodes episodes={episodes} />,
    );

    const playButtons = getAllByLabelText('Play on MixCloud');
    expect(playButtons).toHaveLength(6);
  });
});
