// AppNavigator.js
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "./src/auth/auth";
import ForgotPassword from "./src/auth/forgotPassword";
import SignUpProvider from "./src/component/SignupProvider";
const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignUpProvider"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Auth" component={SignUpProvider} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="SignUpProvider" component={SignUpProvider} />
      </Stack.Navigator>
    </NavigationContainer>


  );
};

export default AppNavigator;
