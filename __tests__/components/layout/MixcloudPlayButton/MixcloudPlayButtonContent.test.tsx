import React from 'react';
import MixcloudPlayButtonContent from '~src/components/layout/MixcloudPlayButton/MixcloudPlayButtonContent';
import {fireEvent, render} from '~__test_helpers__/testUtils';

describe('MixcloudPlayButtonContent', () => {
  it('can press play', async () => {
    const onPlayPress = jest.fn();
    const {getByLabelText} = await render(
      <MixcloudPlayButtonContent
        channel="helsinki"
        onPlayPress={onPlayPress}
      />,
    );

    const playButton = getByLabelText('Play on MixCloud');
    fireEvent.press(playButton);

    expect(onPlayPress).toBeCalled();
  });
});
