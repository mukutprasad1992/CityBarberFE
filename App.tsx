import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import "react-native-gesture-handler";
import Home from "./src/screens/Home";
import Signup from "./src/users/Signup";
import Consumer from "./src/users/Consumer/Consumer";
import Provider from "./src/users/Provider/Provider";
import DashboardConsumer from "./src/users/Consumer/Dashboard/DashboardConsumer";
import Login from "./src/auth/Login";
import ResetPassword from "./src/auth/ResetPassword";
import DashboardProvider from "./src/users/Provider/Dashboard/DashboardProvider";
import ForgotPassword from "./src/auth/ForgotPassword";
import ShopSlotDetails from "./src/users/Consumer/Dashboard/DashScreen/ShopSlotDetails";
import Bookings from "./src/users/Consumer/Dashboard/DashScreen/Bookings";
import ShopSlotSubmit from "./src/users/Consumer/Dashboard/DashScreen/ShopSlotSubmit";
import ShopSlotSuccess from "./src/users/Consumer/Dashboard/DashScreen/ShopSlotSuccess";
import ShopDetails from "./src/users/Provider/Dashboard/DashboardScreen/ShopDetails";
import AddSeatsScreen from "./src/users/Provider/Dashboard/DashboardScreen/AddSeatsScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="DashboardProvider"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ResetPassword" component={ResetPassword} />
        <Stack.Screen name="Bookings" component={Bookings} />
        <Stack.Screen name="ShopSlotDetails" component={ShopSlotDetails} />
        <Stack.Screen name="ShopDetails" component={ShopDetails} />
        <Stack.Screen name="ShopSlotSubmit" component={ShopSlotSubmit} />
        <Stack.Screen name="ShopSlotSuccess" component={ShopSlotSuccess} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Provider" component={Provider} />
        <Stack.Screen name="AddSeatsScreen" component={AddSeatsScreen} />
        <Stack.Screen name="Consumer" component={Consumer} />
        <Stack.Screen name="DashboardConsumer" component={DashboardConsumer} />
        <Stack.Screen name="DashboardProvider" component={DashboardProvider} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
