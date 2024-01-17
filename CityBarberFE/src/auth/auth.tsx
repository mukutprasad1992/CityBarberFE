import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
  Button,
} from "react-native";
import ForgotPassword from "./forgotPassword";
import { useNavigation } from "@react-navigation/native";

export default function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation<any>();

  const navigateRegister = () => {
    return alert("hy this is Register page");
  };

  const isEmailValid = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLoginPress = () => {
    if (!isEmailValid(email)) {
      alert("Please enter a valid email address");
      return;
    }

    if (password.trim() === "") {
      alert("Please enter a password");
      return;
    }
  };

  const onForgotPasswordClick = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../public/images/bgimage.jpg")}
        style={styles.bgimage}
      />
      <Text style={styles.title}>CityBarber App</Text>

      <View style={styles.root}>
        <Text style={styles.heading}>Welcome Back</Text>

        <TextInput
          placeholder="Email"
          placeholderTextColor="#003f5c"
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
          placeholder="Password"
          placeholderTextColor="#003f5c"
          style={styles.input}
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity
          style={styles.forgotPasswordContainer}
          onPress={onForgotPasswordClick}
        >
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLoginPress}>
          <Text style={{ color: "#fff" }}>Sign In</Text>
        </TouchableOpacity>

        <Text style={{color:"#ddd"}}>or sign in with</Text>

        <View style={styles.pnglogo}>

          <TouchableOpacity style={styles.png}>
            <Image
              style={styles.png}
              source={require("../../public/images/google.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.png}>
            <Image
              style={styles.png}
              source={require("../../public/images/facebook.png")}
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.png}>
            <Image
              style={styles.png}
              source={require("../../public/images/twitter.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    alignItems: "center",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    position: "relative",
  },
  bgimage: {
    height: 1000,
    width: 450,
    justifyContent: "center",
    flex: 1,
    opacity: 0.9,
  },

  root: {
    height: 700,
    width: "100%",
    padding: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 250,
  },
 
  title: {
    position: "absolute",
    fontSize: 50,
    fontWeight: "800",
    color: "#fff",
    top: 90,
  },

  heading: {
    fontSize: 25,
    marginBottom: 40,
    fontWeight: "500",
    color: "#003f5c",
  },

  input: {
    height: 50,
    borderColor: "#ddd",
    // borderWidth: 1,
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 16,
    width: "90%",
    backgroundColor: "#fff",
  },
  button: {
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
    width: "88%",
    backgroundColor: "tomato",
  },
  forgotPasswordContainer: {
    alignItems: "flex-end",
    marginRight: 20,
    marginBottom: 16,
    width: "100%",
  },
  linkText: {
    color: "#3498db",
    fontWeight: "bold",
    fontSize: 14,
    marginTop: 8,
    // marginBottom: 20
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
  },
});
