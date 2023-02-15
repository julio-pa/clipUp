import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import HeaderProfile from '../components/Perfil/HeaderProfile';
import Profile from '../components/Perfil/Profile';
import Header from '../components/VideoPlayer/Header';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';


const Stack = createNativeStackNavigator()
const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={VideoPlayer}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
