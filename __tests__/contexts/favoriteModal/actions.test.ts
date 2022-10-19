import {closeModal, openModal} from '~src/contexts/favoriteModal/actions';
import {CLOSE_MODAL, OPEN_MODAL} from '~src/contexts/favoriteModal/reducer';
import episodes from '~__test_helpers__/mockdata/episodes';

describe('favoriteModal actions', () => {
  it('closeModal', () => {
    const mockDispatch = jest.fn();
    closeModal(mockDispatch);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: CLOSE_MODAL,
    });
  });

  it('open modal', () => {
    const mockDispatch = jest.fn();
    const mockData = {
      isOpen: true,
      item: episodes[0],
    };
    openModal(mockDispatch, mockData);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: OPEN_MODAL,
      data: mockData,
    });
  });
});
