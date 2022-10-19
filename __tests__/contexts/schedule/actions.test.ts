import {getFullSchedule} from '~src/contexts/schedule/actions';
import {FETCH_FULL_SCHEDULE} from '~src/contexts/schedule/reducer';
import * as scheduleService from '~src/contexts/schedule/services';
import schedule from '~__test_helpers__/mockdata/schedule';

describe('schedule actions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('getFullSchedule', async () => {
    const mockDispatch = jest.fn();
    const spyFetchFullSchedule = jest
      .spyOn(scheduleService, 'fetchFullSchedule')
      .mockResolvedValue(schedule);

    await getFullSchedule(mockDispatch);

    expect(spyFetchFullSchedule).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: FETCH_FULL_SCHEDULE,
      data: schedule,
    });
  });
});
