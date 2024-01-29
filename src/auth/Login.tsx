import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  TextInput,
} from "react-native";
import React, { Component, useState } from "react";
import Background from "../component/Background";
import Btn from "../component/Btn";
import InputField from "../component/InputField";
import Home from "../screens/Home";
import { useNavigation } from "@react-navigation/native";
import Dashboard from "../users/Provider/Dashboard/Dashboard";
import { Button } from "react-native-paper";

const Login = () => {
  const navigation: any = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");

  const validateEmail = () => {
    if (!email) {
      setErrorEmail("Email is required");
      return false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail("Invalid email address");
      return false;
    } else {
      setErrorEmail("");
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setErrorPassword("Password is required");
      return false;
    } else if (password.length < 8) {
      setErrorPassword("Password must be at least 8 characters long");
      return false;
    } else if (
      !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(
        password
      )
    ) {
      setErrorPassword(
        "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      );
      return false;
    } else {
      setErrorPassword("");
      return true;
    }
  };

  const handleEmailChange = (text: any) => {
    setEmail(text);
    validateEmail();
  };

  const handlePasswordChange = (text: any) => {
    setPassword(text);
    validatePassword();
  };

  const handleSubmit = () => {
    if (validateEmail() && validatePassword()) {
      navigation.navigate("Dashboard");
    } else {
      validateEmail();
      validatePassword();
    }
  };

  const onForgot = () => {
    navigation.navigate("Forgot");
  };

  return (
    <Background>
      <SafeAreaView>
        <View style={styles.container}>
          <Text style={styles.title}>CityBarber</Text>

          <View style={styles.cart}>
            <View style={styles.cartContainer}>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: 20,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{ fontWeight: "800", fontSize: 18, color: "#003f5c" }}
                >
                  Login
                </Text>
              </View>

              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>Email</Text>

                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../public/images/mail.png")}
                    style={{ width: 18, height: 18, marginTop: 5 }}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <InputField
                      keyboardType={"email-address"}
                      width={300}
                      placeholder="Email"
                      onChangeText={handleEmailChange}
                      value={email}
                    />
                  </View>
                </View>
                {errorEmail ? (
                  <Text style={styles.error}>{errorEmail}</Text>
                ) : null}
              </View>
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>Password</Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../public/images/key.png")}
                    style={{ width: 18, height: 18, marginTop: 5 }}
                  />
                  <View style={{ marginLeft: 20 }}>
                    <InputField
                      width={300}
                      placeholder="Password"
                      onChangeText={handlePasswordChange}
                      value={password}
                      secureTextEntry={true}
                    />
                  </View>
                </View>
                {errorPassword ? (
                  <Text style={styles.error}>{errorPassword}</Text>
                ) : null}
              </View>
              <View>
                <TouchableOpacity onPress={onForgot}>
                  <Text
                    style={{
                      fontSize: 10,
                      color: "#003f5c",
                      position: "absolute",
                      right: 5,
                      marginTop: 10,
                    }}
                  >
                    Forgot Password?
                  </Text>
                </TouchableOpacity>
                <View style={{ marginBottom: 20, marginTop: 30 }}>
                  <Btn
                    bgColor={"tomato"}
                    btnLabel={"Submit"}
                    textColor={"#fff"}
                    onPress={handleSubmit}
                  />
                </View>
                <Text style={styles.textsign}>or</Text>

                <View style={styles.pnglogo}>
                  <TouchableOpacity style={styles.png}>
                    <Image
                      style={styles.png}
                      source={require("../../public/images/google.jpg")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.png}>
                    <Image
                      style={styles.png}
                      source={require("../../public/images/facebook.jpg")}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity style={styles.png}>
                    <Image
                      style={styles.png}
                      source={require("../../public/images/twitter.jpg")}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // position:"absolute",
    justifyContent: "center",
    alignItems: "center",
    // zIndex:99,
    height: "100%",
  },
  cartContainer: {
    width: 350,
    height: "90%",
    backgroundColor: "#fff",
    // borderRadius:50,
    margin: 20,
  },

  title: {
    fontWeight: "800",
    position: "absolute",
    fontSize: 30,
    fontFamily: "Roboto",
    color: "white",
    top: 150,
  },
  buttonContainer: {
    position: "absolute",
    top: 290,
    left: 40,
  },
  cart: {
    position: "absolute",
    top: 250,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 600,
    backgroundColor: "#fff",
    borderRadius: 50,
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
  textsign: {
    color: "#003f5c",
    fontSize: 12,
    marginLeft: "50%",
  },
  png: {
    height: 30,
    width: 30,
    marginHorizontal: 100,
  },

  pnglogo: {
    height: 60,
    width: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  error: {
    color: "red",
    marginRight: 300,
    fontSize: 10,
    width: 300,
  },
});

export default Login;
