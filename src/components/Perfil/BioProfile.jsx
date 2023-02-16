import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BioProfile = () => {
  return (
    <>
      <View style={styles.bio}>
        <Text style={styles.textBio}>No bio yet 🔥😆</Text>
      </View>
      <View style={styles.line}></View>
    </>
  );
}

const styles = StyleSheet.create({
  bio: {
    marginTop: 15,
  },
  textBio: {
    fontSize: 15
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#999999',
    marginTop: 6,
    marginBottom: 10,
  }
})

export default BioProfile;
