import React from 'react';
import TopBar from '~src/components/layout/TopBar';
import {render} from '~__test_helpers__/testUtils';

describe('TopBar', () => {
  it('renders', async () => {
    const {getByText} = await render(<TopBar />);
    expect(getByText('IDA')).toBeDefined();
  });
});
