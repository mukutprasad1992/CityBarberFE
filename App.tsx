import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/screens/Home";
import Reset from "./src/auth/Reset";
import Signup from "./src/users/Signup";
import Consumer from "./src/users/Consumer/Consumer";
import Provider from "./src/users/Provider/Provider";
import Login from "./src/auth/Login";
import Forgot from "./src/auth/Forgot";
import Dashboard from "./src/users/Provider/Dashboard/Dashboard";
import { AddShop } from "./src/users/Provider/Dashboard/DashScreen/AddShop";
import { ShopList } from "./src/users/Provider/Dashboard/DashScreen/ShopList";
import Help from "./src/users/Provider/Dashboard/DashScreen/Help";
import { Profile } from "./src/users/Provider/Dashboard/DashScreen/Profile";
import { Location } from "./src/users/Provider/Dashboard/DashScreen/Location";
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Provider" component={Provider} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Reset" component={Reset} />
        <Stack.Screen name="Consumer" component={Consumer} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddShop" component={AddShop} />
        <Stack.Screen name="Help" component={Help} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="ShopList" component={ShopList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
