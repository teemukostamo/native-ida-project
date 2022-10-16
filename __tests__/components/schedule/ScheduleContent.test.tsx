import React from 'react';
import ScheduleContent from '~src/components/schedule/ScheduleContent';
import {fireEvent, render} from '~__test_helpers__/testUtils';
import schedule from '~__test_helpers__/mockdata/schedule';

describe('ScheduleContent', () => {
  it('renders ScheduleContent', async () => {
    const handlePress = jest.fn();
    const {getAllByText, getByText} = await render(
      <ScheduleContent fullSchedule={schedule} handlePress={handlePress} />,
    );

    expect(getByText('Tallinn')).toBeDefined();
    expect(getByText('Helsinki')).toBeDefined();

    const mondays = getAllByText('Monday');
    expect(mondays).toHaveLength(2);
    const tuesdays = getAllByText('Tuesday');
    expect(tuesdays).toHaveLength(2);
    const wednesdays = getAllByText('Wednesday');
    expect(wednesdays).toHaveLength(2);
    const thursdays = getAllByText('Thursday');
    expect(thursdays).toHaveLength(2);
    const fridays = getAllByText('Friday');
    expect(fridays).toHaveLength(2);
  });

  it('navigates to a shows view', async () => {
    const handlePress = jest.fn();
    const {getByLabelText, getByText} = await render(
      <ScheduleContent fullSchedule={schedule} handlePress={handlePress} />,
    );

    expect(getByText(schedule.tallinn[0].schedule[0].show_title)).toBeDefined();

    const linkToShow = getByLabelText(
      `Go to ${schedule.tallinn[0].schedule[0].show_title} view`,
    );
    fireEvent.press(linkToShow);

    expect(handlePress).toBeCalledWith(
      schedule.tallinn[0].schedule[0].slug,
      schedule.tallinn[0].schedule[0].show_id,
    );
  });
});
