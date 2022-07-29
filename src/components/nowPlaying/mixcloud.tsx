import React from 'react';
import {WebView} from 'react-native-webview';

const Mixcloud = () => {
  const html =
    'https://www.mixcloud.com/widget/iframe/?hide_cover=1&mini=1&light=1&autoplay=1&feed=%2Fspartacus%2Fparty-time%2F';

  return (
    <WebView
      scalesPageToFit={true}
      bounces={false}
      javaScriptEnabled
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
                    src=${html}
                    width="100%"
                    height="1200"
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
};

export default Mixcloud;
