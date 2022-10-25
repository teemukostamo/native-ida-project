import React from 'react';
import App from '~src/App';
import {render} from '@testing-library/react-native';

describe('App', () => {
  it('renders', async () => {
    const {findByText} = render(<App />);

    const liveNavigation = await findByText('Live');
    const exploreNavigation = await findByText('Explore');
    const myIdaNavigation = await findByText('My Ida');
    const scheduleNavigation = await findByText('Schedule');

    expect(liveNavigation).toBeDefined();
    expect(exploreNavigation).toBeDefined();
    expect(myIdaNavigation).toBeDefined();
    expect(scheduleNavigation).toBeDefined();
  });
});
