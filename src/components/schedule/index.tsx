import React, {useContext} from 'react';
import {useNavigate} from 'react-router-native';
import {AppContext} from '~src/contexts/main';
import ScheduleContent from './ScheduleContent';

const ScheduleView = () => {
  const {state} = useContext(AppContext);
  let navigate = useNavigate();
  const {fullSchedule} = state;

  const handlePress = (show_title: string, show_id: number) => {
    navigate(`/shows/${show_title}/${show_id}`);
  };

  return (
    <ScheduleContent fullSchedule={fullSchedule} handlePress={handlePress} />
  );
};

export default ScheduleView;
