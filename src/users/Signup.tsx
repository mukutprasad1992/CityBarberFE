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

  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [selectedValue, setSelectedValue] = useState(null);
  const [error, setError] = useState(false);

  const handleRadioButtonChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleInputChange = (field: string, value: any) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const Validate = () => {
    const { name, email, password } = data;

    if (!name.trim()) {
      setError(true);
      return false;
    } else if (!email.trim() || !/^[^\s@]+@gmail\.com$/.test(email)) {
      setError(true);
      return false;
    } else if (
      !password ||
      !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password) ||
      password.length < 8
    ) {
      setError(true);
      return false;
    } else {
      setError(false);
      return true;
    }
  };

  const handleSubmit = async () => {
    const url = "https://citybarberbe.onrender.com/user/register";
    if (Validate()) {
      try {
        const result = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            userType: selectedValue,
          }),
        });

        console.log(
          "Request Data:",
          JSON.stringify({
            name: data.name,
            email: data.email,
            password: data.password,
            userType: selectedValue,
          })
        );

        if (!result.ok) {
          throw new Error("API request failed");
        }

        if (selectedValue === "consumer") {
          navigation.navigate("Consumer");
        } else if (selectedValue === "provider") {
          navigation.navigate("Provider");
        }
      } catch (error) {
        console.error("Error during API call:", error);
        alert("Failed to create account. Please try again.");
      }
    }
    // console.log(data);
  };

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

              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>user name</Text>
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
                      value={data.name}
                      onChangeText={(text: any) =>
                        handleInputChange("name", text)
                      }
                    />
                  </View>
                </View>
                {error ? <Text style={styles.error}> name required</Text> : ""}
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
                      value={data.email}
                      onChangeText={(text: any) =>
                        handleInputChange("email", text)
                      }
                    />
                  </View>
                </View>
                {error ? (
                  <Text style={styles.error}> enter Valid gmail</Text>
                ) : (
                  ""
                )}
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
                      value={data.password}
                      secureTextEntry={true}
                      onChangeText={(text: any) =>
                        handleInputChange("password", text)
                      }
                    />
                  </View>
                </View>
                {error ? (
                  <Text style={styles.error}>
                    {" "}
                    Password must be at least 8 characters long and contain at
                    least one number, one uppercase letter, one lowercase
                    letter, and one special character, 'Asgar@213'
                  </Text>
                ) : (
                  ""
                )}
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
  error: {
    color: "red",
    marginRight: 300,
    fontSize: 10,
    width: 400,
  },
});

export default Signup;
