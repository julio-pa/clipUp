import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.main}>
      <Text style={styles.icon}>Physical</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main:{
    backgroundColor: '#000',
    height: '10%',
  },
  icon:{
    color:'#fff',
  }
})

export default NavBar;
