import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Background from "../component/Background";
import Logo from "../component/Logo";
import Btn from "../component/Btn";
import { useNavigation } from "@react-navigation/native";
import Signup from "../users/Signup";
import Login from "../auth/Login";

interface HomeScreenProps{
  navigation :any
}

const Home : React.FC<HomeScreenProps>= ({navigation}: any) => {

  const handleSignupBtn = () => {
    navigation.navigate("Signup");
  };
  const handleLoginBtn = () => {
    navigation.navigate("Login");
  };

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>City Barber</Text>

        <View style={styles.signBtn}>
          <Btn
            bgColor={"tomato"}
            btnLabel={"Sign up"}
            textColor={"#fff"}
            onPress={handleSignupBtn}
          />
        </View>
        <View style={styles.LoginBtn}>
          <Btn
            bgColor={"tomato"}
            btnLabel={"Login"}
            textColor={"#fff"}
            onPress={handleLoginBtn}
          />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    height: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    position: "absolute",
    width: "100%",
    textAlign: "center",
    top: 200,
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },

  LoginBtn: {
    position: "absolute",
    top: 500,
    width: 300,
  },

  signBtn: {
    position: "absolute",
    top: 580,
    width: 300,
  },
});

export default Home;
