import { Video } from 'expo-av';
import React, { useRef, useState } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Description from './Description';
import Reactions from './Reactions';
import Sound from './Sound';
import { FontAwesome5 } from '@expo/vector-icons';

const ItemVideo = ({source,avatar, userName}) => {
  const video = useRef()

  const [status, setStatus] = useState({});
  const [pause, setPause] = useState(false);
  return (
    <View style={styles.cont}>
      <Video
        ref={video}
        style={styles.video}
        source={source}
        resizeMode="cover"
        isLooping
        onPlaybackStatusUpdate={status => { setStatus(() => status); }}
        icon={{
          play: <FontAwesome5 name="play" size={24} color="black" />
        }}
      />
      <TouchableOpacity style={pause ? styles.pause : styles.buttons} onPress={() => {
        status.isPlaying ? video.current.pauseAsync() : video.current.playAsync(); setPause(!pause)
      }}>
        <FontAwesome5 name="play" size={70} color="white" />
      </TouchableOpacity>
      <Reactions avatar={avatar} />
      <Description user={userName} />
      <Sound />
    </View>
  );
}

const styles = StyleSheet.create({
  cont:{
    // height: 660
  },
  video: {
    width: '100%',
    height: 660
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

export default ItemVideo;
