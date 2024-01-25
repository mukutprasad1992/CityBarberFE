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
import Background from "../../component/Background";
import Btn from "../../component/Btn";
import InputField from "../../component/InputField";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import DashboardConsumer from './Dashboard/DashboardConsumer';

const { width, height } = Dimensions.get("window");

const Consumer = () => {
  const baseFontSize = 16;
  const baseMarginPercentage = 5;
  const basePaddingPercentage = 5;

  const navigation = useNavigation();

  const [data, setData] = useState({
    password: "",
    confirmPassword: "",
  });

const handleOnSubmit =() =>{
   navigation.navigate(DashboardConsumer)
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
                  Consumer
                </Text>
              </View>

              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  Phone
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../../public/images/telephone.png")}
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
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  Country
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../../public/images/countries.png")}
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
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  City
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../../public/images/city.png")}
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
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  State
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../../public/images/state.png")}
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
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  Address
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../../public/images/home.png")}
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
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                Pin Code
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../../public/images/mailbox.png")}
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
                    onPress={handleOnSubmit}
                  />
                </View>
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
    top: height * (8 / 100),
    position: "absolute",
  },

  cart: {
    //marginVertical:height * (35 / 100),
    top: height * (10 / 100),
    justifyContent: "center",
    alignItems: "center",
    width: widthPercentageToDP("97%"),
    height: heightPercentageToDP("90%"),
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

export default Consumer;
