import React from 'react';
import ChannelButtonsContent from '../../../../src/components/layout/ChannelButtons/ChannelButtonsContent';
import {render, fireEvent} from '../../../../__test_helpers__/testUtils';

describe('ChannelButtons', () => {
  it('renders channel buttons', () => {
    const handleChange = jest.fn();
    const {getByText, getByTestId} = render(
      <ChannelButtonsContent channel="all" handleChange={handleChange} />,
    );

    expect(getByText('HELSINKI')).toBeDefined();
    expect(getByText('ALL')).toBeDefined();
    expect(getByText('TALLINN')).toBeDefined();

    fireEvent.press(getByTestId('channel-all-btn'));
    expect(handleChange).toBeCalledWith('all');
    expect(handleChange).toBeCalled();

    fireEvent.press(getByTestId('channel-tallinn-btn'));
    expect(handleChange).toBeCalledWith('tallinn');
    expect(handleChange).toBeCalled();

    fireEvent.press(getByTestId('channel-helsinki-btn'));
    expect(handleChange).toBeCalledWith('helsinki');
    expect(handleChange).toBeCalled();

    expect(handleChange).toBeCalledTimes(3);
  });
});
