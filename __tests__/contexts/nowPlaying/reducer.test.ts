import {
  nowPlayingReducer,
  initialNowPlaying,
  PLAY_HELSINKI,
  PLAY_MIXCLOUD,
  PLAY_TALLINN,
  UPDATE_NOW_PLAYING,
  STOP,
  CLOSE_NOW_PLAYING,
} from '~src/contexts/nowPlaying/reducer';

const playState = {
  artist: 'some artist',
  show_title: 'some title',
  mixcloud: null,
  image: 'www.image.com',
};

describe('now playing reducer', () => {
  it('sets play helsinki state', () => {
    const state = nowPlayingReducer(initialNowPlaying, {
      type: PLAY_HELSINKI,
      data: {
        ...playState,
        studio: 'helsinki',
      },
    });

    expect(state).toEqual({
      ...playState,
      studio: 'helsinki',
      nowPlaying: true,
      showNowPlayingBar: true,
      streamType: 'live',
    });
  });

  it('sets play tallinn state', () => {
    const state = nowPlayingReducer(initialNowPlaying, {
      type: PLAY_TALLINN,
      data: {
        ...playState,
        studio: 'tallinn',
      },
    });

    expect(state).toEqual({
      ...playState,
      studio: 'tallinn',
      nowPlaying: true,
      showNowPlayingBar: true,
      streamType: 'live',
    });
  });

  it('updates now playing state', () => {
    const state = nowPlayingReducer(initialNowPlaying, {
      type: PLAY_TALLINN,
      data: {
        ...playState,
        studio: 'tallinn',
      },
    });

    expect(state).toEqual({
      ...playState,
      studio: 'tallinn',
      nowPlaying: true,
      showNowPlayingBar: true,
      streamType: 'live',
    });

    const newState = nowPlayingReducer(state, {
      type: UPDATE_NOW_PLAYING,
      data: {
        show_title: 'New show',
        artist: 'New Artist',
        image: 'www.newImage.com',
      },
    });

    expect(newState).toEqual({
      ...state,
      show_title: 'New show',
      artist: 'New Artist',
      image: 'www.newImage.com',
    });
  });

  it('sets play mixcloud state', () => {
    const state = nowPlayingReducer(initialNowPlaying, {
      type: PLAY_MIXCLOUD,
      data: {
        ...playState,
        studio: 'tallinn',
      },
    });

    expect(state).toEqual({
      ...playState,
      image: null,
      studio: 'tallinn',
      nowPlaying: true,
      showNowPlayingBar: true,
      streamType: 'mixcloud',
    });
  });

  it('handles stop', () => {
    nowPlayingReducer(initialNowPlaying, {
      type: PLAY_TALLINN,
      data: {
        ...playState,
        studio: 'tallinn',
      },
    });
    const state = nowPlayingReducer(initialNowPlaying, {
      type: STOP,
    });

    expect(state).toEqual(initialNowPlaying);
  });

  it('handles close now playing', () => {
    nowPlayingReducer(initialNowPlaying, {
      type: PLAY_TALLINN,
      data: {
        ...playState,
        studio: 'tallinn',
      },
    });
    const state = nowPlayingReducer(initialNowPlaying, {
      type: CLOSE_NOW_PLAYING,
    });

    expect(state).toEqual(initialNowPlaying);
  });
});
