import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import React, { Component, useState } from "react";
import Background from "../component/Background";
import Btn from "../component/Btn";
import InputField from "../component/InputField";
import { RadioButton } from "react-native-paper";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Consumer from "./Consumer/Consumer";
import Provider from "./Provider/Provider";


const { width, height } = Dimensions.get("window");

const Signup = () => {
  const baseFontSize = 16;
  const baseMarginPercentage = 5;
  const basePaddingPercentage = 5;

  const navigation = useNavigation();

  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

  const [checked, setChecked] = useState('Consumer');

  const handleRadioButtonChange = (value:any) => {
    setChecked(value);
  };

  const handleSignupBtn =() =>{
    navigation.navigate(Consumer)
  }
  

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>CityBarber</Text>

        <KeyboardAvoidingView style={{ flex: 1 }} behavior="height" enabled>
          <KeyboardAwareScrollView
            contentContainerStyle={styles.container}
            resetScrollToCoords={{ x: 0, y: 0 }}
            scrollEnabled
          >
            <View style={styles.cart}>
              <View
                style={{
                  flexDirection: "row",
                  marginBottom: height * (5 / 100),
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    fontWeight: "800",
                    fontSize: 24 * (width / 450),
                    color: "#003f5c",
                  }}
                >
                  New Account
                </Text>
              </View>

              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  User Name
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../public/images/user.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: height * (baseMarginPercentage / 100),
                    }}
                  >
                    <InputField
                      width={widthPercentageToDP("70%")}
                      height={heightPercentageToDP("5%")}
                      value={data.password}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  Email
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../public/images/mail.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: height * (baseMarginPercentage / 100),
                    }}
                  >
                    <InputField
                      width={widthPercentageToDP("70%")}
                      height={heightPercentageToDP("5%")}
                      value={data.password}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  Password
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../public/images/key.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                    }}
                  />
                  <View
                    style={{
                      marginLeft: height * (baseMarginPercentage / 100),
                    }}
                  >
                    <InputField
                      fontSize={baseFontSize * (width / 100)}
                      width={widthPercentageToDP("70%")}
                      height={heightPercentageToDP("5%")}
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
                  <View style={{flexDirection:"row", justifyContent:"space-around",gap:40}}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 10,
                    }}
                  >
                    <RadioButton value="first" />
                    <Text style={{ marginLeft: 8 }}>Consumer</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 10,
                    }}
                  >
                    <RadioButton value="second" />
                    <Text style={{ marginLeft: 8 }}>Provider</Text>
                  </View>
              </View>
                </RadioButton.Group>
              </View>
              <View>
                <View
                  style={{
                    marginBottom: height * (1 / 100),
                    marginTop: width * (basePaddingPercentage / 100),
                  }}
                >
                  <Btn
                    bgColor={"tomato"}
                    btnLabel={"Sign Up"}
                    textColor={"#fff"}
                    onPress={handleSignupBtn}
                  />
                </View>
              </View>

              <Text style={styles.textsign}>----------- or -----------</Text>

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
          </KeyboardAwareScrollView>
        </KeyboardAvoidingView>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  flexDirection:"column",
    // position:"absolute",
    justifyContent: "center",
    alignItems: "center",
    // zIndex:99,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontWeight: "800",
    fontSize: 70 * (width / 700),
    fontFamily: "Roboto",
    color: "white",
    top: height * (15 / 100),
    position: "absolute",
  },

  cart: {
    //marginVertical:height * (35 / 100),
    top: height * (15 / 100),
    justifyContent: "center",
    alignItems: "center",
    width: widthPercentageToDP("97%"),
    height: heightPercentageToDP("70%"),
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  textsign: {
    color: "#ddd",
    fontSize: 12 * (width / 600),
    marginHorizontal: height * (10 / 100),
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    color: "#003f5c",
  },
  radioButtonText: {
    color: "#003f5c",
  },
  png: {
    height: heightPercentageToDP("4%"),
    width: widthPercentageToDP("8%"),
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

export default Signup;
