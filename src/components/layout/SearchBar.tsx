import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TextInput} from 'react-native';

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
  setInputValue: Dispatch<SetStateAction<string>>;
  inputValue: string;
};

const SearchBar: React.FC<Props> = ({
  onSearchPress,
  inputValue,
  setInputValue,
}) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="SEARCH"
      onChangeText={setInputValue}
      value={inputValue}
      inlineImageLeft="search_icon"
      inlineImagePadding={4}
      clearButtonMode="always"
      onSubmitEditing={() => onSearchPress()}
    />
  );
};

export default SearchBar;
