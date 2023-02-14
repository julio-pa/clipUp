import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const NavBar = () => {
  return (
    <View style={styles.main}>
      <Text>Physical</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  main:{
    backgroundColor: '#f00',
    marginTop:0
  }
})

export default NavBar;
