import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import CameraScreen from '../components/camera/Camera';
import Profile from '../components/Perfil/Profile';
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
      <Stack.Screen 
        name="Camera"
        component={CameraScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default AppRoutes;
