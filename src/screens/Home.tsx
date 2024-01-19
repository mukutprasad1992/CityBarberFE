import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import Background from "../component/Background";
import Logo from "../component/Logo";
import Btn from "../component/Btn";
import { useNavigation } from "@react-navigation/native";
import Signup from "../users/Signup";
import Login from "../auth/Login";

const Home = () => {
  const navigation = useNavigation();

  const handleSignupBtn = () => {
    navigation.navigate(Signup);
  };
  const handleLoginBtn = () => {
    navigation.navigate(Login);
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
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    top: 200,
    fontWeight: "bold",
    fontSize: 30,
    color: "white",
  },
  signBtn: {
    position: "absolute",
    top: 590,
    left: 40,
    width: 300,
  },
  LoginBtn: {
    position: "absolute",
    top: 500,
    left: 40,
    width: 300,
  },
  button: {
    backgroundColor: "black",
    fontSize: 25,
    top: 290,
    width: 250,
    height: 50,
    marginHorizontal: 120,
    // marginVertical:120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,

    // right:-120,
  },
});

export default Home;
