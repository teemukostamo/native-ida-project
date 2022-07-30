import React, {useContext} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {Title, Text} from 'react-native-paper';

import {AppContext} from '../../contexts/main';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const ScheduleView = () => {
  const {state} = useContext(AppContext);
  const {fullSchedule} = state;

  console.log('state at schedule', fullSchedule?.helsinki);

  return fullSchedule ? (
    <ScrollView style={styles.container}>
      {fullSchedule.tallinn.length > 0 && (
        <View>
          <Title>TALLINN</Title>
          {fullSchedule.tallinn.map(
            day =>
              day.schedule.length > 0 && (
                <View>
                  <Title>{day.day}</Title>
                  {day.schedule.map(show => (
                    <Text>
                      {show.episode_time.episode_start} {show.show_title}
                    </Text>
                  ))}
                </View>
              ),
          )}
        </View>
      )}
      {fullSchedule.helsinki.length > 0 && (
        <View>
          <Title>HELSINKI</Title>
          {fullSchedule.helsinki.map(
            day =>
              day.schedule.length > 0 && (
                <View>
                  <Title>{day.day}</Title>
                  {day.schedule.map(show => (
                    <Text>
                      {show.episode_time.episode_start} {show.show_title}
                    </Text>
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
