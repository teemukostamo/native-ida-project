import React from 'react';
import AboutContent from '~src/components/about/AboutContent';
import {fireEvent, render} from '~__test_helpers__/testUtils';

describe('AboutContent', () => {
  it('clicks on links', async () => {
    const openUrl = jest.fn();
    const {getByText, getByLabelText} = await render(
      <AboutContent openUrl={openUrl} />,
    );

    expect(getByText('ABOUT IDA')).toBeDefined();

    const musicPromosLink = getByText('promos@idaidaida.net');
    fireEvent.press(musicPromosLink);
    expect(openUrl).toBeCalledWith('mailto:promos@idaidaida.net');

    const wwwLink = getByText('WWW');
    fireEvent.press(wwwLink);
    expect(openUrl).toBeCalledWith('https://www.wwwstuudio.ee/');

    const soundCloudLink = getByText('SoundCloud');
    fireEvent.press(soundCloudLink);
    expect(openUrl).toBeCalledWith('https://soundcloud.com/ida_radio');

    const mixcloudLink = getByText('MixCloud');
    fireEvent.press(mixcloudLink);
    expect(openUrl).toBeCalledWith('https://www.mixcloud.com/IDA_RAADIO/');

    const tallinnEmailLink = getByText('hello@idaidaida.net');
    fireEvent.press(tallinnEmailLink);
    expect(openUrl).toBeCalledWith('mailto:hello@idaidaida.net');

    const tallinnFacebookLink = getByLabelText('Ida Tallinn Facebook');
    fireEvent.press(tallinnFacebookLink);
    expect(openUrl).toBeCalledWith('https://www.facebook.com/IDARadio/');

    const tallinnInstagramLink = getByLabelText('Ida Tallinn Instagram');
    fireEvent.press(tallinnInstagramLink);
    expect(openUrl).toBeCalledWith('https://www.instagram.com/ida.radio/');

    const helsinkiEmailLink = getByText('helsinki@idaidaida.net');
    fireEvent.press(helsinkiEmailLink);
    expect(openUrl).toBeCalledWith('mailto:helsinki@idaidaida.net');

    const helsinkiFacebookLink = getByLabelText('Ida Helsinki Facebook');
    fireEvent.press(helsinkiFacebookLink);
    expect(openUrl).toBeCalledWith('https://www.facebook.com/IDAhelsinki/');

    const helsinkiInstagramLink = getByLabelText('Ida Helsinki Instagram');
    fireEvent.press(helsinkiInstagramLink);
    expect(openUrl).toBeCalledWith('https://www.instagram.com/idahelsinki/');
  });
});
