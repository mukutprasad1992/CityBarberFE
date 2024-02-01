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
import * as SecureStore from "expo-secure-store";
import forgetPassword from "./ForgotPassword";

const { width, height } = Dimensions.get("window");

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }: any) => {
  const baseFontSize = 16;
  const baseMarginPercentage = 1;
  const basePaddingPercentage = 5;

  // const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const validatePassword = (password: any) => {
    const lengthRegex = /.{8,}/;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
    return (
      lengthRegex.test(password) &&
      uppercaseRegex.test(password) &&
      lowercaseRegex.test(password) &&
      digitRegex.test(password) &&
      specialCharRegex.test(password)
    );
  };

  const validate = () => {
    var regx = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
    setButtonDisabled(true);
    if (!regx.test(email)) {
      setEmailError(true);
      setButtonDisabled(false);
    } else {
      setEmailError(false);
      if (!validatePassword(password)) {
        setPasswordError(true);
      } else {
        console.log("Getting data");
        setPasswordError(false);
        getData();
      }
    }
  };

  // const handleSignupBtn = () => {

  //    console.warn(email,password);
  // };

  const getData = async () => {
    try {
      const saveAddress = await SecureStore.getItemAsync("ADDRESS");
      const saveEmail = await SecureStore.getItemAsync("EMAIL");
      const savePassword = await SecureStore.getItemAsync("PASSWORD");
      const saveRole = await SecureStore.getItemAsync("ROLE");
      if (saveAddress && email === saveEmail && password === savePassword) {
        if (saveRole === "Consumer") {
          navigation.navigate("DashboardConsumer");
        } else if (saveRole === "Provider") {
          navigation.navigate("DashboardProvider");
        }
        console.log(saveAddress);
      } else if (
        !saveAddress &&
        email === saveEmail &&
        password === savePassword
      ) {
        if (saveRole === "Consumer") {
          navigation.navigate("Consumer");
        } else if (saveRole === "Provider") {
          navigation.navigate("Provider");
        }
      }
    } catch (error) {
      console.error("Error retrieving data:", error);
    }
  };

  const handleOnForgetPassword = () => {
    navigation.navigate("ForgetPassword");
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
                  Login
                </Text>
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
                    source={require("../../public/images/mailbox250.png")}
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
                      width={widthPercentageToDP("70%")}
                      height={heightPercentageToDP("5%")}
                      value={email}
                      onChangeText={(text: any) => {
                        setEmail(text);
                        setEmailError(false);
                      }}
                    />
                  </View>
                </View>
                {emailError === true ? (
                  <Text style={{ color: "red", fontSize: 8 }}>
                    ⚠️ Please enter valid email id
                  </Text>
                ) : null}
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
                    source={require("../../public/images/key100.png")}
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
                      value={password}
                      secureTextEntry={true}
                      onChangeText={(text: any) => {
                        setPassword(text);
                        setPasswordError(false);
                      }}
                    />
                  </View>
                </View>
                <View style={{}}>
                  <View style={{ width: widthPercentageToDP("80%") }}>
                    {passwordError === true ? (
                      <Text
                        style={{ color: "red", fontSize: 8, flexWrap: "wrap" }}
                      >
                        ⚠️ Password must be at least 8 characters long and
                        contain at least one number, one uppercase letter, one
                        lowercase letter, and one special character.
                      </Text>
                    ) : null}
                  </View>
                </View>
              </View>
              <View style={{ width: widthPercentageToDP("97%") }}>
                <TouchableOpacity
                  style={{ position: "absolute", right: 5, top: 5 }}
                  onPress={handleOnForgetPassword}
                >
                  <Text style={{ fontSize: 12, color: "#003f5c" }}>
                    Forgot Password ?
                  </Text>
                </TouchableOpacity>
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
                    btnLabel={"Login"}
                    textColor={"#fff"}
                    onPress={() => validate()}
                    disabled={buttonDisabled}
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

export default Login;
