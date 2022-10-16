import React from 'react';
import PlayHistory from '~src/components/myida/PlayHistory';
import {render} from '~__test_helpers__/testUtils';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('PlayHistory', () => {
  it('renders all PlayHistory items', async () => {
    const {getAllByLabelText} = await render(
      <PlayHistory episodes={episodes} />,
    );

    const playButtons = getAllByLabelText('Play on MixCloud');
    expect(playButtons).toHaveLength(6);
  });
});
