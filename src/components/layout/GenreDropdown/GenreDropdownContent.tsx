import React, {MutableRefObject} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import GenreDropdownItem from './GenreDropdownItem';

import theme from '~src/theme';

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    height: 20,
    marginHorizontal: 10,
    marginBottom: 10,
    zIndex: 1,
  },
  buttonText: {
    flex: 1,
    textAlign: 'left',
    marginLeft: 5,
    ...theme.fonts.light,
    textTransform: 'uppercase',
    color: theme.colors.backdrop,
    letterSpacing: 1,
  },
  icon: {
    marginRight: 7,
  },
  dropdown: {
    ...theme.fonts.light,
    marginLeft: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    width: '95%',
    height: 400,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
});

type DropdownItem = {
  label: string;
  value: string;
};

type Props = {
  DropdownButton: MutableRefObject<TouchableOpacity>;
  toggleDropdown: () => void;
  visible: boolean;
  dropdownTop: number;
  onItemPress: (item: DropdownItem) => void;
  setVisible: (visibility: boolean) => void;
  label: string;
  data: Array<{label: string; value: string}>;
  genre: DropdownItem;
};

const GenreDropdownContent: React.FC<Props> = ({
  DropdownButton,
  toggleDropdown,
  visible,
  dropdownTop,
  onItemPress,
  setVisible,
  label,
  data,
  genre,
}) => {
  return (
    <>
      <TouchableOpacity
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}>
        <Modal visible={visible} transparent animationType="none">
          <TouchableOpacity
            style={styles.overlay}
            onPress={() => setVisible(false)}>
            <View style={[styles.dropdown, {top: dropdownTop}]}>
              <FlatList
                data={data}
                renderItem={({item}) => (
                  <GenreDropdownItem onItemPress={onItemPress} item={item} />
                )}
                keyExtractor={(_item, index) => index.toString()}
              />
            </View>
          </TouchableOpacity>
        </Modal>
        <Text style={styles.buttonText}>{(genre && genre.label) || label}</Text>
        <Icon style={styles.icon} name="chevron-down" />
      </TouchableOpacity>
    </>
  );
};

export default GenreDropdownContent;
