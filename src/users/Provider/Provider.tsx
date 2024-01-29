import {
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import React, { Component, useState } from "react";
import Background from "../../component/Background";
import Logo from "../../component/Logo";
import { Card } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import InputField from "../../component/InputField";
import Btn from "../../component/Btn";
import { useNavigation } from "@react-navigation/native";
import Home from "../../screens/Home";
import DropDownPicker from "react-native-dropdown-picker";
import Login from "../../auth/Login";
const Provider = () => {
  const navigation: any = useNavigation();

  // fields states -------->

  const [primaryphone, setPrimaryPhone] = useState();
  const [phoneError, setPhoneError] = useState("");
  const [gst, setGst] = useState();
  const [address, setAddress] = useState();
  const [addressError, setAddressError] = useState("");
  const [pin, setPin] = useState();
  const [pinError, setPinError] = useState("");

  // Drop Downs States --------->

  const [countryOpen, setCountryOpen] = useState(false);
  const [currentCountry, setCurrentCountry] = useState("");
  const [countryError, setCountryError] = useState("");

  const [stateOpen, setStateOpen] = useState(false);
  const [currentState, setCurrentState] = useState("");
  const [stateError, setStateError] = useState("");

  const [cityOpen, setCityOpen] = useState(false);
  const [currentCity, setCurrentCity] = useState("");
  const [cityError, setCityError] = useState("");

  const Country = [
    { label: "India", value: "India" },
    {
      label: "AMERICA",
      value: "AMERICA",
    },
    {
      label: "NEWYORK",
      value: "NEWYORK",
    },
  ];

  const State = [
    { label: "Madhya Pardesh", value: "Madhya Pardesh" },
    {
      label: "Bihar",
      value: "Bihar",
    },
    {
      label: "Uttar Pardesh",
      value: "Uttar Pardesh",
    },
  ];

  const City = [
    { label: "Bhopal", value: "Bhopal" },
    {
      label: "Indore",
      value: "Indore",
    },
  ];

  const cityValidate = () => {
    if (!currentCity) {
      setCityError("select Your City");
      return false;
    } else {
      setCityError("");
      return true;
    }
  };
  const stateValidate = () => {
    if (!currentState) {
      setStateError("select Your state");
      return false;
    } else {
      setStateError("");
      return true;
    }
  };

  const countryValidate = () => {
    if (!currentCountry) {
      setCountryError("select Your country");
      return false;
    } else {
      setCountryError("");
      return true;
    }
  };

  const validatePhone = () => {
    if (!primaryphone) {
      setPhoneError("phone no required");
      return false;
    } else if (!/^\d{10}$/.test(primaryphone)) {
      setPhoneError("phone number should be 10 digit");
      return false;
    } else {
      setPhoneError("");
      return true;
    }
  };

  const validateAddress = () => {
    if (!address) {
      setAddressError("Enter Your Address ");
      return false;
    } else {
      setAddressError("");
      return true;
    }
  };

  const validatePin = () => {
    if (!pin) {
      setPinError("Enter Pin Code ");
      return false;
    } else if (!/^\d{6}$/.test(pin)) {
      setPinError("Pincode should be 6 digit ");
      return false;
    } else {
      setPinError("");
      return true;
    }
  };

  const phoneSubmit = (text: any) => {
    setPrimaryPhone(text);
    validatePhone();
  };

  const gstSubmit = (text: any) => {
    setGst(text);
  };

  const addressSubmit = (text: any) => {
    setAddress(text);
    validateAddress();
  };

  const pinSubmit = (text: any) => {
    setPin(text);
    validatePin();
  };

  const handleSubmit = () => {
    if (
      validatePhone() &&
      countryValidate() &&
      stateValidate() &&
      cityValidate() &&
      validateAddress() &&
      validatePin()
    ) {
      navigation.navigate("Login");
    } else {
      validatePhone() &&
        countryValidate() &&
        stateValidate() &&
        cityValidate() &&
        validateAddress() &&
        validatePin();
    }
  };

  return (
    <Background>
      <SafeAreaView>
        <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>CityBarber</Text>
            <View style={styles.cart}>
              <View style={styles.cartContainer}>
                <View style={{ flexDirection: "column", marginBottom: 15 }}>
                  <Text style={{ fontSize: 10 }}>Primary Phone</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.6,
                    }}
                  >
                    <Image
                      source={require("../../../public/images/telephone.png")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        autoComplete="off"
                        keyboardType="numeric"
                        width={300}
                        value={primaryphone}
                        onChangeText={phoneSubmit}
                      />
                    </View>
                  </View>
                  {phoneError ? (
                    <Text style={styles.error}>{phoneError}</Text>
                  ) : null}
                </View>
                <View style={{ flexDirection: "column", marginBottom: 15 }}>
                  <Text style={{ fontSize: 10 }}>GST no</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.6,
                    }}
                  >
                    <Image
                      source={require("../../../public/images/gst.jpg")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        width={300}
                        secureTextEntry={true}
                        value={gst}
                        onChangeText={gstSubmit}
                      />
                    </View>
                  </View>
                </View>

                <View>
                  <Text style={{ fontSize: 10, marginTop: 10 }}>Country</Text>
                  <View>
                    <DropDownPicker
                      open={countryOpen}
                      setOpen={() => setCountryOpen(!countryOpen)}
                      value={currentCountry}
                      items={Country}
                      setValue={(val) => setCurrentCountry(val)}
                      placeholder="Select Country"
                      style={{ zIndex: countryOpen ? 5 : 0 }}
                    />
                  </View>
                  {countryError ? (
                    <Text style={styles.error}>{countryError}</Text>
                  ) : null}
                </View>

                <View>
                  <Text style={{ fontSize: 10, marginTop: 10 }}>State</Text>
                  <View>
                    <DropDownPicker
                      open={stateOpen}
                      setOpen={() => setStateOpen(!stateOpen)}
                      value={currentState}
                      items={State}
                      setValue={(val) => setCurrentState(val)}
                      placeholder="Select State"
                      style={{ zIndex: stateOpen ? 5 : 0 }}
                    />
                  </View>
                  {stateError ? (
                    <Text style={styles.error}>{stateError}</Text>
                  ) : null}
                </View>

                <View>
                  <Text style={{ fontSize: 10, marginTop: 10 }}>City</Text>
                  <View>
                    <DropDownPicker
                      open={cityOpen}
                      setOpen={() => setCityOpen(!cityOpen)}
                      value={currentCity}
                      items={City}
                      setValue={(val) => setCurrentCity(val)}
                      placeholder="Select City"
                      style={{ zIndex: cityOpen ? 5 : 0 }}
                    />
                  </View>
                  {cityError ? (
                    <Text style={styles.error}>{cityError}</Text>
                  ) : null}
                </View>

                <View style={{ flexDirection: "column", marginTop: 10 }}>
                  <Text style={{ fontSize: 10 }}>Address</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.6,
                    }}
                  >
                    <Image
                      source={require("../../../public/images/home.png")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        width={300}
                        secureTextEntry={true}
                        value={address}
                        onChangeText={addressSubmit}
                      />
                    </View>
                  </View>
                  {addressError ? (
                    <Text style={styles.error}>{addressError}</Text>
                  ) : null}
                </View>

                <View style={{ flexDirection: "column", marginTop: 10 }}>
                  <Text style={{ fontSize: 10 }}>Pin Code</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.6,
                    }}
                  >
                    <Image
                      source={require("../../../public/images/mailbox.png")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        autoComplete="off"
                        keyboardType="numeric"
                        width={300}
                        secureTextEntry={true}
                        value={pin}
                        onChangeText={pinSubmit}
                      />
                    </View>
                  </View>
                  {pinError ? (
                    <Text style={styles.error}>{pinError}</Text>
                  ) : null}
                </View>

                <View style={{ marginBottom: 50 }}>
                  <Btn
                    bgColor={"tomato"}
                    btnLabel={"Submit"}
                    textColor={"#fff"}
                    onPress={handleSubmit}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    // flexGrow: 1,
    justifyContent: "center",
  },

  container: {
    height: 700,
    width: 400,
    marginTop: 200,
    marginLeft: 10,
    borderRadius: 20,
  },

  cart: {
    position: "absolute",
    top: 50,
    justifyContent: "center",
    alignItems: "center",
    width: 400,
    height: 600,
    backgroundColor: "#fff",
    borderRadius: 40,
  },

  cartContainer: {
    width: 350,
    justifyContent: "center",
    margin: 20,
    marginTop: 50,
  },

  title: {
    fontWeight: "800",
    position: "absolute",
    fontSize: 30,
    color: "white",
    top: -50,
    left: 120,
  },
  error: {
    color: "red",
    fontSize: 12,
    // marginRight: 300,
  },
});

export default Provider;
