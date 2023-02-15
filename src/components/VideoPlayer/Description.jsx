import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Description = () => {
  return (
    <View style={styles.description}>
      <Text style={styles.userText}>@Username</Text>
      <Text style={styles.descText}>lorem ipsum dolor sit amet gat rowlas</Text>
      <Text style={styles.hashText}>#Hastags #interface #Leo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  description:{
    position: 'absolute',
    width: 200,
    display:'flex',
    flexDirection: 'column',
    columnGap: 3,
    alignItems:'flex-start',
    left: 10,
    bottom:100,
  },
  userText:{
    color: '#fff',
    fontSize: 22,
    marginBottom: 3
  },
  descText:{
    color: '#fff',
    fontSize: 17,
    marginBottom: 6
  },
  hashText:{
    color: '#fff',
    fontSize: 17,
    fontWeight:'bold'
  },
})

export default Description;
