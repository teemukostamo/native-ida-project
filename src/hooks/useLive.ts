import {useQuery} from '@tanstack/react-query';
import {LIVE_SHOWS_URL} from '../constants';

const useLive = () => {
  const fetchLive = async () => {
    const response = await fetch(LIVE_SHOWS_URL);
    return response.json();
  };

  const {isError, isFetching, isLoading, data} = useQuery(['live'], fetchLive, {
    refetchInterval: 5 * 60 * 1000,
    refetchIntervalInBackground: true,
    refetchOnMount: true,
  });

  return {
    isLoading,
    isFetching,
    isError,
    data,
  };
};

export default useLive;
