import React, {useContext, useState} from 'react';
import {AppContext} from '~src/contexts/main';
import {setSearchQuery} from '~src/contexts/filters/actions';

import SearchBarContent from './SearchBarContent';

const SearchBar: React.FC = () => {
  const {state, dispatch} = useContext(AppContext);
  const [value, setValue] = useState(state.filters.searchQuery);

  const onSubmit = (inputValue: string) => {
    setSearchQuery(dispatch, inputValue);
  };

  return (
    <SearchBarContent onSubmit={onSubmit} value={value} setValue={setValue} />
  );
};

export default SearchBar;
