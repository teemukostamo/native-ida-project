import {
  fullScheduleReducer,
  FETCH_FULL_SCHEDULE,
} from '~src/contexts/schedule/reducer';
import schedule from '~__test_helpers__/mockdata/schedule';

describe('schdule reducer', () => {
  it('updates state with fetched schedule', () => {
    const state = fullScheduleReducer(null, {
      type: FETCH_FULL_SCHEDULE,
      data: schedule,
    });

    expect(state).toEqual(schedule);
  });
});
