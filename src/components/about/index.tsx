import React from 'react';
import {View, StyleSheet, Pressable, Linking} from 'react-native';
import {Text, Title} from 'react-native-paper';
import BackButton from '../layout/BackButton';

import theme from '~src/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  textContainer: {
    margin: 10,
    alignSelf: 'flex-start',
  },
  textContent: {
    ...theme.fonts.light,
    color: theme.colors.darkGray,
  },
  link: {
    ...theme.fonts.light,
    color: theme.colors.green,
  },
  linkTallinn: {
    ...theme.fonts.light,
    color: theme.colors.blue,
  },
  linkHelsinki: {
    ...theme.fonts.light,
    color: theme.colors.accent,
  },
});

const AboutView = () => {
  return (
    <View style={styles.container}>
      <Title>ABOUT IDA</Title>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>
          IDA is an online community radio based in Tallinn &amp; Helsinki.
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>
          Send your music promos to:
          <Pressable
            onPress={() => Linking.openURL('mailto:promos@idaidaida.net')}>
            <Text style={styles.link}>promos@idaidaida.net</Text>
          </Pressable>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>
          Original design by:{' '}
          <Pressable
            onPress={() => Linking.openURL('https://www.wwwstuudio.ee/')}>
            <Text style={styles.link}>WWW</Text>
          </Pressable>
        </Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>IDA</Text>
        <Pressable
          onPress={() => Linking.openURL('https://soundcloud.com/ida_radio')}>
          <Text style={styles.link}>SoundCloud</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://www.mixcloud.com/IDA_RAADIO/')
          }>
          <Text style={styles.link}>MixCloud</Text>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Tallinn</Text>
        <Pressable
          onPress={() => Linking.openURL('mailto:hello@idaidaida.net')}>
          <Text style={styles.linkTallinn}>hello@idaidaida.net</Text>
        </Pressable>
        <Pressable
          onPress={() => Linking.openURL('https://www.facebook.com/IDARadio/')}>
          <Text style={styles.linkTallinn}>Facebook</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://www.instagram.com/ida.radio/')
          }>
          <Text style={styles.linkTallinn}>Instagram</Text>
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textContent}>Helsinki</Text>
        <Pressable
          onPress={() => Linking.openURL('mailto:helsinki@idaidaida.net')}>
          <Text style={styles.linkHelsinki}>helsinki@idaidaida.net</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://www.facebook.com/IDAhelsinki/')
          }>
          <Text style={styles.linkHelsinki}>Facebook</Text>
        </Pressable>
        <Pressable
          onPress={() =>
            Linking.openURL('https://www.instagram.com/idahelsinki/')
          }>
          <Text style={styles.linkHelsinki}>Instagram</Text>
        </Pressable>
      </View>
      <BackButton />
    </View>
  );
};

export default AboutView;
