import React, {
  FC,
  MutableRefObject,
  ReactElement,
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
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useNavigate} from 'react-router-native';
import theme from '../../theme';

import {DropdownOptionType} from '../layout/types';

const styles = StyleSheet.create({
  pageTitleStyle: {
    color: theme.colors.backdrop,
    marginLeft: 10,
  },
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
    marginLeft: 100,
  },
  dropdown: {
    marginLeft: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    width: '95%',
    fontFamily: 'Menlo-Bold',
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

interface DropdownItem {
  item: {
    label: string;
    value: string;
  };
}

const ExploreViewSelector: FC = () => {
  let navigate = useNavigate();
  const DropdownButton = useRef() as MutableRefObject<TouchableOpacity>;
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState({
    label: 'EXPLORE EPISODES',
    value: 'episodes',
  });
  const [dropdownTop, setDropdownTop] = useState(0);

  const toggleDropdown = (): void => {
    visible ? setVisible(false) : openDropdown();
  };

  const openDropdown = (): void => {
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

  const onSelect = (item: {label: string; value: string}) => {
    navigate(`/${item.value}`);
  };

  const onItemPress = (item: DropdownOptionType): void => {
    setSelected(item);
    onSelect(item);
    setVisible(false);
  };

  const data = [
    {label: 'EXPLORE EPISODES', value: 'episodes'},
    {label: 'EXPLORE SHOWS', value: 'shows'},
  ];

  const renderItem = ({item}: DropdownItem) => {
    return (
      item.value !== selected.value && (
        <TouchableOpacity style={styles.item} onPress={() => onItemPress(item)}>
          <Text style={styles.itemText}>{item.label}</Text>
        </TouchableOpacity>
      )
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
      <TouchableOpacity ref={DropdownButton} onPress={toggleDropdown}>
        {renderDropdown()}
        <Title style={styles.pageTitleStyle}>
          {selected && selected.label}
          <Icon style={styles.icon} name="chevron-down" />
        </Title>
      </TouchableOpacity>
    </>
  );
};

export default ExploreViewSelector;
