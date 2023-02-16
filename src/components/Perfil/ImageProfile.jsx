import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import userImage from '../../img/Logo-Dev.png'

const ImageProfile = () => {
  return (
    <View style={styles.contProfile}>
      <View style={styles.imageProfile}>
        <Image style={styles.imgSrc} source={userImage} />
      </View>
      <Text style={{ fontSize: 17, fontWeight: '500' }}>@Your Name</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contProfile: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop:10,
  },
  imageProfile: {
    width: 150,
    height: 150,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: '#e3e3e3',
    borderStyle: 'solid',
    overflow: 'hidden',
    marginBottom: 18
  },
  imgSrc: {
    width: 150,
    height: 150,
    resizeMode: 'contain'
  }
})

export default ImageProfile;
