import {useState} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';

const useLatestEpisodes = () => {
  const [pageNumber, setPageNumber] = useState(1);

  const fetchLatestEpisodes = async ({pageParam = 1}) => {
    const response = await fetch(
      `https://admin.idaidaida.net/wp-json/ida/v3/episodes?paged=${pageParam}&posts_per_page=36`,
    );
    return response.json();
  };

  const {isLoading, isError, data, fetchNextPage} = useInfiniteQuery(
    ['LatestEpisodes'],
    fetchLatestEpisodes,
    {
      getNextPageParam: () => pageNumber + 1,
      keepPreviousData: true,
    },
  );

  const fetchMore = () => {
    if (pageNumber < 100) {
      setPageNumber(pageNumber + 1);
      fetchNextPage();
    }
  };

  return {
    isLoading,
    isError,
    data,
    fetchMore,
  };
};

export default useLatestEpisodes;
