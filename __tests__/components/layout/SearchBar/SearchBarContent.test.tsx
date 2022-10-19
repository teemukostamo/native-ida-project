import React from 'react';
import SearchBarContent from '~src/components/layout/SearchBar/SearchBarContent';
import {fireEvent, render} from '~__test_helpers__/testUtils';

describe('SearchBarContent', () => {
  it('types text to input', async () => {
    const onSubmit = jest.fn();
    const setValue = jest.fn();

    const {getByPlaceholderText} = await render(
      <SearchBarContent value="" onSubmit={onSubmit} setValue={setValue} />,
    );

    const input = getByPlaceholderText('SEARCH');
    expect(input).toBeDefined();

    fireEvent.changeText(input, 'electronic');
    expect(setValue).toBeCalledWith('electronic');
  });
});
