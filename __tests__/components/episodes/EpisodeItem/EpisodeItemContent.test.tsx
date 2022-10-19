import React from 'react';
import EpisodeItemContent from '~src/components/episodes/EpisodeItem/EpisodeItemContent';
import {render} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('EpisodeItemContent', () => {
  it('renders', async () => {
    const handlePress = jest.fn();
    const {getByText, getByLabelText} = await render(
      <EpisodeItemContent item={episodes[1]} handlePress={handlePress} />,
    );

    expect(getByText('Anya')).toBeDefined();
    expect(getByText('16.09.2022')).toBeDefined();
    expect(getByText('TALLINN')).toBeDefined();
    expect(getByLabelText('Play on MixCloud')).toBeDefined();
    expect(getByLabelText('Press to save to favorites')).toBeDefined();
  });

  it('does not render if item has code: not found', async () => {
    const handlePress = jest.fn();
    const {queryByText, queryByLabelText} = await render(
      <EpisodeItemContent
        item={{...episodes[1], code: 'not_found'}}
        handlePress={handlePress}
      />,
    );
    expect(queryByText('Anya')).toBeNull();
    expect(queryByText('TALLINN')).toBeNull();
    expect(queryByLabelText('Play on MixCloud')).toBeNull();
    expect(queryByLabelText('Press to save to favorites')).toBeNull();
  });
});
