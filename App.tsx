
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Signup from './src/users/Signup';
import Consumer from './src/users/Consumer/Consumer';
import Provider from './src/users/Provider/Provider';
import DashboardConsumer from "./src/users/Consumer/Dashboard/DashboardConsumer"
import Login from './src/auth/Login';
import ResetPasswordScreen from './src/auth/Reset';
import Bookings from './src/users/Consumer/Dashboard/DashScreen/Bookings';
import Location from './src/users/Consumer/Dashboard/DashScreen/Location';
import Help from './src/users/Consumer/Dashboard/DashScreen/Help';
import Profile from './src/users/Consumer/Dashboard/DashScreen/Profile';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Reset" component={ResetPasswordScreen} />
        <Stack.Screen name="Provider" component={Provider} />
        <Stack.Screen name="Consumer" component={Consumer} />
        <Stack.Screen name="DashboardConsumer" component={DashboardConsumer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;