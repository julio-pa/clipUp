import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import NavBar from '../NavBar/NavBar';
import ElementPlayer from './ElementPlayer';
import { FontAwesome } from '@expo/vector-icons';


const VideoPlayer = ({ navigation }) => {

  const Navigate = () => {
    navigation.navigate('Profile', { name: 'Frank' })
  }
  const foo = () => {
    return (
      <View style={styles.slide}>
        <FontAwesome name="user-circle-o" size={50} color="black" />
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
  slide:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default VideoPlayer;
