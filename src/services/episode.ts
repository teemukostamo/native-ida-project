const latestEpisodesUrl =
  'https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=1&posts_per_page=32';
const initialQueryKey = ['Episodes', 'all', '', ''];

export const fetchEpisodes = async () => {
  const response = await fetch(latestEpisodesUrl);
  return response.json();
};

export const prefetchLatestEpisodes = async (queryClient: {
  prefetchInfiniteQuery: (arg0: {
    queryKey: string[];
    queryFn: () => Promise<any>;
  }) => any;
}) => {
  await queryClient.prefetchInfiniteQuery({
    queryKey: initialQueryKey,
    queryFn: fetchEpisodes,
  });
};
