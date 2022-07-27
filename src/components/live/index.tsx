import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';

import Tallinn from './Tallinn';
import Helsinki from './Helsinki';
import NowPlayingBar from '../nowPlaying';
import {AppContext} from '../../contexts/main';

//import TrackPlayer, {TrackType} from 'react-native-track-player';

//function to initialize the Track Player
// const trackPlayerInit = async () => {
//   await TrackPlayer.setupPlayer();
//   await TrackPlayer.add({
//     id: '1',
//     url: 'https://stream.radio.co/s435d71fd8/listen',
//     type: TrackType.SmoothStreaming,
//     title: 'My Title',
//     album: 'My Album',
//     artist: 'Rohan Bhatia',
//     artwork: 'https://picsum.photos/100',
//   });
//   return true;
// };

const styles = StyleSheet.create({
  liveContainer: {
    flex: 1,
  },
});

const LiveView: React.FC = () => {
  const {state} = useContext(AppContext);
  //state to manage whether track player is initialized or not
  //const [isTrackPlayerInit, setIsTrackPlayerInit] = useState(false);

  // useEffect(() => {
  //   const startPlayer = async () => {
  //     let isInit = await trackPlayerInit();
  //     setIsTrackPlayerInit(isInit);
  //   };
  //   startPlayer();
  // }, []);

  // const onPress = () => {
  //   console.log('pressed play on helsinki');
  //   // TrackPlayer.play();
  //   dispatch({
  //     type: 'PLAY_HELSINKI',
  //   });
  // };

  return state.live ? (
    <View style={styles.liveContainer}>
      <View style={styles.liveContainer}>
        <Tallinn nowPlaying={state.nowPlaying} liveState={state.live} />
        <Helsinki nowPlaying={state.nowPlaying} liveState={state.live} />
      </View>
      <NowPlayingBar />
    </View>
  ) : null;
};

export default LiveView;
