
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Reset from './src/auth/Reset';
import Signup from './src/users/Signup';
import Consumer from './src/users/Consumer/Consumer';
import Provider from './src/users/Provider/Provider';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Provider' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Provider" component={Provider} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Consumer" component={Consumer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;