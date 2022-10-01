import {useContext, useState} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';
import {AppContext} from '../contexts/main';
import {filterShowsUrlBuilder} from '../utils/urlBuilders';

const useShows = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {state} = useContext(AppContext);
  const filters = state.filters;

  const fetchLatestShows = async ({pageParam = 1}) => {
    const response = await fetch(
      filterShowsUrlBuilder(
        pageParam.toString(),
        filters.channel,
        filters.genre.value,
        filters.searchQuery,
      ),
    );
    return response.json();
  };

  const {isFetching, isLoading, isError, data, fetchNextPage} =
    useInfiniteQuery(
      ['Shows', filters.channel, filters.genre.value, filters.searchQuery],
      fetchLatestShows,
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
    isFetching,
    isLoading,
    isError,
    data,
    fetchMore,
  };
};

export default useShows;
