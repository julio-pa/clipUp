import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const ImageProfile = () => {
  return (
    <View style={styles.contProfile}>
      <View style={styles.imageProfile}>
        <Image style={styles.imgSrc} source={{uri: 'https://th.bing.com/th/id/R.b40b41fc1293cf933caba267d7f172c3?rik=nECPUv%2f%2bGb4i8A&riu=http%3a%2f%2fimages6.fanpop.com%2fimage%2fphotos%2f36300000%2fAnime-Wolves-image-anime-wolves-36394958-1200-1187.jpg&ehk=HTrawVMTEf93DiJ1Sl9PLqgDzn1qVWPWMeyejWjE%2bjo%3d&risl=&pid=ImgRaw&r=0'}} />
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
