export const getMsToNextHour = () =>
  3600000 - (new Date().getTime() % 3600000) + 3000;

export const getViewNameFromLocation = (pathName = '/') => {
  if (pathName === '/') {
    return 'live';
  }
  if (pathName === '/schedule') {
    return 'schedule';
  }
  if (pathName === '/explore') {
    return 'explore';
  }
  if (pathName === '/myida') {
    return 'my ida';
  }
  if (pathName.startsWith('/shows')) {
    return 'shows';
  }
  if (pathName.startsWith('/episodes')) {
    return 'episodes';
  }
  if (pathName === '/picks') {
    return 'picks';
  }
  if (pathName === '/search') {
    return 'search';
  }
  return '';
};

export const stripHtmlTags = (text: string) =>
  text.replace(/(<([^>]+)>)/gi, '');

export const decodeHtmlCharCodes = (str: string) =>
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode),
  );

export const fetchUrlBuilder = (
  view: string,
  pageParam: number,
  channel: string,
  genre: string,
  searchQuery: string,
) => {
  let url = `https://admin.idaidaida.net/wp-json/ida/v3/post-types/${view}?paged=${pageParam}&posts_per_page=32&order=ASC&orderby=title&acf[0]=artist`;

  if (channel) {
    url += `&tax_query[0][taxonomy]=channel&tax_query[0][terms]=${channel}&tax_query[0][field]=slug`;
  }
  if (genre) {
    url += `&tax_query[1][taxonomy]=genres&tax_query[1][terms]=${genre}&tax_query[1][field]=slug`;
  }
  if (searchQuery) {
    console.log('should update url');
    url += `&s=${searchQuery}`;
    console.log('updated url', url);
  }

  return url;
};
// https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast?paged=1&posts_per_page=24&order=ASC&orderby=title&acf[0]=artist&tax_query[0][taxonomy]=channel&tax_query[0][terms]=helsinki&tax_query[0][field]=slug&tax_query[1][taxonomy]=genres&tax_query[1][terms]=acid&tax_query[1][field]=slug&s=after
// https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast?paged=1&posts_per_page=24&order=ASC&orderby=title&acf[0]=artist&tax_query[0][taxonomy]=channel&tax_query[0][terms]=helsinki&tax_query[0][field]=slug&tax_query[1][taxonomy]=genres&tax_query[1][terms]=acid&tax_query[1][field]=slug
// //all
// https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast?paged=1&posts_per_page=24&order=ASC&orderby=title&acf[0]=artist&s=vilun
// // tallinn
// https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast?paged=1&posts_per_page=24&order=ASC&orderby=title&acf[0]=artist&tax_query[0][taxonomy]=channel&tax_query[0][terms]=tallinn&tax_query[0][field]=slug&s=vilun
// // hel
// https://admin.idaidaida.net/wp-json/ida/v3/post-types/broadcast?paged=1&posts_per_page=24&order=ASC&orderby=title&acf[0]=artist&tax_query[0][taxonomy]=channel&tax_query[0][terms]=helsinki&tax_query[0][field]=slug&s=vilun
