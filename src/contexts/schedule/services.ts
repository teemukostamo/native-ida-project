import {FULL_SCHEDULE_URL} from '../../constants';

export const fetchFullSchedule = async () => {
  const response = await fetch(FULL_SCHEDULE_URL);
  const fullSchedule = await response.json();

  return fullSchedule;
};
