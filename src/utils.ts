export const getMsToNextHour = () =>
  3600000 - (new Date().getTime() % 3600000) + 3000;
