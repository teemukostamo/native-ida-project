import {LATEST_SHOWS_URL} from '../../constants';

export const fetchLatestShows = async () => {
  const response = await fetch(LATEST_SHOWS_URL);
  const latestShows = await response.json();

  return latestShows;
};
