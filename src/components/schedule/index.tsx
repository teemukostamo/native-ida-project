import React from 'react';
import {useNavigate} from 'react-router-native';
import useSchedule from '~src/hooks/useSchedule';
import ScheduleContent from './ScheduleContent';
import Loading from '../layout/Loading';
import Error from '../layout/Error';

const ScheduleView = () => {
  const {data, isError, isLoading} = useSchedule();
  let navigate = useNavigate();

  const handlePress = (show_title: string, show_id: number) => {
    navigate(`/shows/${show_title}/${show_id}`);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return <ScheduleContent fullSchedule={data} handlePress={handlePress} />;
};

export default ScheduleView;
