import React, {
  Dispatch,
  FC,
  MutableRefObject,
  ReactElement,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '../../theme';

import {DropdownOptionType} from '../layout/types';

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
    fontFamily: 'Menlo-Bold',
    textTransform: 'uppercase',
    color: theme.colors.backdrop,
    letterSpacing: 1,
  },
  icon: {
    marginRight: 7,
  },
  dropdown: {
    marginLeft: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    width: '95%',
    fontFamily: 'Menlo-Bold',
    height: 400,
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
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

interface Props {
  label: string;
  data: Array<{label: string; value: string}>;
  onSelect: (item: {label: string; value: string}) => void;
  value: {label: string; value: string};
  setSelected: Dispatch<SetStateAction<{label: string; value: string}>>;
}

interface DropdownItem {
  item: {
    label: string;
    value: string;
  };
}

const Dropdown: FC<Props> = ({label, data, onSelect, setSelected, value}) => {
  const DropdownButton = useRef() as MutableRefObject<TouchableOpacity>;
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = () => {
    DropdownButton.current.measure(
      (
        _fx: number,
        _fy: number,
        _w: number,
        h: number,
        _px: number,
        py: number,
      ) => {
        setDropdownTop(py + h);
      },
    );
    setVisible(true);
  };

  const onItemPress = (item: DropdownOptionType): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const renderItem = ({item}: DropdownItem) => {
    return (
      <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
        <Text style={styles.itemText}>{item.label}</Text>
      </TouchableOpacity>
    );
  };

  const renderDropdown = (): ReactElement<any, any> => {
    return (
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View style={[styles.dropdown, {top: dropdownTop}]}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    );
  };

  return (
    <>
      <TouchableOpacity
        ref={DropdownButton}
        style={styles.button}
        onPress={toggleDropdown}>
        {renderDropdown()}
        <Text style={styles.buttonText}>{(value && value.label) || label}</Text>
        <Icon style={styles.icon} name="chevron-down" />
      </TouchableOpacity>
    </>
  );
};

export default Dropdown;
