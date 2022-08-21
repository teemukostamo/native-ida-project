import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {AppContext} from '../../contexts/main';
import {setSearchQuery} from '../../contexts/filters/actions';

import theme from '../../theme';

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

type Props = {
  onSearchPress: () => void;
};

const SearchBar: React.FC<Props> = ({onSearchPress}) => {
  const {state, dispatch} = useContext(AppContext);
  const [value, setValue] = useState(state.filters.searchQuery);

  useEffect(() => {
    setSearchQuery(dispatch, value);
  }, [value, dispatch]);

  return (
    <TextInput
      style={styles.searchInput}
      placeholder="SEARCH"
      onChangeText={setValue}
      value={value}
      inlineImageLeft="search_icon"
      inlineImagePadding={4}
      clearButtonMode="always"
      onSubmitEditing={() => onSearchPress()}
    />
  );
};

export default SearchBar;
