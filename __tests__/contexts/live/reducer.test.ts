import {FETCH_LIVE_SHOWS, liveShowsReducer} from '~src/contexts/live/reducer';
import {LiveShows} from '~src/contexts/live/types';
import {onAir, offAir, offline} from '~__test_helpers__/mockdata/live';

describe('live reducer', () => {
  it('sets onair state', () => {
    const state = liveShowsReducer(null, {
      type: FETCH_LIVE_SHOWS,
      data: onAir as LiveShows,
    });

    expect(state).toEqual(onAir);
  });

  it('sets offair state', () => {
    const state = liveShowsReducer(null, {
      type: FETCH_LIVE_SHOWS,
      data: offAir as LiveShows,
    });

    expect(state).toEqual(offAir);
  });

  it('sets offline state', () => {
    const state = liveShowsReducer(null, {
      type: FETCH_LIVE_SHOWS,
      data: offline as LiveShows,
    });

    expect(state).toEqual(offline);
  });
});
