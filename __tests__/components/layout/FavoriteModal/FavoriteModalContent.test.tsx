import React from 'react';
import FavoriteModalContent from '~src/components/layout/FavoriteModal/FavoriteModalContent';
import {render, fireEvent} from '../../../../__test_helpers__/testUtils';

describe('FavoriteModalContent', () => {
  it('renders links to favorite episode and show', () => {
    const handleShow = jest.fn();
    const handleEpisode = jest.fn();

    const {getByText} = render(
      <FavoriteModalContent
        pathName="/episodes"
        showIsFavorite={false}
        episodeIsFavorite={false}
        handleEpisode={handleEpisode}
        handleShow={handleShow}
      />,
    );

    expect(getByText('Save Episode')).toBeDefined();
    expect(getByText('Favorite show')).toBeDefined();
    expect(getByText('Share')).toBeDefined();
    expect(getByText('More From Host')).toBeDefined();

    fireEvent.press(getByText('Save Episode'));
    fireEvent.press(getByText('Favorite show'));

    expect(handleEpisode).toHaveBeenCalledTimes(1);
    expect(handleShow).toHaveBeenCalledTimes(1);
  });

  it('does not render episode link when item is show', () => {
    const handleShow = jest.fn();
    const handleEpisode = jest.fn();

    const {getByText, queryByText} = render(
      <FavoriteModalContent
        pathName="/shows"
        showIsFavorite={false}
        episodeIsFavorite={false}
        handleEpisode={handleEpisode}
        handleShow={handleShow}
      />,
    );

    expect(queryByText('Favorite show')).toBeDefined();
    expect(queryByText('Share')).toBeDefined();
    expect(queryByText('save-episode-link')).toBeNull();
    expect(queryByText('more-from-host-link')).toBeNull();

    fireEvent.press(getByText('Favorite show'));

    expect(handleShow).toHaveBeenCalledTimes(1);
  });

  it('unfavorites episode if episode is already a favorite', () => {
    const handleShow = jest.fn();
    const handleEpisode = jest.fn();

    const {getByText, queryByText} = render(
      <FavoriteModalContent
        pathName="/episodes"
        showIsFavorite={false}
        episodeIsFavorite={true}
        handleEpisode={handleEpisode}
        handleShow={handleShow}
      />,
    );

    expect(getByText('Remove saved episode')).toBeDefined();
    expect(queryByText('Save Episode')).toBeNull();
    expect(getByText('Favorite show')).toBeDefined();
    expect(getByText('Share')).toBeDefined();
    expect(getByText('More From Host')).toBeDefined();

    fireEvent.press(getByText('Remove saved episode'));

    expect(handleEpisode).toHaveBeenCalledTimes(1);
  });

  it('unfavorite show is show is already favorite', () => {
    const handleShow = jest.fn();
    const handleEpisode = jest.fn();

    const {getByText, queryByText} = render(
      <FavoriteModalContent
        pathName="/shows"
        showIsFavorite={true}
        episodeIsFavorite={false}
        handleEpisode={handleEpisode}
        handleShow={handleShow}
      />,
    );

    expect(queryByText('Favorite show')).toBeNull();
    expect(getByText('Unfavorite show')).toBeDefined();
    expect(queryByText('Share')).toBeDefined();
    expect(queryByText('save-episode-link')).toBeNull();
    expect(queryByText('more-from-host-link')).toBeNull();

    fireEvent.press(getByText('Unfavorite show'));

    expect(handleShow).toHaveBeenCalledTimes(1);
  });
});
