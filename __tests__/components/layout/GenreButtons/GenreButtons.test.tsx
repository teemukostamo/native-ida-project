import React from 'react';
import GenreButtons from '~src/components/layout/GenreButtons';
import {render} from '~__test_helpers__/testUtils';

const genres = [
  {
    name: 'Genre name',
    slug: 'genre-name',
  },
  {
    name: 'Hip Hop',
    slug: 'hip-hop',
  },
];

describe('GenreButtons', () => {
  it('renders', async () => {
    await render(<GenreButtons channel="helsinki" genres={genres} />);
  });
});
