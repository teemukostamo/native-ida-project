import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import ChannelButtons from '../ChannelButtons';
import GenreDropdown from '../GenreDropdown';
import SearchBar from '../SearchBar';

import theme from '~src/theme';

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

type Props = {
  showFilters: boolean;
  filtersSet: boolean;
  setShowFilters: (value: boolean) => void;
  handleClearFilters: () => void;
};

const FiltersContent: React.FC<Props> = ({
  setShowFilters,
  showFilters,
  filtersSet,
  handleClearFilters,
}) => {
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
          <TouchableOpacity onPress={() => handleClearFilters()}>
            <Text style={[styles.filterBtn, styles.filterSet]}>
              CLEAR FILTERS
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {showFilters && (
        <View>
          <SearchBar />
          <GenreDropdown />
          <ChannelButtons />
        </View>
      )}
    </View>
  );
};

export default FiltersContent;
