import React from 'react';
import FavoriteModalTriggerContent from '~src/components/layout/FavoriteModalTrigger/FavoriteModalTriggerContent';
import {render, fireEvent} from '~__test_helpers__/testUtils';

describe('FavoriteModalTriggerContent', () => {
  it('renders', async () => {
    const handlePress = jest.fn();
    const {getByLabelText} = await render(
      <FavoriteModalTriggerContent
        handlePress={handlePress}
        channel="helsinki"
      />,
    );

    const triggerBtn = getByLabelText('Press to save to favorites');
    expect(triggerBtn).toBeDefined();
    fireEvent.press(triggerBtn);

    expect(handlePress).toBeCalled();
  });
});
