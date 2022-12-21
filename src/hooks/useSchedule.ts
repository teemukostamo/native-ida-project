import {useQuery} from '@tanstack/react-query';

const useSchedule = () => {
  const fetchSchedule = async () => {
    const response = await fetch(
      'https://admin.idaidaida.net/wp-json/ida/v3/complete-schedule',
    );
    return response.json();
  };

  const {isError, isFetching, isLoading, data} = useQuery(
    ['schedule'],
    fetchSchedule,
    {
      refetchInterval: 5 * 60 * 1000,
      refetchIntervalInBackground: true,
      refetchOnMount: true,
    },
  );

  return {
    isLoading,
    isFetching,
    isError,
    data,
  };
};

export default useSchedule;
