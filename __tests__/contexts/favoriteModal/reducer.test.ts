import {
  favoriteModalReducer,
  initialFavoriteModalState,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '~src/contexts/favoriteModal/reducer';

import episodes from '~__test_helpers__/mockdata/episodes';
import shows from '~__test_helpers__/mockdata/shows';

describe('favoriteModal reducer', () => {
  it('opens favorite modal on an episode', () => {
    const state = favoriteModalReducer(initialFavoriteModalState, {
      type: OPEN_MODAL,
      data: {
        item: episodes[0],
        isOpen: true,
      },
    });

    expect(state).toEqual({item: episodes[0], isOpen: true});
  });

  it('opens favorite modal on a show', () => {
    const state = favoriteModalReducer(initialFavoriteModalState, {
      type: OPEN_MODAL,
      data: {
        item: shows[0],
        isOpen: true,
      },
    });

    expect(state).toEqual({item: shows[0], isOpen: true});
  });

  it('closes modal', () => {
    const state = favoriteModalReducer(
      {item: shows[0], isOpen: true},
      {
        type: CLOSE_MODAL,
      },
    );

    expect(state).toEqual({item: null, isOpen: false});
  });
});
