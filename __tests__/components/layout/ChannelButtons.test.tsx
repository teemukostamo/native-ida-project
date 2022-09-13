import React from 'react';
import ChannelButtons from '../../../src/components/layout/ChannelButtons';
import {render, fireEvent} from '@testing-library/react-native';

describe('ChannelButtons', () => {
  it('renders channel buttons', () => {
    const {getByText, getByTestId} = render(<ChannelButtons />);

    expect(getByText('HELSINKI')).toBeDefined();
    expect(getByText('ALL')).toBeDefined();
    expect(getByText('TALLINN')).toBeDefined();

    fireEvent.press(getByTestId('channel-all-btn'));
    fireEvent.press(getByTestId('channel-tallinn-btn'));
    fireEvent.press(getByTestId('channel-helsinki-btn'));
  });
});
