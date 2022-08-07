import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

type Props = {
  html: string;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const DescriptionText: React.FC<Props> = ({html}) => (
  <View>
    <Text>Some Label</Text>
    <View style={styles.container}>
      <WebView
        // eslint-disable-next-line react-native/no-inline-styles
        style={{flex: 1, flexDirection: 'column', height: 100}}
        scalesPageToFit={true}
        bounces={false}
        javaScriptEnabled
        automaticallyAdjustContentInsets={true}
        source={{html: html}}
      />
    </View>
  </View>
);

export default DescriptionText;
