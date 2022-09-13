import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  FavoriteEpisodeType,
  FavoriteShowType,
} from '../contexts/favorites/types';

class FavoriteStorage {
  static namespace: string;

  constructor(namespace = 'favorites') {
    FavoriteStorage.namespace = namespace;
  }

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

  static async addEpisode(episode: FavoriteEpisodeType) {
    const existingEpisodes = await this.getFavoriteEpisodes();
    const updatedEpisodes = [...existingEpisodes, episode];

    await AsyncStorage.setItem(
      this.getKey('episodes'),
      JSON.stringify(updatedEpisodes),
    );
  }

  static async addShow(show: FavoriteShowType) {
    const existingShows = await this.getFavoriteShows();
    const updatedShows = [...existingShows, show];

    await AsyncStorage.setItem(
      this.getKey('shows'),
      JSON.stringify(updatedShows),
    );
  }

  static async removeEpisode(episodeToRemove: FavoriteEpisodeType) {
    const existingEpisodes = await this.getFavoriteEpisodes();
    const updatedEpisodes = existingEpisodes.filter(
      (episode: FavoriteEpisodeType) =>
        episode.episode_id !== episodeToRemove.episode_id,
    );

    await AsyncStorage.setItem(
      this.getKey('episodes'),
      JSON.stringify(updatedEpisodes),
    );
  }

  static async removeShow(showToRemove: FavoriteShowType) {
    const existingShows = await this.getFavoriteShows();
    const updatedShows = existingShows.filter(
      (show: FavoriteShowType) => show.show_id !== showToRemove.show_id,
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
