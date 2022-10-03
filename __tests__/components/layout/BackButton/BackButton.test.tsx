import React from 'react';
import BackButton from '~src/components/layout/BackButton';
import {render} from '~__test_helpers__/testUtils';

describe('BackButton', () => {
  it('renders', async () => {
    await render(<BackButton />);
  });
});
