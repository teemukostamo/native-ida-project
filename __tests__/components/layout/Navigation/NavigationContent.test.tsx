import React from 'react';
import NavigationContent from '~src/components/layout/Navigation/NavigationContent';
import {fireEvent, render} from '~__test_helpers__/testUtils';

describe('NavigationContent', () => {
  it('renders', async () => {
    const onNavigate = jest.fn();
    const {getByLabelText} = await render(
      <NavigationContent viewName="viewName" onNavigate={onNavigate} />,
    );

    const liveBtn = getByLabelText('Navigate to live');
    fireEvent.press(liveBtn);
    expect(onNavigate).toBeCalledWith('/');

    const scheduleBtn = getByLabelText('Navigate to schedule');
    fireEvent.press(scheduleBtn);
    expect(onNavigate).toBeCalledWith('/schedule');

    const exploreBtn = getByLabelText('Navigate to explore');
    fireEvent.press(exploreBtn);
    expect(onNavigate).toBeCalledWith('/episodes');

    const myIdaBtn = getByLabelText('Navigate to my ida');
    fireEvent.press(myIdaBtn);
    expect(onNavigate).toBeCalledWith('/myida');
  });
});
