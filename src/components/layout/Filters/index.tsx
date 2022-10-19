import React, {useContext, useState} from 'react';
import {AppContext} from '~src/contexts/main';
import {clearFilters} from '~src/contexts/filters/actions';
import {areFiltersSet} from '~src/utils/common';

import FiltersContent from './FiltersContent';

const Filters: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const {state, dispatch} = useContext(AppContext);
  const filtersSet = areFiltersSet(state.filters);

  const handleClearFilters = () => {
    clearFilters(dispatch);
  };

  return (
    <FiltersContent
      handleClearFilters={handleClearFilters}
      setShowFilters={setShowFilters}
      showFilters={showFilters}
      filtersSet={filtersSet}
    />
  );
};

export default Filters;
