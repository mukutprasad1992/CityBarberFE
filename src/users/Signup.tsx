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

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorUsername, setErrorUsername] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const [errorOption, setErrorOption] = useState("");

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

  const validateUsername = () => {
    if (!username) {
      setErrorUsername("Username is required");
      return false;
    } else {
      setErrorUsername("");
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

  const handleUsernameChange = (text: any) => {
    setUsername(text);
    validateUsername();
  };

  const handleRadioButtonChange = (value: string) => {
    setSelectedValue(value);
    optionsValidation();
  };
  const optionsValidation = () => {
    if (!selectedValue) {
      setErrorOption("Select any Options");
      return false;
    } else {
      setErrorOption("");
      return true;
    }
  };

  const handleSubmit = () => {
    if (
      validateEmail() &&
      validatePassword() &&
      validateUsername() &&
      optionsValidation()
    ) {
      if (selectedValue === "consumer") {
        navigation.navigate("Consumer");
      } else if (selectedValue === "provider") {
        navigation.navigate("Provider");
      }
    } else {
      validateEmail();
      validatePassword();
      validateUsername();
      optionsValidation();
    }
  };

  // for api------>
  // const handleSubmit = async () => {
  //   const url = "https://citybarberbe.onrender.com/user/register";
  //   if (Validate()) {
  //     try {
  //       const result = await fetch(url, {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name: data.name,
  //           email: data.email,
  //           password: data.password,
  //           userType: selectedValue,
  //         }),
  //       });

  //       console.log(
  //         "Request Data:",
  //         JSON.stringify({
  //           name: data.name,
  //           email: data.email,
  //           password: data.password,
  //           userType: selectedValue,
  //         })
  //       );

  //       if (!result.ok) {
  //         throw new Error("API request failed");
  //       }

  //       if (selectedValue === "consumer") {
  //         navigation.navigate("Consumer");
  //       } else if (selectedValue === "provider") {
  //         navigation.navigate("Provider");
  //       }
  //     } catch (error) {
  //       console.error("Error during API call:", error);
  //       alert("Failed to create account. Please try again.");
  //     }
  //   }
  //   // console.log(data);
  // };

  return (
    <Background>
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
              <View>
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
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        width={300}
                        placeholder="Username"
                        onChangeText={handleUsernameChange}
                        value={username}
                      />
                    </View>
                  </View>
                  {errorUsername ? (
                    <Text style={styles.error}>{errorUsername}</Text>
                  ) : null}
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
                <RadioButton.Group
                  onValueChange={(value) => handleRadioButtonChange(value)}
                  value={selectedValue}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-around",
                    }}
                  >
                    <View style={styles.radioButton}>
                      <RadioButton.Item label="consumer" value="consumer" />
                    </View>
                    <View style={styles.radioButton}>
                      <RadioButton.Item label="provider" value="provider" />
                    </View>
                  </View>
                </RadioButton.Group>

                {errorOption ? (
                  <Text
                    style={{ textAlign: "center", color: "red", fontSize: 12 }}
                  >
                    {errorOption}
                  </Text>
                ) : null}
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
    height: 530,
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
  error: {
    color: "red",
    marginRight: 300,
    fontSize: 8,
    width: 300,
  },
});

export default Signup;
