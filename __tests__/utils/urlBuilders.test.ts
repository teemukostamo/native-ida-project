import {
  filterEpisodesUrlBuilder,
  filterShowsUrlBuilder,
} from '~src/utils/urlBuilders';

describe('filterEpisodesUrlBuilder', () => {
  it('has no filter params when no params are given', () => {
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', '').includes(
        'tax_query[0][taxonomy]=channel&tax_query[0]',
      ),
    ).toBe(false);
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', '').includes(
        'tax_query[1][taxonomy]=genres&tax_query[1][terms]',
      ),
    ).toBe(false);
    expect(filterEpisodesUrlBuilder('1', 'all', '', '').includes('&s=')).toBe(
      false,
    );
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', '').endsWith(
        '?paged=1&posts_per_page=32',
      ),
    ).toBe(true);
  });

  it('has channel param when channel is given', () => {
    expect(
      filterEpisodesUrlBuilder('1', 'helsinki', '', '').includes(
        '&tax_query[0][taxonomy]=channel&tax_query[0][terms]=helsinki',
      ),
    ).toBe(true);
    expect(
      filterEpisodesUrlBuilder('1', 'helsinki', '', '').includes(
        'tax_query[1][taxonomy]=genres&tax_query[1][terms]',
      ),
    ).toBe(false);
    expect(
      filterEpisodesUrlBuilder('1', 'helsinki', '', '').includes('&s='),
    ).toBe(false);
    expect(
      filterEpisodesUrlBuilder('1', 'helsinki', '', '').endsWith(
        '?paged=1&posts_per_page=32',
      ),
    ).toBe(false);
  });

  it('has genre param when genre is given', () => {
    expect(
      filterEpisodesUrlBuilder('1', 'all', 'techno', '').includes(
        'tax_query[0][taxonomy]=channel&tax_query[0]',
      ),
    ).toBe(false);
    expect(
      filterEpisodesUrlBuilder('1', 'all', 'techno', '').includes(
        '&tax_query[1][taxonomy]=genres&tax_query[1][terms]=techno',
      ),
    ).toBe(true);
    expect(
      filterEpisodesUrlBuilder('1', 'all', 'techno', '').includes('&s='),
    ).toBe(false);
    expect(
      filterEpisodesUrlBuilder('1', 'all', 'techno', '').endsWith(
        '?paged=1&posts_per_page=32',
      ),
    ).toBe(false);
  });

  it('has search param', () => {
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', 'some search term').includes(
        'tax_query[0][taxonomy]=channel&tax_query[0]',
      ),
    ).toBe(false);
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', 'some search term').includes(
        'tax_query[1][taxonomy]=genres&tax_query[1][terms]',
      ),
    ).toBe(false);
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', 'some search term').includes(
        '&s=some search term',
      ),
    ).toBe(true);
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', 'some search term').endsWith(
        '?paged=1&posts_per_page=32',
      ),
    ).toBe(false);
  });

  it('has all params', () => {
    expect(
      filterEpisodesUrlBuilder(
        '1',
        'helsinki',
        'techno',
        'some search term',
      ).includes(
        '&tax_query[0][taxonomy]=channel&tax_query[0][terms]=helsinki',
      ),
    ).toBe(true);
    expect(
      filterEpisodesUrlBuilder(
        '1',
        'helsinki',
        'techno',
        'some search term',
      ).includes('&tax_query[1][taxonomy]=genres&tax_query[1][terms]=techno'),
    ).toBe(true);
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', 'some search term').includes(
        '&s=some search term',
      ),
    ).toBe(true);
    expect(
      filterEpisodesUrlBuilder('1', 'all', '', 'some search term').endsWith(
        '?paged=1&posts_per_page=32',
      ),
    ).toBe(false);
  });
});

describe('filterShowsBuilder', () => {
  it('has no filter params when no params are given', () => {
    expect(
      filterShowsUrlBuilder('1', 'all', '', '').includes(
        'tax_query[0][taxonomy]=channel&tax_query[0]',
      ),
    ).toBe(false);
    expect(
      filterShowsUrlBuilder('1', 'all', '', '').includes(
        'tax_query[1][taxonomy]=genres&tax_query[1][terms]',
      ),
    ).toBe(false);
    expect(filterShowsUrlBuilder('1', 'all', '', '').includes('&s=')).toBe(
      false,
    );
    expect(
      filterShowsUrlBuilder('1', 'all', '', '').endsWith(
        'posts_per_page=24&order=ASC&orderby=title&acf[0]=artist',
      ),
    ).toBe(true);
  });

  it('has channel param when channel is given', () => {
    expect(
      filterShowsUrlBuilder('1', 'helsinki', '', '').includes(
        '&tax_query[0][taxonomy]=channel&tax_query[0][terms]=helsinki',
      ),
    ).toBe(true);
    expect(
      filterShowsUrlBuilder('1', 'helsinki', '', '').includes(
        'tax_query[1][taxonomy]=genres&tax_query[1][terms]',
      ),
    ).toBe(false);
    expect(filterShowsUrlBuilder('1', 'helsinki', '', '').includes('&s=')).toBe(
      false,
    );
    expect(
      filterShowsUrlBuilder('1', 'helsinki', '', '').endsWith(
        'posts_per_page=24&order=ASC&orderby=title&acf[0]=artist',
      ),
    ).toBe(false);
  });

  it('has genre param when genre is given', () => {
    expect(
      filterShowsUrlBuilder('1', 'all', 'techno', '').includes(
        'tax_query[0][taxonomy]=channel&tax_query[0]',
      ),
    ).toBe(false);
    expect(
      filterShowsUrlBuilder('1', 'all', 'techno', '').includes(
        '&tax_query[1][taxonomy]=genres&tax_query[1][terms]=techno',
      ),
    ).toBe(true);
    expect(
      filterShowsUrlBuilder('1', 'all', 'techno', '').includes('&s='),
    ).toBe(false);
    expect(
      filterShowsUrlBuilder('1', 'all', 'techno', '').endsWith(
        'posts_per_page=24&order=ASC&orderby=title&acf[0]=artist',
      ),
    ).toBe(false);
  });

  it('has search param', () => {
    expect(
      filterShowsUrlBuilder('1', 'all', '', 'some search term').includes(
        'tax_query[0][taxonomy]=channel&tax_query[0]',
      ),
    ).toBe(false);
    expect(
      filterShowsUrlBuilder('1', 'all', '', 'some search term').includes(
        'tax_query[1][taxonomy]=genres&tax_query[1][terms]',
      ),
    ).toBe(false);
    expect(
      filterShowsUrlBuilder('1', 'all', '', 'some search term').includes(
        '&s=some search term',
      ),
    ).toBe(true);
    expect(
      filterShowsUrlBuilder('1', 'all', '', 'some search term').endsWith(
        'posts_per_page=24&order=ASC&orderby=title&acf[0]=artist',
      ),
    ).toBe(false);
  });

  it('has all params', () => {
    expect(
      filterShowsUrlBuilder(
        '1',
        'helsinki',
        'techno',
        'some search term',
      ).includes(
        '&tax_query[0][taxonomy]=channel&tax_query[0][terms]=helsinki',
      ),
    ).toBe(true);
    expect(
      filterShowsUrlBuilder(
        '1',
        'helsinki',
        'techno',
        'some search term',
      ).includes('&tax_query[1][taxonomy]=genres&tax_query[1][terms]=techno'),
    ).toBe(true);
    expect(
      filterShowsUrlBuilder('1', 'all', '', 'some search term').includes(
        '&s=some search term',
      ),
    ).toBe(true);
    expect(
      filterShowsUrlBuilder('1', 'all', '', 'some search term').endsWith(
        'posts_per_page=24&order=ASC&orderby=title&acf[0]=artist',
      ),
    ).toBe(false);
  });
});
