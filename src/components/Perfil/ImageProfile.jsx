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
    alignItems: 'center'
  },
  imageProfile: {
    width: 200,
    height: 200,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: '#e3e3e3',
    borderStyle: 'solid',
    overflow: 'hidden',
    marginBottom: 18
  },
  imgSrc: {
    width: 200,
    height: 200,
    resizeMode: 'contain'
  }
})

export default ImageProfile;
