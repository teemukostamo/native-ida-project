import React, {useContext} from 'react';
import {WebView} from 'react-native-webview';
import {AppContext} from '../../contexts/main';

const Mixcloud = () => {
  const {state} = useContext(AppContext);
  const {nowPlaying} = state;

  const style = {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: 'transparent',
  };

  if (nowPlaying.mixcloud) {
    console.log(nowPlaying.mixcloud);
    const mixcloudId = nowPlaying.mixcloud.replaceAll('/', '%2F');
    console.log(mixcloudId);
    const streamUrl = `https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&autoplay=1&feed=%2F${mixcloudId}`;

    return (
      <WebView
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        automaticallyAdjustContentInsets={true}
        mediaPlaybackRequiresUserAction={false}
        style={style}
        source={{
          html: `
                <!DOCTYPE html>
                <html>
                  <head>
                  <meta name="viewport" content="width=device-width, initial-scale=1">
                  </head>
                  <body>
                  <div>
                  <iframe
                      id="mixcloud"
                      src=${streamUrl}
                      width="100%"
                      height="100%"
                      frameborder="0"
                      allow="autoplay"
                  >
                  </iframe>
                  </div>
                </html>
          `,
        }}
      />
    );
  }

  return null;
};

export default Mixcloud;
