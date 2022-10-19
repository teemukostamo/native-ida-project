import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, TextInput} from 'react-native';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.gray,
  },
  searchInput: {
    ...theme.fonts.light,
    margin: 10,
    backgroundColor: theme.colors.primary,
    paddingVertical: 2,
    paddingLeft: 6,
    paddingHorizontal: 1,
    color: theme.colors.backdrop,
  },
});

type Props = {
  onSubmit: (value: string) => void;
  setValue: Dispatch<SetStateAction<string>>;
  value: string;
};

const SearchBarContent: React.FC<Props> = ({onSubmit, setValue, value}) => {
  return (
    <TextInput
      style={styles.searchInput}
      placeholder="SEARCH"
      onChangeText={setValue}
      value={value}
      inlineImageLeft="search_icon"
      inlineImagePadding={4}
      clearButtonMode="always"
      onSubmitEditing={() => onSubmit(value)}
    />
  );
};

export default SearchBarContent;
