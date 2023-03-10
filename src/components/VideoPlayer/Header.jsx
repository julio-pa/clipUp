import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Siguiendo</Text>
      <Text style={styles.forYou}>Para ti</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header:{
    position: 'absolute',
    top:7,
    backgroundColor: 'transparent',
    height: 56,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text:{
    color: '#fff',
    fontSize: 20,
    marginRight:10
  },
  forYou:{
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationColor:'#fff',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  }
})

export default Header;
