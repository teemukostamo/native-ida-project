import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Title, Text} from 'react-native-paper';
import {format, parseISO} from 'date-fns';

import {AppContext} from '../../contexts/main';

import theme from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerHelsinki: {
    backgroundColor: theme.colors.gray,
    paddingTop: 20,
  },
  containerTallinn: {
    backgroundColor: theme.colors.text,
    paddingTop: 20,
  },
  studioNameTallinn: {
    fontSize: 25,
    fontWeight: '900',
    alignSelf: 'center',
    marginBottom: 10,
    color: theme.colors.primary,
  },
  studioNameHelsinki: {
    fontSize: 25,
    fontWeight: '900',
    alignSelf: 'center',
    marginBottom: 10,
    color: theme.colors.accent,
  },
  dayContainer: {
    paddingBottom: 35,
  },
  day: {
    alignSelf: 'center',
    margin: 1,
  },
  dayTextContainer: {
    marginBottom: 10,
  },
  dayTextTallinn: {
    fontSize: 18,
    color: theme.colors.primary,
  },
  dayTextHelsinki: {
    fontSize: 18,
    color: theme.colors.accent,
  },
  showContainer: {
    flexDirection: 'row',
  },
  timeContainer: {
    paddingLeft: 1,
  },
  timeTextTallinn: {
    color: theme.colors.primary,
    fontFamily: 'Menlo-Bold',
  },
  timeTextHelsinki: {
    color: theme.colors.accent,
    fontFamily: 'Menlo-Bold',
  },
  titleContainer: {
    paddingLeft: 30,
    width: 310,
  },
  titleTextTallinn: {
    fontFamily: 'Menlo-Bold',
    color: theme.colors.primary,
    flexShrink: 1,
  },
  titleTextHelsinki: {
    fontFamily: 'Menlo-Bold',
    flex: 1,
    flexWrap: 'wrap',
    color: theme.colors.accent,
  },
});

const ScheduleView = () => {
  const {state} = useContext(AppContext);
  const {fullSchedule} = state;

  return fullSchedule ? (
    <ScrollView style={styles.container}>
      {fullSchedule.tallinn.length > 0 && (
        <View style={styles.containerTallinn}>
          <Title style={styles.studioNameTallinn}>Tallinn</Title>
          {fullSchedule.tallinn.map(
            (day, index) =>
              day.schedule.length > 0 && (
                <View style={styles.dayContainer} key={index}>
                  <View style={styles.dayTextContainer}>
                    <View style={styles.day}>
                      <Text style={styles.dayTextTallinn}>
                        {format(parseISO(day.day), 'EEEE')}
                      </Text>
                    </View>
                    <View style={styles.day}>
                      <Text style={styles.dayTextTallinn}>
                        {format(parseISO(day.day), 'dd.MM')}
                      </Text>
                    </View>
                  </View>
                  {day.schedule.map(show => (
                    <View
                      key={show.episode_time.episode_start}
                      style={styles.showContainer}>
                      <View style={styles.timeContainer}>
                        <Text style={styles.timeTextTallinn}>
                          {format(
                            parseISO(show.episode_time.episode_start),
                            '	kk:mm',
                          )}
                        </Text>
                      </View>
                      <View style={styles.titleContainer}>
                        <Text style={styles.titleTextTallinn}>
                          {show.show_title}
                          {show.subtitle && ` - ${show.subtitle}`}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              ),
          )}
        </View>
      )}
      {fullSchedule.helsinki.length > 0 && (
        <View style={styles.containerHelsinki}>
          <Title style={styles.studioNameHelsinki}>Helsinki</Title>
          {fullSchedule.helsinki.map(
            (day, index) =>
              day.schedule.length > 0 && (
                <View style={styles.dayContainer} key={index}>
                  <View style={styles.dayTextContainer}>
                    <View style={styles.day}>
                      <Text style={styles.dayTextHelsinki}>
                        {format(parseISO(day.day), 'EEEE')}
                      </Text>
                    </View>
                    <View style={styles.day}>
                      <Text style={styles.dayTextHelsinki}>
                        {format(parseISO(day.day), 'dd.MM')}
                      </Text>
                    </View>
                  </View>
                  {day.schedule.map(show => (
                    <View
                      key={show.episode_time.episode_start}
                      style={styles.showContainer}>
                      <View style={styles.timeContainer}>
                        <Text style={styles.timeTextHelsinki}>
                          {format(
                            parseISO(show.episode_time.episode_start),
                            '	kk:mm',
                          )}
                        </Text>
                      </View>
                      <View style={styles.titleContainer}>
                        <Text style={styles.titleTextHelsinki}>
                          {show.show_title}
                          {show.subtitle && ` - ${show.subtitle}`}
                        </Text>
                      </View>
                    </View>
                  ))}
                </View>
              ),
          )}
        </View>
      )}
    </ScrollView>
  ) : null;
};

export default ScheduleView;
