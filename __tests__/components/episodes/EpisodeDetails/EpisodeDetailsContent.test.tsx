import React from 'react';
import EpisodeDetailsContent from '~src/components/episodes/EpisodeDetails/EpisodeDetailsContent';
import {render, fireEvent} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('EpisodeDetailsContent', () => {
  it('renders episode details', async () => {
    const onPlayPress = jest.fn();

    const {getByText, getByRole} = await render(
      <EpisodeDetailsContent item={episodes[0]} onPlayPress={onPlayPress} />,
    );

    const playButton = getByRole('button');
    fireEvent.press(playButton);

    expect(onPlayPress).toBeCalledTimes(1);

    expect(getByText('Bisweed 2022-09-16')).toBeDefined();
    expect(getByText('BROKEN BEAT')).toBeDefined();
    expect(getByText('TALLINN')).toBeDefined();
  });
});
