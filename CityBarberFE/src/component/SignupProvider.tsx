import { useState } from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Picker,
} from "react-native";

const SignUpProvider = () => {
  const [user, setUser] = useState("");
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.root}
    >
      <ScrollView>
        <View style={styles.root}>
          <ImageBackground
            source={require("../../public/images/bgimage.jpg")}
            style={styles.bgimage}
          />

          <View style={styles.container}>
            <Text style={styles.heading}>Signup as a Provider</Text>

            <TextInput
              placeholder=" Full Name"
              placeholderTextColor="#003f5c"
              secureTextEntry={false}
              style={styles.input}
            />

            <TextInput
              placeholder="Enter primary phoe number"
              keyboardType="numeric"
              placeholderTextColor="#003f5c"
              secureTextEntry={false}
              style={styles.input}
              maxLength={10}
            />
            <TextInput
              placeholder="Enter secondary phone number"
              keyboardType="numeric"
              placeholderTextColor="#003f5c"
              secureTextEntry={false}
              style={styles.input}
              maxLength={10}
            />

            <TextInput
              placeholder="Enter your Email"
              placeholderTextColor="#003f5c"
              secureTextEntry={false}
              style={styles.input}
            />
            <TextInput
              placeholder="Enter pin code"
              placeholderTextColor="#003f5c"
              secureTextEntry={false}
              style={styles.input}
              maxLength={6}
              keyboardType={"numeric"}
            />

            <TextInput
              editable
              multiline
              numberOfLines={4}
              maxLength={4}
              placeholder="Enter your Full Address"
              style={[styles.textArea, { padding: 10 }]}
            />

            <TouchableOpacity style={styles.btn}>
              <Text style={{ color: "#fff", textAlign: "center" }}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpProvider;

const styles = StyleSheet.create({
  root: {
    margin: 0,
    padding: 0,
    width: 450,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    // overflow: "scroll",
    // backgroundColor: "black",
  },

  bgimage: {
    position: "absolute",
    height: 1000,
    width: 450,
    justifyContent: "center",
    flex: 1,
    // opacity: 0.6,
  },

  container: {
    alignItems: "center",
    width: "100%",
    padding: 0,
    height: 900,
    backgroundColor: "#fff",
    top: 150,
    // left: 10,
    borderTopRightRadius: 80,
    borderTopLeftRadius: 80,
    overflow: "scroll",
    marginTop: 50,
  },

  heading: {
    fontSize: 20,
    marginTop: 80,
    fontWeight: "800",
    color: "black",
    textAlign: "center",
  },

  input: {
    height: 50,
    borderColor: "#ddd",
    borderRadius: 8,
    paddingHorizontal: 10,
    // marginBottom: 16,
    marginTop: 20,
    width: 400,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },

  textArea: {
    width: 400,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    width: "90%",
    borderRadius: 8,
    marginTop: 10,
  },

  btn: {
    height: 50,
    width: 300,
    backgroundColor: "tomato",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 20,
  },
});
