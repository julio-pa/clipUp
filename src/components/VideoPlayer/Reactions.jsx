import React, { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const Reactions = ({avatar}) => {

  const [like, setLike] = useState(false);

  return (
    <View style={styles.reactions}>
      <View style={styles.avatar}>
        <Image source={avatar} style={styles.img} />
      </View>
      <Actions icon={<AntDesign onPress={() => setLike(!like)}  name="heart" size={35} color={like ? 'red' : 'white'} />}/>
      <Actions icon={<FontAwesome name="commenting" size={35} color="white" />}/>
      <Actions icon={<FontAwesome name="share" size={35} color="white" />}/>
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
    marginBottom: 15
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
    overflow: 'hidden'
  },
  img:{
    width: 60,
    height: 60,
    resizeMode: 'cover',
    overflow: 'hidden'
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
