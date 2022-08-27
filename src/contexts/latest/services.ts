import {LATEST_SHOWS_URL} from '../../constants';

export const fetchLatestEpisodes = async () => {
  const response = await fetch(LATEST_SHOWS_URL);
  const LatestEpisodes = await response.json();

  return LatestEpisodes;
};
