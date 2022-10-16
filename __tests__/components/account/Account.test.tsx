import React from 'react';
import Account from '~src/components/account';

import {render} from '~__test_helpers__/testUtils';

describe('About', () => {
  it('has account view links', async () => {
    const {getByText} = await render(<Account />);
    expect(getByText('LOGIN')).toBeDefined();
    expect(getByText('ABOUT')).toBeDefined();
    expect(getByText('SUPPORT')).toBeDefined();
    expect(getByText('SETTINGS')).toBeDefined();
  });
});
