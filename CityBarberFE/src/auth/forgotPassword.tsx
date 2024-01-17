import { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const ForgotPassword = () => {
  const [uservalue, setUserValue] = useState("");

  const onsubmit = () => {
    if (uservalue.trim() === "") {
      alert("Please enter a email or userName");
      return;
    } else {
      alert(" Forgot Passwordcheck your Gamail:");
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../public/images/bgimage.jpg")}
        style={styles.bgimage}
      />
      <View style={styles.root}>
        <Text style={styles.title}>Forgot Password</Text>

        <TextInput
          placeholder="enter Email or UserName"
          placeholderTextColor="#003f5c"
          style={styles.input}
          secureTextEntry={false}
          value={uservalue}
          onChangeText={(text) => setUserValue(text)}
        />
        <TouchableOpacity style={styles.btn} onPress={onsubmit}>
          <Text style={{ color: "#fff" }}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    margin: "auto",
    alignItems: "center",
    width: "100%",
    height: "auto",
    justifyContent: "center",
    position: "relative",
  },

  root: {
    height: 600,
    width: "100%",
    // width: 390,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop: 370,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },

  bgimage: {
    height: 1000,
    width: 450,
    // position: "absolute",
    justifyContent: "center",
    flex: 1,
    opacity: 0.6,
  },
  input: {
    height: 55,
    borderColor: "#ddd",
    borderBottomWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    width: "80%",
    backgroundColor: "#fff",
  },

  btn: {
    width: 200,
    borderRadius: 10,
    backgroundColor: "tomato",
    alignItems: "center",
    marginTop: 50,
    padding: 15,
  },
});
