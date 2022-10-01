import React from 'react';
import EpisodeItemContent from '~src/components/episodes/EpisodeItem/EpisodeItemContent';
import {render} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('EpisodeItemContent', () => {
  it('renders', async () => {
    const handlePress = jest.fn();
    const {queryByText, queryByLabelText} = await render(
      <EpisodeItemContent item={episodes[1]} handlePress={handlePress} />,
    );

    expect(queryByText('Anya 2022-09-16')).toBeDefined();
    expect(queryByText('Tallinn')).toBeDefined();
    expect(queryByLabelText('Play on MixCloud')).toBeDefined();
    expect(queryByLabelText('Press to save to favorites')).toBeDefined();
  });
});
