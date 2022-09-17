import React, {useContext, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {AppContext} from '~src/contexts/main';
import {setSearchQuery} from '~src/contexts/filters/actions';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  searchInput: {
    fontFamily: 'Menlo-Bold',
    margin: 10,
    backgroundColor: theme.colors.primary,
    paddingVertical: 2,
    paddingLeft: 6,
    paddingHorizontal: 1,
    color: theme.colors.backdrop,
  },
});

const SearchBar: React.FC = () => {
  const {state, dispatch} = useContext(AppContext);
  const [value, setValue] = useState(state.filters.searchQuery);

  return (
    <TextInput
      style={styles.searchInput}
      placeholder="SEARCH"
      onChangeText={setValue}
      value={value}
      inlineImageLeft="search_icon"
      inlineImagePadding={4}
      clearButtonMode="always"
      onSubmitEditing={() => setSearchQuery(dispatch, value)}
    />
  );
};

export default SearchBar;
