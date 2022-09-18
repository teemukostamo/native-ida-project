import React, {useContext, useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import ChannelButtons from './ChannelButtons';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import {GENRE_OPTIONS} from '~src/constants';
import {clearFilters} from '~src/contexts/filters/actions';
import {areFiltersSet} from '~src/utils/utils';

import theme from '~src/theme';
import {AppContext} from '~src/contexts/main';

const styles = StyleSheet.create({
  filterBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  filterBtn: {
    ...theme.fonts.light,
    alignSelf: 'flex-start',
    color: theme.colors.gray,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 5,
    marginRight: 10,
  },
  filterNotSet: {
    backgroundColor: 'rgba(7, 7, 7, 0.8)',
  },
  filterSet: {
    backgroundColor: theme.colors.green,
  },
});

const Filters: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);
  const {state, dispatch} = useContext(AppContext);
  const filtersSet = areFiltersSet(state.filters);

  return (
    <View>
      <View style={styles.filterBtnContainer}>
        <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
          <Text
            style={[
              styles.filterBtn,
              filtersSet ? styles.filterSet : styles.filterNotSet,
            ]}>
            {showFilters ? 'HIDE FILTERS' : 'FILTER'}
          </Text>
        </TouchableOpacity>
        {filtersSet && (
          <TouchableOpacity onPress={() => clearFilters(dispatch)}>
            <Text style={[styles.filterBtn, styles.filterSet]}>
              CLEAR FILTERS
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {showFilters && (
        <View>
          <SearchBar />
          <Dropdown data={GENRE_OPTIONS} label={'GENRES'} />
          <ChannelButtons />
        </View>
      )}
    </View>
  );
};

export default Filters;
