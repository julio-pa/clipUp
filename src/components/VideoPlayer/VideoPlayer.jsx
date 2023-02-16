import React from 'react';
import { FlatList, StatusBar, StyleSheet, View } from 'react-native';
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import ElementPlayer from './ElementPlayer';
import { FontAwesome } from '@expo/vector-icons';
import { contentData } from '../../mock/mockData';


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
      <Swipeable renderRightActions={foo} onSwipeableOpen={Navigate} >
        <FlatList
          data={contentData}
          renderItem={({ item }) => <ElementPlayer 
          source={item.video}
          avatar={item.img}
          userName={item.userName}
           />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          pagingEnabled={true}
        />
      </Swipeable>
      <StatusBar style={{ color: '#fff' }}></StatusBar>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    width: '100%',
  },
  slide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default VideoPlayer;
