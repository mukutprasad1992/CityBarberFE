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
    secondaryphone: "",
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
    const {
      primaryphone,
      secondaryphone,
      country,
      state,
      city,
      address,
      pincode,
    } = userData;

    // if (
    //   !primaryphone ||
    //   !secondaryphone ||
    //   !country ||
    //   !state || 
    //   !city ||
    //   !address ||
    //   !pincode
    // ) {
    //   alert("All field Are Required");
    //   return;
    // }
    navigation.navigate("Login");
    console.log(userData);
  };

  return (
    <Background>
      <SafeAreaView>
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
                      width={300}
                      secureTextEntry={true}
                      value={userData.primaryphone}
                      onChangeText={(text: any) =>
                        handleChange("phoneNumber", text)
                      }
                    />
                  </View>
                </View>
              </View>
              <View style={{ flexDirection: "column", marginBottom: 15 }}>
                <Text style={{ fontSize: 10 }}>Secondary Phone</Text>
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
                      value={userData.secondaryphone}
                      onChangeText={(text: any) =>
                        handleChange("secondaryphone", text)
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
                      onChangeText={(text: any) => handleChange("state", text)}
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
                      keyboardType={"numeric"}
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
              {/* <View style={{justifyContent:"center",alignItems:"center"}}>
           <TouchableOpacity style={styles.camera}>
          <Image source={require("../../../public/images/CameraIcon.png")} style={{height:40,width:40}} />
        </TouchableOpacity>
        </View> */}
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
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  cartContainer: {
    width: 350,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    margin: 20,
    marginTop: 50,
  },

  textsign: {
    color: "#ddd",
    position: "absolute",
    top: 480,
    left: 125,
    fontSize: 12,
  },
  title: {
    fontWeight: "800",
    position: "absolute",
    fontSize: 40,
    fontFamily: "",
    color: "white",
    top: 50,
  },
  buttonContainer: {
    position: "absolute",
    top: 290,
    left: 40,
  },
  cart: {
    position: "absolute",
    top: 130,
    width: 400,
    height: 700,
    backgroundColor: "#fff",
    borderRadius: 50,
  },
  button: {
    backgroundColor: "black",
    fontSize: 25,
    top: 290,
    width: 250,
    height: 50,
    marginHorizontal: 120,
    // marginVertical:120,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    zIndex: 1,

    // right:-120,
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
    top: 500,
    left: 100,
  },
  camera: {
    borderColor: "#003f5c",
    borderWidth: 2,
    borderRadius: 50,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Provider;
