export const scheduleQueryKey = 'schedule';

export const fetchSchedule = async () => {
  const response = await fetch(
    'https://admin.idaidaida.net/wp-json/ida/v3/complete-schedule',
  );
  return response.json();
};

export const prefetchSchedule = async (queryClient: {
  prefetchQuery: (arg0: {
    queryKey: string[];
    queryFn: () => Promise<any>;
  }) => any;
}) => {
  // The results of this query will be cached like a normal query
  await queryClient.prefetchQuery({
    queryKey: [scheduleQueryKey],
    queryFn: fetchSchedule,
  });
};
