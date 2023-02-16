import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const VideosProfile = () => {
  return (
    <>

      <View style={styles.videosProfile}>
        <View style={styles.iconsVid}>
          <Ionicons name="grid" size={24} color="black" />
          <AntDesign name="hearto" size={24} color="black" />
        </View>
      </View>
      <ScrollView style={{ width: '100%', height: '100%', marginTop: 7, }}>
        <Grid />
        <Grid />
        <Grid />
        <Grid />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  videosProfile: {
    width: '100%',
  },
  iconsVid: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  gridContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    height: 200,
  },
  grid: {
    width: '33.33%',
    height: 200,
    borderWidth: 1,
    borderColor: '#fff',
    borderStyle: 'solid',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999'
  },
})

const Grid = () => {
  return (
    <View style={styles.gridContainer}>
      <View style={styles.grid}>
        <Entypo name="note" size={40} color="white" />
      </View>
      <View style={styles.grid}>
        <Entypo name="note" size={40} color="white" />
      </View>
      <View style={styles.grid}>
        <Entypo name="note" size={40} color="white" />
      </View>
    </View>
  )
}

export default VideosProfile;
