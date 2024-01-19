import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";
import React, { Component, useState } from "react";
import Background from "../component/Background";
import Btn from "../component/Btn";
import InputField from "../component/InputField";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const { width, height } = Dimensions.get("window");

const ResetPasswordScreen = () => {
  const baseFontSize = 16;
  const baseMarginPercentage = 5;
  const basePaddingPercentage = 5;

  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

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
                    fontSize: baseFontSize * (width / 450),
                    color: "#003f5c",
                  }}
                >
                  Reset Password
                </Text>
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
                      width={widthPercentageToDP("60%")}
                      height={heightPercentageToDP("5%")}
                      value={data.password}
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  Confirm Password
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
                      width={widthPercentageToDP("60%")}
                      height={heightPercentageToDP("5%")}
                      value={data.password}
                      secureTextEntry={true}
                    />
                  </View>
                </View>
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
                    btnLabel={"Submit"}
                    textColor={"#fff"}
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
    color: "#000",
    fontSize: 12 * (width / 600),
    marginHorizontal: height * (10 / 100),
    
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

export default ResetPasswordScreen;
