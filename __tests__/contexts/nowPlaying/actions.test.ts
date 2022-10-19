import {
  onTallinnPlayPress,
  onHelsinkiPlayPress,
  onPlayMixcloudPress,
  stopPlayerPress,
  closeNowPlaying,
} from '~src/contexts/nowPlaying/actions';
import {
  PLAY_HELSINKI,
  PLAY_MIXCLOUD,
  PLAY_TALLINN,
  STOP,
  CLOSE_NOW_PLAYING,
} from '~src/contexts/nowPlaying/reducer';
import {TALLINN_LIVE_URL, HELSINKI_LIVE_URL} from '~src/constants';

import * as trackPlayerService from '~src/services/trackPlayer';

describe('nowplaying actions', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });
  it('onTallinnPlayPress', () => {
    const startPlaybackSpy = jest.spyOn(trackPlayerService, 'startPlayback');

    const mockDispatch = jest.fn();
    onTallinnPlayPress(
      mockDispatch,
      'Music show',
      'DJ COOL BEANS',
      'www.image.com',
    );

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: PLAY_TALLINN,
      data: {
        show_title: 'Music show',
        artist: 'DJ COOL BEANS',
        image: 'www.image.com',
        mixcloud: null,
        studio: 'tallinn',
      },
    });
    expect(startPlaybackSpy).toBeCalled();
    expect(startPlaybackSpy).toBeCalledWith(
      TALLINN_LIVE_URL,
      'Music show',
      'DJ COOL BEANS',
      'www.image.com',
    );
  });

  it('onHelsinkiPlayPress', () => {
    const startPlaybackSpy = jest.spyOn(trackPlayerService, 'startPlayback');

    const mockDispatch = jest.fn();
    onHelsinkiPlayPress(
      mockDispatch,
      'Music show',
      'DJ COOL BEANS',
      'www.image.com',
    );

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: PLAY_HELSINKI,
      data: {
        show_title: 'Music show',
        artist: 'DJ COOL BEANS',
        image: 'www.image.com',
        mixcloud: null,
        studio: 'helsinki',
      },
    });
    expect(startPlaybackSpy).toBeCalled();
    expect(startPlaybackSpy).toBeCalledWith(
      HELSINKI_LIVE_URL,
      'Music show',
      'DJ COOL BEANS',
      'www.image.com',
    );
  });

  it('onPlayMixcloudPress', () => {
    const stopPlaybackSpy = jest.spyOn(trackPlayerService, 'stopPlayback');

    const mockDispatch = jest.fn();
    onPlayMixcloudPress(
      mockDispatch,
      'Music show',
      'DJ COOL BEANS',
      'www.mixcloud.com',
      'helsinki',
    );

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: PLAY_MIXCLOUD,
      data: {
        show_title: 'Music show',
        artist: 'DJ COOL BEANS',
        mixcloud: 'www.mixcloud.com',
        image: null,
        studio: 'helsinki',
      },
    });
    expect(stopPlaybackSpy).toBeCalled();
  });

  it('stopPlayerPress', () => {
    const stopPlaybackSpy = jest.spyOn(trackPlayerService, 'stopPlayback');

    const mockDispatch = jest.fn();
    stopPlayerPress(mockDispatch);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: STOP,
    });
    expect(stopPlaybackSpy).toBeCalled();
  });

  it('closeNowPlaying', () => {
    const stopPlaybackSpy = jest.spyOn(trackPlayerService, 'stopPlayback');

    const mockDispatch = jest.fn();
    closeNowPlaying(mockDispatch);

    expect(mockDispatch).toBeCalled();
    expect(mockDispatch).toBeCalledWith({
      type: CLOSE_NOW_PLAYING,
    });
    expect(stopPlaybackSpy).toBeCalled();
  });
});
