import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Profile from '../Perfil/Profile';


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
    <GestureHandlerRootView>
      <Swipeable renderRightActions={foo} onSwipeableOpen={Navigate} >
        <View style={styles.mainContainer}>
          <Text>ola k ace</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#ff0'
  },
})

export default VideoPlayer;
