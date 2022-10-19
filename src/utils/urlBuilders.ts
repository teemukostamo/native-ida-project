export const filterEpisodesUrlBuilder = (
  pageParam = '1',
  channel: string,
  genre: string,
  searchQuery: string,
) => {
  let url = `https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=${pageParam}&posts_per_page=32`;

  if (channel !== 'all') {
    url += `&tax_query[0][taxonomy]=channel&tax_query[0][terms]=${channel}&tax_query[0][field]=slug`;
  }
  if (genre) {
    url += `&tax_query[1][taxonomy]=genres&tax_query[1][terms]=${genre}&tax_query[1][field]=slug`;
  }
  if (searchQuery) {
    url += `&s=${searchQuery}`;
  }

  return url;
};

export const filterShowsUrlBuilder = (
  pageParam = '1',
  channel: string,
  genre: string,
  searchQuery: string,
) => {
  let url = `https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast?paged=${pageParam}&posts_per_page=24&order=ASC&orderby=title&acf[0]=artist`;

  if (channel !== 'all') {
    url += `&tax_query[0][taxonomy]=channel&tax_query[0][terms]=${channel}&tax_query[0][field]=slug`;
  }
  if (genre) {
    url += `&tax_query[1][taxonomy]=genres&tax_query[1][terms]=${genre}&tax_query[1][field]=slug`;
  }
  if (searchQuery) {
    url += `&s=${searchQuery}`;
  }

  return url;
};
