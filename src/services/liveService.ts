export const fetchLiveShows = async () => {
  const response = await fetch(
    'https://admin.idaidaida.net/wp-json/ida/v3/live',
  );
  const liveShows = await response.json();

  return liveShows;
};
