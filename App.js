import { NavigationContainer } from '@react-navigation/native';
import UserState from './src/context/UserInfo/UserState';
import AppRoutes from './src/routes/AppRoutes';



export default function App() {
  return (
    <NavigationContainer>
      <UserState>
        <AppRoutes />
      </UserState>
    </NavigationContainer>

  );
}

