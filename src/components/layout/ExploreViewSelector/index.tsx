import React, {FC, MutableRefObject, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {useNavigate} from 'react-router-native';

import {DropdownOptionType} from '../../layout/types';
import ExploreViewSelectorContent from './ExploreViewSelectorContent';

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

  return (
    <ExploreViewSelectorContent
      DropdownButton={DropdownButton}
      toggleDropdown={toggleDropdown}
      onItemPress={onItemPress}
      dropdownTop={dropdownTop}
      selected={selected}
      visible={visible}
      setVisible={setVisible}
    />
  );
};

export default ExploreViewSelector;
