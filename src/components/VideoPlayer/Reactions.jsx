import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import avatar from '../../img/Logo-Dev.png'

const Reactions = () => {

  const [like, setLike] = useState(false);

  return (
    <View style={styles.reactions}>
      <View style={styles.avatar}>
        <Image source={avatar} style={styles.img} />
      </View>
      <Actions icon={<AntDesign onPress={() => setLike(!like)}  name="heart" size={50} color={like ? 'red' : 'white'} />}/>
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
    bottom:130,
  },
  actions:{
    display: 'flex',
    alignItems: 'center',
    marginBottom: 5
  },
  textActions:{
    color:'#fff'
  },
  avatar:{
    display: 'flex',
    alignItems:'center',
    justifyContent: 'center',
    borderColor: '#fff',
    borderWidth: 1,
    height: 60,
    width: 60,
    borderRadius: 50,
    marginBottom: 15,
  },
  img:{
    width: 50,
    height: 50,
    resizeMode: 'contain'
  }
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
