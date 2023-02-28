import React, { useContext, useEffect } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
//videoplayer
import Header from './Header';
import NavBar from '../NavBar/NavBar';
import ItemVideo from './ItemVideo/ItemVideo';
// import { contentData } from '../../mock/mockData';
import UserContext from '../../context/UserInfo/UserContext';

const ElementPlayer = () => {
  //TODO: acceder al contexto
  const { users, getUsers } = useContext(UserContext);

  useEffect(() => {
    getUsers()
  }, []);


  return (
    <>

      <View style={styles.cont}>
        <FlatList
          data={users}
          renderItem={({ item }) => <ItemVideo
            source={item.video}
            avatar={item.img}
            userName={item.userName}
          />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          decelerationRate='normal'
          snapToInterval={660}
          style={styles.scroll}
        />
        <Header />
      </View>
      <NavBar />
    </>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#ff0',
    width: '100%',
    
  },
  scroll: {
    display: 'flex',
    height: 660
  },
})

export default ElementPlayer;
