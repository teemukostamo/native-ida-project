import React from 'react';
import {View, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

import theme from '../../theme';

type Props = {
  html: string;
  channel: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DescriptionText: React.FC<Props> = ({html, channel}) => {
  return (
    <View>
      <View style={styles.container}>
        <WebView
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            height: 100,
          }}
          scalesPageToFit={true}
          bounces={false}
          javaScriptEnabled
          automaticallyAdjustContentInsets={false}
          source={{
            html: `
          <!DOCTYPE html>
          <html>
            <head>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <style>
            body {
              color:${
                channel === 'tallinn' ? theme.colors.text : theme.colors.gray
              };
              background-color: ${
                channel === 'tallinn'
                  ? theme.colors.primary
                  : theme.colors.accent
              };
              font-family: "Menlo-Bold"
            }
            </style>
            </head>
            <body>
            <div>
            ${html}
            </div>
          </html>
    `,
          }}
        />
      </View>
    </View>
  );
};

export default DescriptionText;
