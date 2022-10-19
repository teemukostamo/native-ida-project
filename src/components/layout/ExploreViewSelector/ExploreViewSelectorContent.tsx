import React, {MutableRefObject} from 'react';
import {StyleSheet, Text, TouchableOpacity, Modal, View} from 'react-native';
import {Title} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import theme from '~src/theme';

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
    ...theme.fonts.light,
    flex: 1,
    textAlign: 'left',
    marginLeft: 5,
    textTransform: 'uppercase',
    color: theme.colors.backdrop,
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 100,
  },
  dropdown: {
    ...theme.fonts.light,
    marginLeft: 10,
    position: 'absolute',
    backgroundColor: '#fff',
    width: '95%',
  },
  overlay: {
    width: '100%',
    height: '100%',
  },
  item: {
    backgroundColor: theme.colors.green,
    paddingHorizontal: 1,
    paddingVertical: 1,
    marginTop: -10,
  },
  itemText: {
    ...theme.fonts.regular,
    color: theme.colors.backdrop,
    fontSize: 18,
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
  selected: DropdownItem;
};

const ExploreViewSelectorContent: React.FC<Props> = ({
  DropdownButton,
  dropdownTop,
  toggleDropdown,
  setVisible,
  onItemPress,
  selected,
  visible,
}) => {
  return (
    <TouchableOpacity ref={DropdownButton} onPress={toggleDropdown}>
      <Modal visible={visible} transparent animationType="none">
        <TouchableOpacity
          style={styles.overlay}
          onPress={() => setVisible(false)}>
          <View style={[styles.dropdown, {top: dropdownTop}]}>
            {selected.value === 'episodes' ? (
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  onItemPress({label: 'EXPLORE SHOWS', value: 'shows'})
                }>
                <Text style={styles.itemText}>EXPLORE SHOWS</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.item}
                onPress={() =>
                  onItemPress({label: 'EXPLORE EPISODES', value: 'episodes'})
                }>
                <Text style={styles.itemText}>EXPLORE EPISODES</Text>
              </TouchableOpacity>
            )}
          </View>
        </TouchableOpacity>
      </Modal>
      <Title style={styles.pageTitleStyle}>
        {selected && selected.label}
        <Icon style={styles.icon} name="chevron-down" />
      </Title>
    </TouchableOpacity>
  );
};

export default ExploreViewSelectorContent;
