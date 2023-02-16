import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const ValuesProfile = () => {
  return (
    <View style={styles.valuesProfile}>
      <Values number='203K' title='Seguidos' />
      <Values number='1.7M' title='Seguidores' />
      <Values number='7.1M' title='Likes' />
    </View>
  );
}

const styles = StyleSheet.create({
  valuesProfile: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'row',
    width: '70%',
    justifyContent: 'space-between',
    alignItems:'center'
  },
  itemValues:{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  numberItem:{
    fontWeight: '500',
    fontSize: 22
  },
  titleItem:{
    color: '#999999',
    fontSize: 15,
  },
})

const Values = ({ number, title }) => {
  return (
    <View style={styles.itemValues}>
      <Text style={styles.numberItem}>{number}</Text>
      <Text style={styles.titleItem}>{title}</Text>
    </View>
  )
}

export default ValuesProfile;
