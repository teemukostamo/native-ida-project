import React from 'react';
import About from '~src/components/about';
import {render} from '~__test_helpers__/testUtils';

describe('About', () => {
  it('has about ida text', async () => {
    const {getAllByText, getByText} = await render(<About />);
    expect(getByText('ABOUT IDA')).toBeDefined();
    expect(getByText('Send your music promos to:')).toBeDefined();
    expect(getByText('promos@idaidaida.net')).toBeDefined();
    expect(getByText('Original design by:')).toBeDefined();
    expect(getByText('WWW')).toBeDefined();
    expect(getByText('hello@idaidaida.net')).toBeDefined();
    expect(getByText('helsinki@idaidaida.net')).toBeDefined();
    expect(getByText('SoundCloud')).toBeDefined();
    expect(getByText('MixCloud')).toBeDefined();
    expect(getAllByText('Facebook')).toHaveLength(2);
    expect(getAllByText('Instagram')).toHaveLength(2);
  });
});
