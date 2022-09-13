import AsyncStorage from '@react-native-async-storage/async-storage';
import FavoriteStorage from '../../src/utils/AsyncStorageUtil';

describe('FavoritesStorage', () => {
  it('checks if Async Storage is used', async () => {
    const test = FavoriteStorage.getKey('bar');
    expect(test).toEqual('favorites:bar');

    await FavoriteStorage.getFavoriteEpisodes();
    expect(AsyncStorage.getItem).toBeCalledWith('favorites:episodes');

    await FavoriteStorage.getFavoriteShows();
    expect(AsyncStorage.getItem).toBeCalledWith('favorites:shows');
  });
});
