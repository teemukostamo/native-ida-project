import React from 'react';
import Error from '../../../src/components/layout/Error';
import {render} from '../../../testUtils';

describe('Error', () => {
  it('renders error component', () => {
    const {getByText} = render(<Error />);

    expect(getByText('Error')).toBeDefined();
  });
});
