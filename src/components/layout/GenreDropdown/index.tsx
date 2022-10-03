import React, {MutableRefObject, useContext, useRef, useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {AppContext} from '~src/contexts/main';
import {setGenre} from '~src/contexts/filters/actions';
import {GENRE_OPTIONS} from '~src/constants';

import {DropdownOptionType} from '../types';
import GenreDropdownContent from './GenreDropdownContent';

const GenreDropdown = () => {
  const DropdownButton = useRef() as MutableRefObject<TouchableOpacity>;
  const [visible, setVisible] = useState(false);
  const [dropdownTop, setDropdownTop] = useState(0);
  const {state, dispatch} = useContext(AppContext);
  const genre = state.filters.genre;

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
    setGenre(dispatch, item.label, item.value);
    // onSelect(item);
    setVisible(false);
  };

  return (
    <GenreDropdownContent
      DropdownButton={DropdownButton}
      toggleDropdown={toggleDropdown}
      visible={visible}
      dropdownTop={dropdownTop}
      onItemPress={onItemPress}
      setVisible={setVisible}
      label="GENRES"
      data={GENRE_OPTIONS}
      genre={genre}
    />
  );
};

export default GenreDropdown;
