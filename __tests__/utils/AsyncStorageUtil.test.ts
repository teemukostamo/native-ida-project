import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteStorage from '~src/utils/AsyncStorageUtil';

import shows from '../../__test_helpers__/mockdata/shows';
import episodes from '../../__test_helpers__/mockdata/episodes';

describe('FavoritesStorage', () => {
  it('is called with correct key', async () => {
    const key = FavoriteStorage.getKey('bar');
    expect(key).toEqual('favorites:bar');

    await FavoriteStorage.getFavoriteEpisodes();
    expect(AsyncStorage.getItem).toBeCalledWith('favorites:episodes');

    await FavoriteStorage.getFavoriteShows();
    expect(AsyncStorage.getItem).toBeCalledWith('favorites:shows');
  });

  it('adds shows to storage', async () => {
    await FavoriteStorage.addShow(shows[0]);
    expect(AsyncStorage.setItem).toBeCalledWith(
      'favorites:shows',
      JSON.stringify([shows[0]]),
    );

    const addedShows = await FavoriteStorage.getFavoriteShows();

    expect(addedShows.length).toEqual(1);
    expect(addedShows[0].ID).toEqual(shows[0].ID);
  });

  it('adds episodes to storage', async () => {
    await FavoriteStorage.addEpisode(episodes[0]);
    expect(AsyncStorage.setItem).toBeCalledWith(
      'favorites:episodes',
      JSON.stringify([episodes[0]]),
    );

    const addedEpisodes = await FavoriteStorage.getFavoriteEpisodes();

    expect(addedEpisodes.length).toEqual(1);
    expect(addedEpisodes[0].ID).toEqual(episodes[0].ID);
  });

  it('does not add duplicate episodes', async () => {
    await FavoriteStorage.addEpisode(episodes[0]);
    await FavoriteStorage.addEpisode(episodes[0]);

    const addedEpisodes = await FavoriteStorage.getFavoriteEpisodes();

    expect(addedEpisodes.length).toEqual(1);
    expect(addedEpisodes[0].ID).toEqual(episodes[0].ID);
  });

  it('does not add duplicate shows', async () => {
    await FavoriteStorage.addShow(shows[0]);
    await FavoriteStorage.addShow(shows[0]);

    const addedShows = await FavoriteStorage.getFavoriteShows();

    expect(addedShows.length).toEqual(1);
    expect(addedShows[0].ID).toEqual(shows[0].ID);
  });

  it('removes episode', async () => {
    await FavoriteStorage.removeEpisode(episodes[0]);

    const addedEpisodes = await FavoriteStorage.getFavoriteEpisodes();

    expect(addedEpisodes.length).toEqual(0);
  });

  it('removes show', async () => {
    await FavoriteStorage.removeShow(shows[0]);

    const addedShows = await FavoriteStorage.getFavoriteShows();

    expect(addedShows.length).toEqual(0);
  });
});
