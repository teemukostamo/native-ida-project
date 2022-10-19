import React from 'react';
import FiltersContent from '~src/components/layout/Filters/FiltersContent';
import {render, fireEvent} from '~__test_helpers__/testUtils';

describe('FiltersContent', () => {
  it('shows hide filters text when filters are visible', async () => {
    const handleClearFilters = jest.fn();
    const setShowFilters = jest.fn();
    const filtersSet = true;
    const showFilters = true;

    const {getByText} = await render(
      <FiltersContent
        handleClearFilters={handleClearFilters}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
        filtersSet={filtersSet}
      />,
    );
    const hideBtn = getByText('HIDE FILTERS');
    fireEvent.press(hideBtn);
    expect(setShowFilters).toBeCalledWith(false);

    const clearBtn = getByText('CLEAR FILTERS');
    fireEvent.press(clearBtn);
    expect(handleClearFilters).toBeCalled();
  });

  it('does not show clear button when filter is not set', async () => {
    const handleClearFilters = jest.fn();
    const setShowFilters = jest.fn();
    const filtersSet = false;
    const showFilters = true;

    const {queryByText} = await render(
      <FiltersContent
        handleClearFilters={handleClearFilters}
        setShowFilters={setShowFilters}
        showFilters={showFilters}
        filtersSet={filtersSet}
      />,
    );

    const clearBtn = queryByText('CLEAR FILTERS');
    expect(clearBtn).toBeNull();
  });
});
