export interface NowPlayingState {
  showNowPlayingBar: boolean;
  nowPlaying: boolean;
  streamType: string | null; // tallinn helsinki mixcloud
  studio: string | null;
  show_title: string | null;
  artist: string | null;
}
