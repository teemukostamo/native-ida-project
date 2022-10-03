import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import theme from '~src/theme';

const styles = StyleSheet.create({
  item: {
    backgroundColor: theme.colors.green,
    paddingHorizontal: 1,
    paddingVertical: 1,
  },
  itemText: {
    color: theme.colors.backdrop,
    fontFamily: 'ida-Regular',
    fontSize: 18,
  },
});

type DropdownItem = {
  label: string;
  value: string;
};

type Props = {
  item: DropdownItem;
  onItemPress: (item: DropdownItem) => void;
};

const GenreDropdownItem: React.FC<Props> = ({item, onItemPress}) => (
  <TouchableOpacity
    accessibilityLabel={`Set ${item.label} filter`}
    style={styles.item}
    onPress={() => onItemPress(item)}>
    <Text style={styles.itemText}>{item.label}</Text>
  </TouchableOpacity>
);

export default GenreDropdownItem;
