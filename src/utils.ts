import {FiltersType} from './contexts/filters/types';

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

export const areFiltersSet = (filters: FiltersType) => {
  if (filters.channel !== 'all') {
    return true;
  }
  if (filters.searchQuery !== '') {
    return true;
  }
  if (filters.genre.label !== '' && filters.genre.value !== '') {
    return true;
  }
  return false;
};
