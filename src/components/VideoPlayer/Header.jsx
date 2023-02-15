import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Siguiendo | Para ti</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: '#000',
    height: 56,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: '#fff',
    fontSize: 25
  }
})

export default Header;
