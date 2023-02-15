import React, { useRef, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import demoVid from '../../vid/demoClipup.mp4';
//videoplayer
import { FontAwesome5 } from '@expo/vector-icons';
import Reactions from './Reactions';
import Description from './Description';

const ElementPlayer = () => {

  const video = useRef()

  const [status, setStatus] = useState({});
  const [pause, setPause] = useState(false);
  return (
    <>

      <View style={styles.cont}>
        <Video
          ref={video}
          style={styles.video}
          source={demoVid}
          resizeMode="cover"
          isLooping
          isMuted
          shouldPlay={false}
          onPlaybackStatusUpdate={status => setStatus(() => status)}
          icon={{
            play: <FontAwesome5 name="play" size={24} color="black" />
          }}
        />
        <TouchableOpacity style={pause ? styles.pause : styles.buttons} onPress={() => {
          status.isPlaying ? video.current.pauseAsync() : video.current.playAsync(); setPause(!pause)
        }}>
          <FontAwesome5 name="play" size={70} color="white" />
        </TouchableOpacity>
        <Reactions />
        <Description/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#ff0',
    height: '100%',
    width: '100%',
  },
  cont: {

  },
  video: {
    width: '100%',
    height: 610,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    right: '40%',
    opacity: 1,
  },
  pause: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '40%',
    right: '40%',
    opacity: 0
  }
})

export default ElementPlayer;
