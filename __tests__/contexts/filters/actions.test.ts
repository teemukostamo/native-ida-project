import {
  setChannel,
  setGenre,
  setSearchQuery,
  clearFilters,
} from '~src/contexts/filters/actions';
import {
  SET_CHANNEL,
  SET_GENRE,
  SET_SEARCH_QUERY,
  CLEAR_FILTERS,
} from '~src/contexts/filters/reducer';

describe('filter actions', () => {
  it('setChannel', () => {
    const mockDispatch = jest.fn();
    setChannel(mockDispatch, 'helsinki');

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: SET_CHANNEL,
      data: 'helsinki',
    });
  });

  it('setGenre', () => {
    const mockDispatch = jest.fn();
    setGenre(mockDispatch, 'Techno', 'techno');

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: SET_GENRE,
      data: {
        label: 'Techno',
        value: 'techno',
      },
    });
  });

  it('setSearchQuery', () => {
    const mockDispatch = jest.fn();
    setSearchQuery(mockDispatch, 'Some show');

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: SET_SEARCH_QUERY,
      data: 'Some show',
    });
  });

  it('clearFilters', () => {
    const mockDispatch = jest.fn();
    clearFilters(mockDispatch);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: CLEAR_FILTERS,
    });
  });
});
