import {
  favoritesReducer,
  initialFavoritesState,
  GET_FAVORITES,
  ADD_EPISODE,
  ADD_SHOW,
  ADD_TO_HISTORY,
  REMOVE_EPISODE,
  REMOVE_FROM_HISTORY,
  REMOVE_SHOW,
  CLEAR_HISTORY,
} from '~src/contexts/favorites/reducer';

import episodes from '~__test_helpers__/mockdata/episodes';
import shows from '~__test_helpers__/mockdata/shows';

describe('favorites reducer', () => {
  it('gets favorites to state', () => {
    const state = favoritesReducer(initialFavoritesState, {
      type: GET_FAVORITES,
      data: {
        shows,
        episodes,
        history: episodes,
      },
    });

    expect(state).toEqual({
      shows,
      episodes,
      history: episodes,
    });
  });

  it('adds an episode', () => {
    const state = favoritesReducer(initialFavoritesState, {
      type: ADD_EPISODE,
      data: episodes[0],
    });

    expect(state.episodes).toEqual([episodes[0]]);
    expect(state.shows).toEqual([]);
    expect(state.history).toEqual([]);
  });

  it('adds a show', () => {
    const state = favoritesReducer(initialFavoritesState, {
      type: ADD_SHOW,
      data: shows[0],
    });

    expect(state.shows).toEqual([shows[0]]);
    expect(state.episodes).toEqual([]);
    expect(state.history).toEqual([]);
  });

  it('adds to history', () => {
    const state = favoritesReducer(initialFavoritesState, {
      type: ADD_TO_HISTORY,
      data: episodes[0],
    });

    expect(state.episodes).toEqual([]);
    expect(state.shows).toEqual([]);
    expect(state.history).toEqual([episodes[0]]);
  });

  it('removes episode from favorites', () => {
    const state = favoritesReducer(
      {shows: [], history: [], episodes: [episodes[0], episodes[1]]},
      {
        type: REMOVE_EPISODE,
        data: episodes[0],
      },
    );

    expect(state.episodes).toEqual([episodes[1]]);
    expect(state.shows).toEqual([]);
    expect(state.history).toEqual([]);
  });

  it('removes show from favorites', () => {
    const state = favoritesReducer(
      {shows: [shows[0], shows[1]], history: [], episodes: []},
      {
        type: REMOVE_SHOW,
        data: shows[0],
      },
    );

    expect(state.episodes).toEqual([]);
    expect(state.shows).toEqual([shows[1]]);
    expect(state.history).toEqual([]);
  });

  it('removes episode from history', () => {
    const state = favoritesReducer(
      {shows: [], history: [episodes[0], episodes[1]], episodes: []},
      {
        type: REMOVE_FROM_HISTORY,
        data: episodes[0],
      },
    );

    expect(state.episodes).toEqual([]);
    expect(state.shows).toEqual([]);
    expect(state.history).toEqual([episodes[1]]);
  });

  it('clears history', () => {
    const state = favoritesReducer(
      {shows: [], history: episodes, episodes: []},
      {
        type: CLEAR_HISTORY,
      },
    );

    expect(state.episodes).toEqual([]);
    expect(state.shows).toEqual([]);
    expect(state.history).toEqual([]);
  });
});
