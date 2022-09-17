import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShowItemType} from '../contexts/shows/types';
import {LatestEpisode} from '../contexts/latest/types';

class FavoriteStorage {
  static namespace: string = 'favorites';

  static getKey(key: string) {
    return `${this.namespace}:${key}`;
  }

  static async getFavoriteEpisodes() {
    const episodes = await AsyncStorage.getItem(this.getKey('episodes'));
    return episodes ? JSON.parse(episodes) : [];
  }
  static async getFavoriteShows() {
    const shows = await AsyncStorage.getItem(this.getKey('shows'));

    return shows ? JSON.parse(shows) : [];
  }

  static async addEpisode(episode: LatestEpisode) {
    const existingEpisodes = await this.getFavoriteEpisodes();

    if (
      !existingEpisodes.some(
        (existingEpisode: LatestEpisode) => existingEpisode.ID === episode.ID,
      )
    ) {
      const updatedEpisodes = [...existingEpisodes, episode];

      await AsyncStorage.setItem(
        this.getKey('episodes'),
        JSON.stringify(updatedEpisodes),
      );
    }
  }

  static async addShow(show: ShowItemType) {
    const existingShows = await this.getFavoriteShows();

    if (
      !existingShows.some(
        (existingShow: ShowItemType) => existingShow?.ID === show?.ID,
      )
    ) {
      const updatedShows = [...existingShows, show];

      await AsyncStorage.setItem(
        this.getKey('shows'),
        JSON.stringify(updatedShows),
      );
    }
  }

  static async removeEpisode(episodeToRemove: LatestEpisode) {
    const existingEpisodes = await this.getFavoriteEpisodes();
    const updatedEpisodes = existingEpisodes.filter(
      (episode: LatestEpisode) => episode.ID !== episodeToRemove.ID,
    );

    await AsyncStorage.setItem(
      this.getKey('episodes'),
      JSON.stringify(updatedEpisodes),
    );
  }

  static async removeShow(showToRemove: ShowItemType) {
    const existingShows = await this.getFavoriteShows();
    const updatedShows = existingShows.filter(
      (show: ShowItemType) => show?.ID !== showToRemove?.ID,
    );

    await AsyncStorage.setItem(
      this.getKey('shows'),
      JSON.stringify(updatedShows),
    );
  }

  static removeFavorites() {
    AsyncStorage.removeItem(this.getKey('episodes'));
    AsyncStorage.removeItem(this.getKey('shows'));
  }
}

export default FavoriteStorage;
