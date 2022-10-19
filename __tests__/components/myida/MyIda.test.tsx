import React from 'react';
import MyIdaView from '~src/components/myida';
import {render, fireEvent} from '~__test_helpers__/testUtils';

describe('MyIdaView', () => {
  it('renders', async () => {
    const {getByText} = await render(<MyIdaView />);

    expect(getByText('No favorite episodes added')).toBeDefined();

    const favoriteShowsLink = getByText('Shows');
    fireEvent.press(favoriteShowsLink);
    expect(getByText('No favorite shows added')).toBeDefined();

    const historyLink = getByText('History');
    fireEvent.press(historyLink);
    expect(getByText('No episodes listened to yet')).toBeDefined();

    const episodesLink = getByText('Episodes');
    fireEvent.press(episodesLink);
    expect(getByText('No favorite episodes added')).toBeDefined();
  });
});
