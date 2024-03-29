import AsyncStorage from '@react-native-async-storage/async-storage';
import {ShowItemType} from '~src/schemas/show';
import {EpisodeItemType} from '~src/schemas/episode';

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

  static async addEpisode(episode: EpisodeItemType) {
    const existingEpisodes = await this.getFavoriteEpisodes();

    if (
      !existingEpisodes.some(
        (existingEpisode: EpisodeItemType) => existingEpisode.ID === episode.ID,
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

  static async removeEpisode(episodeToRemove: EpisodeItemType) {
    const existingEpisodes = await this.getFavoriteEpisodes();
    const updatedEpisodes = existingEpisodes.filter(
      (episode: EpisodeItemType) => episode.ID !== episodeToRemove.ID,
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

  static async getPlayHistory() {
    const episodes = await AsyncStorage.getItem(this.getKey('history'));
    return episodes ? JSON.parse(episodes) : [];
  }

  static async addToPlayHistory(episode: EpisodeItemType) {
    const existingEpisodes = await this.getFavoriteEpisodes();
    const updatedEpisodes = [...existingEpisodes, episode];

    await AsyncStorage.setItem(
      this.getKey('history'),
      JSON.stringify(updatedEpisodes),
    );
  }

  static async removeFromPlayHistory(episodeToRemove: EpisodeItemType) {
    const existingEpisodes = await this.getFavoriteEpisodes();
    const updatedEpisodes = existingEpisodes.filter(
      (episode: EpisodeItemType) => episode.ID !== episodeToRemove.ID,
    );

    await AsyncStorage.setItem(
      this.getKey('history'),
      JSON.stringify(updatedEpisodes),
    );
  }

  static clearPlayHistory() {
    AsyncStorage.removeItem(this.getKey('history'));
  }

  static removeFavorites() {
    AsyncStorage.removeItem(this.getKey('episodes'));
    AsyncStorage.removeItem(this.getKey('shows'));
    AsyncStorage.removeItem(this.getKey('history'));
  }
}

export default FavoriteStorage;
