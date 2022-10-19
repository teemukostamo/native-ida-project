import {useContext, useState} from 'react';
import {useInfiniteQuery} from '@tanstack/react-query';
import {AppContext} from '../contexts/main';
import {filterEpisodesUrlBuilder} from '../utils/urlBuilders';

const useEpisodes = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const {state} = useContext(AppContext);
  const filters = state.filters;

  const fetchEpisodes = async ({pageParam = 1}) => {
    const response = await fetch(
      filterEpisodesUrlBuilder(
        pageParam.toString(),
        filters.channel,
        filters.genre.value,
        filters.searchQuery,
      ),
    );
    return response.json();
  };

  const {isLoading, isError, isFetching, data, fetchNextPage} =
    useInfiniteQuery(
      ['Episodes', filters.channel, filters.genre.value, filters.searchQuery],
      fetchEpisodes,
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
    isFetching,
    isError,
    data,
    fetchMore,
    pageNumber,
  };
};

export default useEpisodes;
