import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
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
          options={{ headerTitle: () => <Header/> }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
  );
}

export default AppRoutes;
