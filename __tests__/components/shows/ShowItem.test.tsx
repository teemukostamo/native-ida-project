import React from 'react';
import ShowItem from '~src/components/shows/ShowItem';
import {render} from '~__test_helpers__/testUtils';

import shows from '~__test_helpers__/mockdata/shows';

describe('ShowItem', () => {
  it('renders ShowItem', async () => {
    const {getByText} = await render(<ShowItem item={shows[0]} />);

    expect(getByText(shows[0].title)).toBeDefined();
    expect(
      getByText(shows[0].taxonomies.channel[0].slug.toUpperCase()),
    ).toBeDefined();
  });
});
