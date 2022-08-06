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
  return '';
};
