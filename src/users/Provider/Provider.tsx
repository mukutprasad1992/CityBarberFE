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

const Provider = () => {
  const navigation: any = useNavigation();

  const [userData, setUserData] = useState({
    primaryphone: "",
    gstno: "",
    country: "",
    state: "",
    city: "",
    address: "",
    pincode: "",
  });

  const handleChange = (field: string, value: any) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const handleSubmit = () => {
    const { primaryphone, country, state, city, address, pincode } = userData;

    if (!primaryphone || !country || !state || !city || !address || !pincode) {
      alert("GST will be optional and all field Are Required");
      return;
    } else {
      navigation.navigate("Login");
      console.log(userData);
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
                <View
                  style={{
                    flexDirection: "row",
                    marginBottom: 20,
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      fontWeight: "800",
                      fontSize: 18,
                      color: "#003f5c",
                    }}
                  >
                    Provider
                  </Text>
                </View>
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
                        maxLength={10}
                        autoComplete="off"
                        keyboardType="numeric"
                        width={300}
                        value={userData.primaryphone}
                        onChangeText={(text: any) =>
                          handleChange("primaryphone", text)
                        }
                      />
                    </View>
                  </View>
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
                      source={require("../../../public/images/telephone.png")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        width={300}
                        secureTextEntry={true}
                        value={userData.gstno}
                        onChangeText={(text: any) =>
                          handleChange("gstno", text)
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "column", marginBottom: 15 }}>
                  <Text style={{ fontSize: 10 }}>Country</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.6,
                    }}
                  >
                    <Image
                      source={require("../../../public/images/countries.png")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View>
                      <View style={{ marginLeft: 20 }}>
                        <InputField
                          width={300}
                          value={userData.country}
                          onChangeText={(text: any) =>
                            handleChange("country", text)
                          }
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "column", marginBottom: 15 }}>
                  <Text style={{ fontSize: 10 }}>State</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.6,
                    }}
                  >
                    <Image
                      source={require("../../../public/images/state.png")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        width={300}
                        value={userData.state}
                        onChangeText={(text: any) =>
                          handleChange("state", text)
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "column", marginBottom: 15 }}>
                  <Text style={{ fontSize: 10 }}>City</Text>
                  <View
                    style={{
                      flexDirection: "row",
                      borderBottomColor: "#000",
                      borderBottomWidth: 0.6,
                    }}
                  >
                    <Image
                      source={require("../../../public/images/city.png")}
                      style={{ width: 18, height: 18, marginTop: 5 }}
                    />
                    <View style={{ marginLeft: 20 }}>
                      <InputField
                        width={300}
                        secureTextEntry={true}
                        value={userData.city}
                        onChangeText={(text: any) => handleChange("city", text)}
                      />
                    </View>
                  </View>
                </View>
                <View style={{ flexDirection: "column", marginBottom: 15 }}>
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
                        value={userData.address}
                        onChangeText={(text: any) =>
                          handleChange("address", text)
                        }
                      />
                    </View>
                  </View>
                </View>

                <View style={{ flexDirection: "column", marginBottom: 15 }}>
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
                        value={userData.pincode}
                        onChangeText={(text: any) =>
                          handleChange("pincode", text)
                        }
                      />
                    </View>
                  </View>
                </View>
                <View style={{ marginBottom: 50, marginTop: 0 }}>
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
});

export default Provider;
