import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


//TODO: Implementar la navegación atras en el icono de flecha
const HeaderProfile = () => {
  return (
    <View style={styles.userProfile}>
      <Ionicons style={{marginLeft: 9}} name="chevron-back" size={26} color="black" />
      <Text style={{fontSize: 17, fontWeight: '500'}}>User Example</Text>
      <MaterialCommunityIcons style={{marginRight: 9}} name="dots-vertical" size={26} color="black" />
    </View>
  );
}

const styles = StyleSheet.create({
  userProfile: {
    width: '100%',
    height: 70,
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end'
  },
})

export default HeaderProfile;
