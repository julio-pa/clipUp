import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import { Octicons } from '@expo/vector-icons';
import HeaderProfile from './HeaderProfile';
import ImageProfile from './ImageProfile';
import ButtonsProfile from './ButtonsProfile';
import ValuesProfile from './ValuesProfile';
import BioProfile from './BioProfile';
import VideosProfile from './VideosProfile';


const Profile = ({ navigation, route }) => {

  const Navigate = () => {
    navigation.goBack()
  }
  const foo = () => {
    return (
      <View style={styles.slide}>
        <Octicons name="video" size={50} color="black" />
      </View>
    )
  }

  return (
    <GestureHandlerRootView>
      <Swipeable renderLeftActions={foo} onSwipeableOpen={Navigate}>
        <HeaderProfile />
        <View style={styles.mainContainer}>
          <ImageProfile />
          <ButtonsProfile />
          <ValuesProfile />
          <BioProfile />
          <VideosProfile />
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    alignItems: 'center'
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default Profile;
