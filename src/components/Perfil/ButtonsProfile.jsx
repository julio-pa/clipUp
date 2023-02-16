import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


const ButtonsProfile = () => {
  return (
    <View style={styles.buttonsProfile} >
      <TouchableOpacity style={styles.follow}>
        <Text style={styles.followText}>Seguir</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.camera}>
        <Feather name="camera" size={24} color="white" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.arrow}>
        <MaterialIcons name="keyboard-arrow-down" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsProfile: {
    width: '70%',
    display: 'flex',
    flexDirection: 'row',
    gap: '4rem',
    marginTop: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  follow: {
    backgroundColor: '#EE3D57',
    width: '70%',
    height: 30,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginRight: 10,
  },
  followText: {
    color: '#fff',
    fontWeight: '500',
  },
  camera: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999',
    height: 30,
    width: '15%',
    borderRadius: 5,
    marginRight: 10,
  },
  arrow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#999999',
    height: 30,
    width: '15%',
    borderRadius: 5,
  },
})

export default ButtonsProfile;
