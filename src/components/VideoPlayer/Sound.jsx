import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const Sound = () => {
  return (
    <View style={styles.sound}>
      <View style={styles.songName}>
        <Entypo name="beamed-note" size={30} color="white" />
        <Text style={styles.soundText}>Song name - Artist unknuon</Text>
      </View>
      <FontAwesome5 style={styles.disc} name="compact-disc" size={50} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  sound: {
    position: 'absolute',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    columnGap: 3,
    alignItems: 'center',
    left: 10,
    bottom: 20,
    justifyContent: 'space-between'
  },
  soundText: {
    color: '#fff',
    fontSize: 16
  },
  songName:{
    display: 'flex', 
    flexDirection: 'row', 
    alignItems: 'center'
  },
  disc:{
    marginRight: 25
  }
})

export default Sound;
