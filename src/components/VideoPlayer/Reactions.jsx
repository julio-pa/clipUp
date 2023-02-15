import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Reactions = () => {
  return (
    <View style={styles.reactions}>
      <Actions icon={<AntDesign  name="heart" size={50} color="white" />}/>
      <Actions icon={<FontAwesome name="commenting" size={50} color="white" />}/>
      <Actions icon={<FontAwesome name="share" size={50} color="white" />}/>
    </View>
  );
}

const styles = StyleSheet.create({
  reactions:{
    position: 'absolute',
    display:'flex',
    flexDirection: 'column',
    columnGap: 3,
    alignItems:'center',
    right: 10,
    bottom:200,
  },
  actions:{
    display: 'flex',
    alignItems: 'center',
  },
  textActions:{
    color:'#fff'
  },
})

// const randomNumber = () => Math.floor(Math.random() * 10000);
 
const Actions = ({icon}) => {
  return(
    <View style={styles.actions}>
      <TouchableOpacity>
        {icon}
      </TouchableOpacity>
      <Text style={styles.textActions}>7337</Text>
    </View>
  )
}

export default Reactions;
