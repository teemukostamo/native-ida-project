import {
  getViewNameFromLocation,
  stripHtmlTags,
  areFiltersSet,
} from '~src/utils/common';

describe('getViewNameFromLocation returns correct view name', () => {
  it('home route returns live', () => {
    expect(getViewNameFromLocation('/')).toBe('live');
  });

  it('schedule route returns schedule', () => {
    expect(getViewNameFromLocation('/schedule')).toBe('schedule');
  });

  it('explore route returns explore', () => {
    expect(getViewNameFromLocation('/explore')).toBe('explore');
  });

  it('myida route returns my ida', () => {
    expect(getViewNameFromLocation('/myida')).toBe('my ida');
  });

  it('shows route returns shows', () => {
    expect(getViewNameFromLocation('/shows')).toBe('shows');
  });

  it('episodes route returns episodes', () => {
    expect(getViewNameFromLocation('/episodes')).toBe('episodes');
  });

  it('account route returns account', () => {
    expect(getViewNameFromLocation('/account')).toBe('account');
  });

  it('about route returns about', () => {
    expect(getViewNameFromLocation('/about')).toBe('about');
  });

  it('support route returns support', () => {
    expect(getViewNameFromLocation('/support')).toBe('support');
  });

  it('unknown route returns empty string', () => {
    expect(getViewNameFromLocation('/not-found')).toBe('');
  });
});

describe('stripHtmlTags removes html tags from string', () => {
  it('returns a string as is without html tags', () => {
    expect(stripHtmlTags('i have no html tags')).toBe('i have no html tags');
  });

  it('removes html tags from div', () => {
    expect(stripHtmlTags('<div>i am inside a div</div>')).toBe(
      'i am inside a div',
    );
  });

  it('removes html tags from li', () => {
    expect(stripHtmlTags('<li>i am inside a li</li>')).toBe('i am inside a li');
  });

  it('removes html tags from nested elements', () => {
    expect(stripHtmlTags('<ul><li>i am inside a ul li</li></ul>')).toBe(
      'i am inside a ul li',
    );
  });
});

describe('areFiltersSet returns true if filters are set', () => {
  const setSearchQuery = {
    channel: 'all',
    searchQuery: 'Some show',
    genre: {
      label: '',
      value: '',
    },
  };
  const setChannel = {
    channel: 'helsinki',
    searchQuery: '',
    genre: {
      label: '',
      value: '',
    },
  };
  const setGenre = {
    channel: 'all',
    searchQuery: '',
    genre: {
      label: 'Some Genre',
      value: 'some-genre',
    },
  };

  const noFilters = {
    channel: 'all',
    searchQuery: '',
    genre: {
      label: '',
      value: '',
    },
  };
  it('returns true if channel is not all', () => {
    expect(areFiltersSet(setChannel)).toEqual(true);
  });
  it('returns true if search query is set', () => {
    expect(areFiltersSet(setSearchQuery)).toEqual(true);
  });
  it('returns true if genre is set', () => {
    expect(areFiltersSet(setGenre)).toEqual(true);
  });
  it('returns false if no filters are set', () => {
    expect(areFiltersSet(noFilters)).toEqual(false);
  });
});
