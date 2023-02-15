import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import NavBar from '../NavBar/NavBar';
import ElementPlayer from './ElementPlayer';


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
        <ElementPlayer />
        <NavBar />
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
})

export default VideoPlayer;
