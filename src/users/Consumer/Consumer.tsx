import {
  Text,
  Dimensions,
  View,
  StyleSheet,
  Image,
  KeyboardAvoidingView,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import Background from "../../component/Background";
import Btn from "../../component/Btn";
import InputField from "../../component/InputField";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useNavigation } from "@react-navigation/native";
import { Dropdown, SelectCountry } from "react-native-element-dropdown";

const { width, height } = Dimensions.get("window");

const Consumer = () => {
  const baseFontSize = 16;
  const baseMarginPercentage = 1;
  const basePaddingPercentage = 5;

  const navigation = useNavigation<any>();

  // fields states -------->

  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [addressError, setAddressError] = useState(false);
  const [pincodeError, setPincodeError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Drop Downs States --------->
  const [countryOpen, setCountryOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState(null);
  const [countryError, setCountryError] = useState(false);

  const [stateOpen, setStateOpen] = useState(false);
  const [currentState, setCurrentState] = useState(null);
  const [stateError, setStateError] = useState(false);

  const [cityOpen, setCityOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState(null);
  const [cityError, setCityError] = useState(false);

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const CountryItem = [
    { label: "India", value: "India" },
  ];

  const StateItem = {
    India: [
      { label: "Andhra Pradesh", value: "Andhra Pradesh" },
      { label: "Arunachal Pradesh	", value: "Arunachal Pradesh	" },
      { label: "Assam", value: "Assam" },
      // { label: "Bihar", value: "Bihar" },
      // { label: "Chhattisgarh", value: "Chhattisgarh" },
      // { label: "Goa", value: "Goa" },
      // { label: "Gujarat", value: "Gujarat" },
      // { label: "Haryana", value: "Haryana" },
      // { label: "Himachal Pradesh", value: "Himachal Pradesh" },
      // { label: "Jharkhand", value: "Jharkhand" },
      // { label: "Karnataka", value: "Karnataka" },
      // { label: "Kerala", value: "Kerala" },
      // { label: "Madhya Pradesh", value: "Madhya Pradesh" },
      // { label: "Maharashtra", value: "Maharashtra" },
      // { label: "Manipur", value: "Manipur" },
      // { label: "Meghalaya", value: "Meghalaya" },
      // { label: "Mizoram", value: "Mizoram" },
      // { label: "Nagaland", value: "Nagaland" },
      // { label: "Odisha", value: "Odisha" },
      // { label: "Punjab", value: "Punjab" },
      // { label: "Rajasthan", value: "Rajasthan" },
      // { label: "Sikkim", value: "Sikkim" },
      // { label: "Tamil Nadu", value: "Tamil Nadu" },
      // { label: "Telangana", value: "Telangana" },
      // { label: "Tripura", value: "Tripura" },
      // { label: "Uttar Pradesh", value: "Uttar Pradesh" },
      // { label: "Uttarakhand", value: "Uttarakhand" },
      // { label: "West Bengal", value: "West Bengal" },
    ],
  };

  const CityItem = {
   "Andhra Pradesh" :[
    { label: "Amaravati", value: "Amaravati" },
    { label: "Guntur", value: "Guntur" },
    { label: "Kakinada", value: "Kakinada" },
    { label: "Kurnool", value: "Kurnool" },
    { label: "Tirupati", value: "Tirupati" },
    { label: "Tirupati", value: "Tirupati" },
  ],
  "Arunachal Pradesh":[
    { label: "Itanagar", value: "Itanagar" },
  ],
  "Assam":[
    { label: "Dhuburi", value: "Dhuburi" },
    { label: "Dibrugarh", value: "Dibrugarh" },
    { label: "Dispur", value: "Dispur" },
    { label: "Guwahati", value: "Guwahati" },
    { label: "Jorhat", value: "Jorhat" },  
  ],
};

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
      if (!currentCountry) {
        setCountryError(true);
        setButtonDisabled(false);
      } else {
        setCountryError(false);

        if (!currentState) {
          setStateError(true);
          setButtonDisabled(false);
        } else {
          setStateError(false);
          if (!currentCity) {
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
                // saveData();
              }
            }
          }
        }
      }
    }
  };

  const handleOnSubmit = () => {
    console.warn(
      phone,
      currentCountry,
      currentState,
      currentCity,
      address,
      pincode
    );
    navigation.navigate("Login");
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
                     <Dropdown
                data={Days}
                labelField="label"
                valueField="value"
                placeholder="Select day"
                placeholderStyle={styles.dropText}
                value={selectedDay}
                onChange={(item) => {
                  setSelectedDay(item.value);
                }}
                search
                searchPlaceholder="select days.."
              />

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
                    <Dropdown
                      style={[
                        styles.dropdown,
                        isFocus && { borderColor: "blue" },
                      ]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={StateItem[currentCountry] || []}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus ? "Select State" : "..."}
                      searchPlaceholder="Search..."
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={(item: any) => {
                        setValue(item.value);
                        setIsFocus(false);
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
                    <Dropdown
                      style={[
                        styles.dropdown,
                        isFocus && { borderColor: "blue" },
                      ]}
                      placeholderStyle={styles.placeholderStyle}
                      selectedTextStyle={styles.selectedTextStyle}
                      inputSearchStyle={styles.inputSearchStyle}
                      iconStyle={styles.iconStyle}
                      data={CityItem[currentState]}
                      search
                      maxHeight={300}
                      labelField="label"
                      valueField="value"
                      placeholder={!isFocus ? "Select City" : "..."}
                      searchPlaceholder="Search..."
                      value={value}
                      onFocus={() => setIsFocus(true)}
                      onBlur={() => setIsFocus(false)}
                      onChange={(item: any) => {
                        setValue(item.value);
                        setIsFocus(false);
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
  dropdown: {
    height: 30,
    width: widthPercentageToDP("70"),
    borderColor: "transparent",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Consumer;
