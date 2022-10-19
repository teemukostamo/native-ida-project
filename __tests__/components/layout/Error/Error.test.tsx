import React from 'react';
import Error from '~src/components/layout/Error';
import {render} from '~__test_helpers__/testUtils';

describe('Error', () => {
  it('renders error component', async () => {
    const {getByText} = await render(<Error />);

    expect(getByText('Error')).toBeDefined();
  });
});
