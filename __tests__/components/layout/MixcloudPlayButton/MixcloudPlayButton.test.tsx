import React from 'react';
import MixcloudPlayButton from '~src/components/layout/MixcloudPlayButton';
import {render} from '~__test_helpers__/testUtils';

import episodes from '~__test_helpers__/mockdata/episodes';

describe('MixcloudPlayButton', () => {
  it('renders', async () => {
    await render(<MixcloudPlayButton item={episodes[0]} />);
  });
});
