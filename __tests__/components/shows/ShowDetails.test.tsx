import React from 'react';
import ShowDetails from '~src/components/shows/ShowDetails';
import {render} from '~__test_helpers__/testUtils';

describe('ShowDetails', () => {
  it('renders ShowDetails', async () => {
    const {getByText} = await render(
      <ShowDetails
        title="Show title"
        channel="helsinki"
        description="Show description"
      />,
    );

    expect(getByText('Show title')).toBeDefined();
    expect(getByText('Show description')).toBeDefined();
  });
});
