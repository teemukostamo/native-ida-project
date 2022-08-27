import {LIVE_SHOWS_URL} from '../../constants';

export const fetchLiveShows = async () => {
  const response = await fetch(LIVE_SHOWS_URL);
  const liveShows = await response.json();

  return liveShows;
};
