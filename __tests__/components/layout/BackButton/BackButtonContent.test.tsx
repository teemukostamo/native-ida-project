import React from 'react';
import BackButtonContent from '~src/components/layout/BackButton/BackButtonContent';
import {render, fireEvent} from '~__test_helpers__/testUtils';

describe('BackButtonContent', () => {
  it('renders', async () => {
    const onNavigate = jest.fn();

    const {getByLabelText} = await render(
      <BackButtonContent onNavigate={onNavigate} />,
    );

    const backButton = getByLabelText('Go back');

    fireEvent.press(backButton);

    expect(onNavigate).toBeCalled();
  });
});
