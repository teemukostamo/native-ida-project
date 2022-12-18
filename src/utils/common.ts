import {FiltersType} from '../contexts/filters/types';

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
  if (pathName === '/account') {
    return 'account';
  }
  if (pathName === '/about') {
    return 'about';
  }
  if (pathName === '/support') {
    return 'support';
  }

  return '';
};

export const stripHtmlTags = (text: string) =>
  text.replace(/(<([^>]+)>)/gi, '');

export const decodeHtmlCharCodes = (str: string) =>
  str.replace(/(&#(\d+);)/g, (match, capture, charCode) =>
    String.fromCharCode(charCode),
  );

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
