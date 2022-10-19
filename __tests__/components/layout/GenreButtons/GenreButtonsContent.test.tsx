import React from 'react';
import GenreButtonsContent from '~src/components/layout/GenreButtons/GenreButtonsContent';
import {render, fireEvent} from '~__test_helpers__/testUtils';

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
    const setChannel = jest.fn();
    const setGenre = jest.fn();

    const {getByText} = await render(
      <GenreButtonsContent
        setChannel={setChannel}
        setGenre={setGenre}
        channel="helsinki"
        genres={genres}
      />,
    );

    const channelBtn = getByText('HELSINKI');
    fireEvent.press(channelBtn);

    expect(setChannel).toBeCalledTimes(1);
    expect(setChannel).toBeCalledWith('helsinki');

    const genre1Btn = getByText('HIP HOP');
    const genre2Btn = getByText('GENRE NAME');

    fireEvent.press(genre1Btn);
    expect(setGenre).toBeCalledWith(genres[1].name, genres[1].slug);

    fireEvent.press(genre2Btn);
    expect(setGenre).toBeCalledWith(genres[0].name, genres[0].slug);

    expect(setGenre).toBeCalledTimes(2);
  });
});
