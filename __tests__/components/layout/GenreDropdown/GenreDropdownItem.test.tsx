import React from 'react';
import GenreDropdownItem from '~src/components/layout/GenreDropdown/GenreDropdownItem';
import {render, fireEvent} from '~__test_helpers__/testUtils';

const item = {
  value: 'hip-hop',
  label: 'Hip Hop',
};

describe('GenreDropdownItem', () => {
  it('can be pressed with genre value', async () => {
    const onItemPress = jest.fn();
    const {getByLabelText} = await render(
      <GenreDropdownItem item={item} onItemPress={onItemPress} />,
    );
    const dropdownItem = getByLabelText(`Set ${item.label} filter`);
    expect(dropdownItem).toBeDefined();

    fireEvent.press(dropdownItem);

    expect(onItemPress).toBeCalledWith(item);
    expect(onItemPress).toBeCalledTimes(1);
  });
});
