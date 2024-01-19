import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React, { Component, useState } from "react";
import Background from "../component/Background";
import { RadioButton } from "react-native-paper";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../component/InputField";
import Btn from "../component/Btn";
import { useNavigation } from "@react-navigation/native";
import Consumer from "./Consumer/Consumer";
import Provider from "./Provider/Provider";

const Signup = () => {
  const navigation: any = useNavigation();

  const [checked, setChecked] = useState("first");

  const [data, setData] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = ({ name, value }: any) => {
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    navigation.navigate(Provider);
  };

  return (
    <Background>
      {/* <SafeAreaView> */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
                  New Account{" "}
                </Text>
              </View>
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>User Name</Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../public/images/user.png")}
                    style={{ width: 18, height: 18, marginTop: 5 }}
                  />
                  <View>
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        width={300}
                        value={data.userName}
                        //  onChangeText={(value:any) => handleInputChange('firstName',value)}
                      />
                    </View>
                  </View>
                </View>
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
                      value={data.email}
                    />
                  </View>
                </View>
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
                      keyboardType={"numeric"}
                      width={300}
                      value={data.password}
                      secureTextEntry={true}
                    />
                  </View>
                </View>
              </View>
              <View>
                <RadioButton.Group
                  onValueChange={(value) => setChecked(value)}
                  value={checked}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View style={styles.radioButton}>
                      <RadioButton value="first" />
                      <Text style={styles.radioButtonText}>Consumer</Text>
                    </View>
                    <View style={styles.radioButton}>
                      <RadioButton value="second" />
                      <Text style={styles.radioButtonText}>Provider</Text>
                    </View>
                  </View>
                </RadioButton.Group>
              </View>

              <View style={{ marginBottom: 20, marginTop: 0 }}>
                <Btn
                  bgColor={"tomato"}
                  btnLabel={"Sign Up"}
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
      </ScrollView>
      {/* </SafeAreaView> */}
    </Background>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },

  container: {
    height: 700,
    width: 400,
    marginTop: 200,
    marginLeft: 10,
    borderRadius: 20,
  },
  cartContainer: {
    width: 350,
    height: "100%",
    margin: 20,
  },

  title: {
    fontWeight: "800",
    position: "absolute",
    fontSize: 30,
    fontFamily: "Roboto",
    color: "white",
    top: 0,
    left: 150,
  },
  buttonContainer: {
    position: "absolute",
    top: 290,
    left: 40,
  },
  cart: {
    position: "absolute",
    top: 150,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 500,
    backgroundColor: "#fff",
    borderRadius: 40,
  },

  button: {
    backgroundColor: "black",
    fontSize: 25,
    // top: 290,
    width: 250,
    height: 50,
    marginHorizontal: 120,
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
  },

  pnglogo: {
    height: 60,
    width: 150,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    top: 400,
    left: 100,
  },
  radioButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonText: {
    color: "#003f5c",
  },
});

export default Signup;
