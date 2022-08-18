import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

import ChannelButtons from './ChannelButtons';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';
import {GENRE_OPTIONS} from '../../constants';

import theme from '../../theme';

const styles = StyleSheet.create({
  filterBtnContainer: {
    backgroundColor: 'rgba(7, 7, 7, 0.8)',
    alignSelf: 'flex-start',
    color: theme.colors.gray,
    fontFamily: 'Menlo-Bold',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
    overflow: 'hidden',
    marginLeft: 10,
    marginTop: 10,
  },
});

const Filters: React.FC = () => {
  // make filter values go to context
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [genre, setGenre] = useState({label: '', value: ''});
  const [channel, setChannel] = useState('all');

  const onGenreChange = () => {
    console.log(
      `Genre changed, current filter params are genre ${genre.value}, channel ${channel}, searchQuery ${searchQuery}`,
    );
  };

  const onSearchPress = () => {
    console.log(
      `Search changed, current filter params are genre ${genre.value}, channel ${channel}, searchQuery ${searchQuery}`,
    );
  };

  const onChannelChange = () => {
    console.log(
      `Channel changed, current filter params are genre ${genre.value}, channel ${channel}, searchQuery ${searchQuery}`,
    );
  };

  return (
    <View>
      <TouchableOpacity onPress={() => setShowFilters(!showFilters)}>
        <Text style={styles.filterBtnContainer}>
          {showFilters ? 'HIDE FILTERS' : 'SHOW FILTERS'}
        </Text>
      </TouchableOpacity>
      {showFilters && (
        <View>
          <SearchBar
            onSearchPress={onSearchPress}
            inputValue={searchQuery}
            setInputValue={setSearchQuery}
          />
          <Dropdown
            onSelect={onGenreChange}
            data={GENRE_OPTIONS}
            value={genre}
            label={'GENRES'}
            setSelected={setGenre}
          />
          <ChannelButtons
            onChannelChange={onChannelChange}
            channel={channel}
            setChannel={setChannel}
          />
        </View>
      )}
    </View>
  );
};

export default Filters;
