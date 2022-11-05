/**
 * @jest-environment jsdom
 */

import React from 'react';
import ShowView from '~src/components/shows/';
import {render} from '~__test_helpers__/testUtils';
// import 'whatwg-fetch';

describe('ShowView', () => {
  it('renders', async () => {
    await render(<ShowView />);
  });
});
