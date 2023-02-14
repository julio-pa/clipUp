import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';


const Profile = ({ navigation, route }) => {

  const Navigate = () => {
    navigation.goBack()
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
      <Swipeable renderLeftActions={foo} onSwipeableOpen={Navigate}>
        <View style={styles.mainContainer}>
          <Text>this is the perfil of {route.params.name}</Text>
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

export default Profile;
