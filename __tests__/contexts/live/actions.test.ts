import {FETCH_LIVE_SHOWS} from '~src/contexts/live/reducer';
import {getLiveShows} from '~src/contexts/live/actions';
import * as liveService from '~src/contexts/live/services';
import {onAir} from '~__test_helpers__/mockdata/live';

describe('live actions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('getLiveShows', async () => {
    const mockDispatch = jest.fn();
    const spyFetchFullSchedule = jest
      .spyOn(liveService, 'fetchLiveShows')
      .mockResolvedValue(onAir);

    await getLiveShows(mockDispatch);

    expect(spyFetchFullSchedule).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: FETCH_LIVE_SHOWS,
      data: onAir,
    });
  });
});
