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
import Background from "../../component/Background";
import Btn from "../../component/Btn";
import InputField from "../../component/InputField";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import Login from "../../auth/Login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as SecureStore from "expo-secure-store";

const { width, height } = Dimensions.get("window");


const Provider = () => {
  const navigation = useNavigation<any>();
  const baseFontSize = 16;
  const baseMarginPercentage = 1;
  const basePaddingPercentage = 5;

  const [phone, setPhone] = useState("");
  const [GSTNo, setGSTNo] = useState("");
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneError, setPhoneError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [stateError, setStateError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [pincodeError, setPincodeError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validatePhoneNumber = (phone: any) => {
    const cleanedPhoneNumber = phone.replace(/\D/g, "");
    const digitsOnlyRegex = /^\d+$/;
    const desiredLength = 10;
    return (
      digitsOnlyRegex.test(cleanedPhoneNumber) &&
      cleanedPhoneNumber.length === desiredLength
    );
  };

  const validatePincode = (pincode: any) => {
    const cleanedPincode = pincode.replace(/\D/g, "");
    const digitsOnlyRegex = /^\d+$/;
    const desiredLength = 6;
    return (
      digitsOnlyRegex.test(cleanedPincode) &&
      cleanedPincode.length === desiredLength
    );
  };

  const validate = () => {
    setButtonDisabled(true);
    if (!validatePhoneNumber(phone)) {
      setPhoneError(true);
      setButtonDisabled(false);
    } else {
      setPhoneError(false);
      if (!country.trim()) {
        setCountryError(true);
        setButtonDisabled(false);
      } else {
        setCountryError(false);
        if (!state.trim()) {
          setStateError(true);
          setButtonDisabled(false);
        } else {
          setStateError(false);
          if (!city.trim()) {
            setCityError(true);
            setButtonDisabled(false);
          } else {
            setCityError(false);
            if (!address.trim()) {
              setAddressError(true);
              setButtonDisabled(false);
            } else {
              setAddressError(false);
              if (!validatePincode(pincode)) {
                setPincodeError(true);
                setButtonDisabled(false);
              } else {
                setPincodeError(false);
                handleOnSubmit();
                saveData();
              }
            }
          }
        }
      }
    }
  };

  const handleOnSubmit = () => {
    console.warn(phone, country, state, city, address, pincode, GSTNo);
    navigation.navigate("Login");
  };

  const saveData = async () => {
    try {
      await SecureStore.setItemAsync("PHONE", phone);
      await SecureStore.setItemAsync("GSTNo", GSTNo);
      await SecureStore.setItemAsync("COUNTRY", country);
      await SecureStore.setItemAsync("STATE", state);
      await SecureStore.setItemAsync("CITY", city);
      await SecureStore.setItemAsync("ADDRESS", address);
      await SecureStore.setItemAsync("PINCODE", pincode);
    } catch (error) {
      console.error("Error Consumer saving data :", error);
    }
  };

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
                  Provider
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
                    source={require("../../../public/images/phone.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                      tintColor: "tomato",
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
                      value={phone}
                      keyboardType="numeric"
                      onChangeText={(text: any) => {
                        setPhone(text);
                        setPhoneError(false);
                      }}
                    />
                  </View>
                </View>
                {phoneError === true ? (
                  <Text style={{ color: "red", fontSize: 8 }}>
                    ⚠️ Please enter valid number
                  </Text>
                ) : null}
              </View>
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: baseFontSize * (width / 700) }}>
                  GST No.
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    borderBottomColor: "#000",
                    borderBottomWidth: 0.6,
                  }}
                >
                  <Image
                    source={require("../../../public/images/GST.png")}
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
                      value={GSTNo}
                      onChangeText={(text: any) => {
                        setGSTNo(text);
                      }}
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
                    source={require("../../../public/images/earth100.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                      tintColor: "tomato",
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
                      value={country}
                      onChangeText={(text: any) => {
                        setCountry(text);
                        setCountryError(false);
                      }}
                    />
                  </View>
                </View>
                {countryError === true ? (
                  <Text style={{ color: "red", fontSize: 8 }}>
                    ⚠️ Please enter required field
                  </Text>
                ) : null}
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
                    source={require("../../../public/images/country100.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                      tintColor: "tomato",
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
                      value={state}
                      onChangeText={(text: any) => {
                        setState(text);
                        setStateError(false);
                      }}
                    />
                  </View>
                </View>
                {stateError === true ? (
                  <Text style={{ color: "red", fontSize: 8 }}>
                    ⚠️ Please enter required field
                  </Text>
                ) : null}
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
                    source={require("../../../public/images/building100.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                      tintColor: "tomato",
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
                      value={city}
                      onChangeText={(text: any) => {
                        setCity(text);
                        setCityError(false);
                      }}
                    />
                  </View>
                </View>
                {cityError === true ? (
                  <Text style={{ color: "red", fontSize: 8 }}>
                    ⚠️ Please enter required field
                  </Text>
                ) : null}
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
                    source={require("../../../public/images/homefilled.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                      tintColor: "tomato",
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
                      value={address}
                      onChangeText={(text: any) => {
                        setAddress(text);
                        setAddressError(false);
                      }}
                    />
                  </View>
                </View>
                {addressError === true ? (
                  <Text style={{ color: "red", fontSize: 8 }}>
                    ⚠️ Please enter required field
                  </Text>
                ) : null}
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
                    source={require("../../../public/images/mailbox250.png")}
                    style={{
                      width: widthPercentageToDP("5"),
                      height: heightPercentageToDP("2.5"),
                      marginTop: 5,
                      tintColor: "tomato",
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
                      value={pincode}
                      keyboardType="numeric"
                      onChangeText={(text: any) => {
                        setPincode(text);
                        setPincodeError(false);
                      }}
                    />
                  </View>
                </View>
                {pincodeError === true ? (
                  <Text style={{ color: "red", fontSize: 8 }}>
                    ⚠️ Please enter required field
                  </Text>
                ) : null}
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
                    onPress={() => validate()}
                    disabled={buttonDisabled}
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
    justifyContent: "center",
    alignItems: "center",
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
    top: height * (6 / 100),
    position: "absolute",
  },

  cart: {
    //marginVertical:height * (35 / 100),
    top: height * (8 / 100),
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

export default Provider;
