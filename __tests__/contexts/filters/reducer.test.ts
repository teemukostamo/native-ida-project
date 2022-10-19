import {
  filtersReducer,
  initialFiltersState,
  SET_CHANNEL,
  SET_GENRE,
  SET_SEARCH_QUERY,
  CLEAR_FILTERS,
} from '~src/contexts/filters/reducer';

describe('filters reducer', () => {
  it('sets channel filter', () => {
    const state = filtersReducer(initialFiltersState, {
      type: SET_CHANNEL,
      data: 'helsinki',
    });

    expect(state.channel).toEqual('helsinki');
  });

  it('sets genre filter', () => {
    const state = filtersReducer(initialFiltersState, {
      type: SET_GENRE,
      data: {
        label: 'Some Genre',
        value: 'some-genre',
      },
    });

    expect(state.genre).toEqual({
      label: 'Some Genre',
      value: 'some-genre',
    });
  });

  it('sets search query filter', () => {
    const state = filtersReducer(initialFiltersState, {
      type: SET_SEARCH_QUERY,
      data: 'some query',
    });

    expect(state.searchQuery).toEqual('some query');
  });

  it('clears filters', () => {
    filtersReducer(initialFiltersState, {
      type: SET_SEARCH_QUERY,
      data: 'some query',
    });
    filtersReducer(initialFiltersState, {
      type: SET_GENRE,
      data: {
        label: 'Some Genre',
        value: 'some-genre',
      },
    });
    filtersReducer(initialFiltersState, {
      type: SET_CHANNEL,
      data: 'helsinki',
    });
    const state = filtersReducer(initialFiltersState, {
      type: CLEAR_FILTERS,
    });

    expect(state).toEqual(initialFiltersState);
  });
});
