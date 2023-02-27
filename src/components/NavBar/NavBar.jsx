import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const NavBar = () => {
  return (
    <View style={styles.main}>
      <Sections icon={<Entypo name="home" size={30} color="white" />} text='Inicio' />
      <Sections icon={<Ionicons name="people" size={30} color="white" />} text='Amigos' />
      <View style={styles.record}>
        <Entypo name="plus" size={24} color="black" />
      </View>
      <Sections icon={<MaterialCommunityIcons name="message-minus-outline" size={30} color="white" />} text='Bandeja' />
      <Sections icon={<Octicons name="person" size={30} color="white" />} text='Perfil' />
    </View>
  );
}
const styles = StyleSheet.create({
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: '#000',
    height: 73,
    width:'100%',
  },
  icon: {
    color: '#fff',
  },
  sections: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textSections: {
    color: '#fff'
  },
  record:{
    backgroundColor: '#fff',
    width: 55,
    height: 40,
    borderRadius: 12,
    borderLeftColor: '#66C0D0',
    borderLeftWidth: 5,
    borderRightColor:'#DE3C62',
    borderRightWidth: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    marginVertical: 7,
  }
})

const Sections = ({ icon, text }) => {
  return (
    <View style={styles.sections}>
      <TouchableOpacity style={{ justifyContent: 'center' }}>
        {icon}
      </TouchableOpacity>
      <Text style={styles.textSections}>{text}</Text>
    </View>
  )
}

export default NavBar;
