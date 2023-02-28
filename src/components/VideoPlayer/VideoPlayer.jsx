import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import ElementPlayer from './ElementPlayer';
import { FontAwesome } from '@expo/vector-icons';


const VideoPlayer = ({ navigation }) => {
  
  const Navigate = () => {
    navigation.navigate('Profile');
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
      <Swipeable renderRightActions={foo} onSwipeableOpen={Navigate}>
        <ElementPlayer />
      </Swipeable>
      <StatusBar style={{ color: '#fff' }}></StatusBar>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default VideoPlayer;
