import {
  addFavoriteEpisode,
  addFavoriteShow,
  addToPlayHistory,
  getFavorites,
  removeFavoriteEpisode,
  removeFavoriteShow,
  removeFromPlayHistory,
  clearPlayHistory,
} from '~src/contexts/favorites/actions';
import {
  GET_FAVORITES,
  ADD_SHOW,
  ADD_EPISODE,
  REMOVE_EPISODE,
  REMOVE_SHOW,
  ADD_TO_HISTORY,
  REMOVE_FROM_HISTORY,
  CLEAR_HISTORY,
} from '~src/contexts/favorites/reducer';

import episodes from '~__test_helpers__/mockdata/episodes';
import shows from '~__test_helpers__/mockdata/shows';

describe('favorites actions', () => {
  it('getFavorites', async () => {
    const mockDispatch = jest.fn();
    await getFavorites(mockDispatch);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: GET_FAVORITES,
      data: {
        episodes: [],
        history: [],
        shows: [],
      },
    });
  });

  it('addFavoriteEpisode', async () => {
    const mockDispatch = jest.fn();
    await addFavoriteEpisode(mockDispatch, episodes[0]);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: ADD_EPISODE,
      data: episodes[0],
    });
  });

  it('addToPlayHistory', async () => {
    const mockDispatch = jest.fn();
    await addToPlayHistory(mockDispatch, episodes[0]);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: ADD_TO_HISTORY,
      data: episodes[0],
    });
  });

  it('addFavoriteShow', async () => {
    const mockDispatch = jest.fn();
    await addFavoriteShow(mockDispatch, shows[0]);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: ADD_SHOW,
      data: shows[0],
    });
  });

  it('removeFavoriteEpisode', async () => {
    const mockDispatch = jest.fn();
    await removeFavoriteEpisode(mockDispatch, episodes[0]);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: REMOVE_EPISODE,
      data: episodes[0],
    });
  });

  it('removeFromPlayHistory', async () => {
    const mockDispatch = jest.fn();
    await removeFromPlayHistory(mockDispatch, episodes[0]);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: REMOVE_FROM_HISTORY,
      data: episodes[0],
    });
  });

  it('removeFavoriteShow', async () => {
    const mockDispatch = jest.fn();
    await removeFavoriteShow(mockDispatch, shows[0]);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: REMOVE_SHOW,
      data: shows[0],
    });
  });

  it('clear history', () => {
    const mockDispatch = jest.fn();
    clearPlayHistory(mockDispatch);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: CLEAR_HISTORY,
    });
  });
});
