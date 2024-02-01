
import { Text, View } from "react-native";
import React, { Component } from "react";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";

const Help = () => {
  let [fontsLoaded] = useFonts({
    Merriweather: require("../../../../../assets/fonts/Merriweather-Regular.ttf"),
    Roboto: require("../../../../../assets/fonts/Roboto-Regular.ttf"),
    Oswald: require("../../../../../assets/fonts/Oswald-VariableFont_wght.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontFamily: 'Merriweather', fontSize: 34 }}>
        Help
      </Text>
      <Text style={{ fontFamily: "Roboto", fontSize: 34 }}>Help</Text>
      <Text style={{ fontFamily: "Oswald", fontSize: 34 }}>
        Help
      </Text>
    </View>
  );
};

export default Help;