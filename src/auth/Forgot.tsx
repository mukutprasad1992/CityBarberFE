import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
} from "react-native";
import React, { Component, useState } from "react";
import Background from "../component/Background";
import Btn from "../component/Btn";
import InputField from "../component/InputField";
import Home from "../screens/Home";
import { useNavigation } from "@react-navigation/native";

const Forgot = () => {
  const navigation: any = useNavigation();
  const [userdata, setUserdata] = useState("");

  const handleClick = () => {
    if (!userdata.trim()) {
      alert("enter email or user id");
    } else {
      navigation.navigate("Home");
    }
    console.log(userdata)
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
                  Forgot Password
                </Text>
              </View>

              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>email or user Id</Text>
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
                      onChangeText={setUserdata}
                      value={userdata}
                    />
                  </View>
                </View>
              </View>
              <View>
                <View style={{ marginBottom: 20, marginTop: 30 }}>
                  <Btn
                    bgColor={"tomato"}
                    btnLabel={"Forgot"}
                    textColor={"#fff"}
                    onPress={handleClick}
                  />
                </View>
                <Text
                  style={{ color: "#003f5c", fontSize: 12, marginLeft: "50%" }}
                >
                  or
                </Text>
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
    color: "#ddd",
    fontSize: 12,
    marginHorizontal: 120,
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
});

export default Forgot;
