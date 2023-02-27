import React from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
//videoplayer
import Header from './Header';
import NavBar from '../NavBar/NavBar';
import ItemVideo from './ItemVideo/ItemVideo';
import { contentData } from '../../mock/mockData';

const ElementPlayer = () => {


  return (
    <>

      <View style={styles.cont}>
        <FlatList
          data={contentData}
          renderItem={({ item }) => <ItemVideo
            source={item.video}
            avatar={item.img}
            userName={item.userName}
          />}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          decelerationRate='normal'
          snapToOffsets={[660]}
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
