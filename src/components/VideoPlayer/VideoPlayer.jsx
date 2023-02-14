import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { Video, AVPlaybackStatus } from 'expo-av';
import demoVid from '../../img/demoClipup.mp4'
import NavBar from '../NavBar/NavBar';


const VideoPlayer = ({ navigation }) => {

  const Navigate = () => {
    navigation.navigate('Profile', { name: 'Frank' })
  }
  const foo = () => {
    return (
      <View>
        <Text>Is better</Text>
      </View>
    )
  }

  return (
    <GestureHandlerRootView style={styles.mainContainer}>
      <Swipeable renderRightActions={foo} onSwipeableOpen={Navigate} >
        <View style={styles.video}>
          <Video
            style={styles.video}
            source={demoVid}
            useNativeControls
            resizeMode="cover"
            isLooping
            isMuted
          />
        </View>
        <NavBar />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    backgroundColor: '#ff0',
    height: '100%',
    width: '100%',
  },
  video: {
    width: '100%',
    height: '90%',
  },
})

export default VideoPlayer;
