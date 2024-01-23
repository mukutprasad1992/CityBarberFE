import React, { useState } from "react";
import Background from "../../../component/Background";
import { Picker } from "@react-native-picker/picker";
import Dashboard from "./Dashboard";
import { Text, StyleSheet, View, ScrollView } from "react-native";
import InputField from "../../../component/InputField";
import Btn from "../../../component/Btn";
import { useNavigation } from "@react-navigation/native";

export const AddShop = () => {
  
  const navigation = useNavigation();
  const [details, setDetails] = useState({
    shopName: "",
    ownerName: "",
    openingDay: "",
    closingDay: "",
    openingTime: "",
    closingTime: "",
  });

  const handleInputChange = (field: string, value: any) => {
    setDetails((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    alert("Shop Added");
    // navigation.navigate(Dashboard);
  };
  return (
    <View>
      <Text style={styles.title}>Shop Details</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.root}>
          <View style={styles.inputContainer}>
            <Text>Owner Name</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderBottomWidth={1}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Shop Name</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              secureTextEntry={true}
              borderBottomWidth={1}
              value={details.shopName}
              onChangeText={(text: any) => handleInputChange("shopName", text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Opening day from</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderBottomWidth={1}
              value={details.openingDay}
              onChangeText={(text: any) =>
                handleInputChange("openingDay", text)
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text> to Closing day</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderBottomWidth={1}
              value={details.closingDay}
              onChangeText={(text: any) =>
                handleInputChange("closingDay", text)
              }
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>opening time</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderBottomWidth={1}
              value={details.openingTime}
              onChangeText={(text: any) =>
                handleInputChange("openingTime", text)
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>closing time</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderBottomWidth={1}
              value={details.closingTime}
              onChangeText={(text: any) =>
                handleInputChange("closingTime", text)
              }
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Select Slot time</Text>
            {/* <InputField
              placeholderTextColor="#003f5c"
              width={350}
              secureTextEntry={true}
              borderBottomWidth={1}
            > */}

            {/* </InputField> */}
            <View style={styles.pickerContainer}>
              <Picker
                selectedValue={selectedCountry}
                onValueChange={(itemValue) => setSelectedCountry(itemValue)}
                mode={"dialog"}
              >
                <Picker.Item label="Select Country" value="" />
                <Picker.Item label="USA" value="usa" />
                <Picker.Item label="Canada" value="canada" />
                <Picker.Item label="UK" value="uk" />
              </Picker>
            </View>
          </View>

          <Btn
            btnLabel={"submit"}
            bgColor={"tomato"}
            textColor={"#fff"}
            onPress={handleSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },

  pickerContainer: {
    flexGrow: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#003f5c",
    zIndex: 5,
  },

  root: {
    height: 700,
    width: 400,
    backgroundColor: "#fff",
    marginTop: 200,
    marginLeft: 10,
    borderRadius: 20,
    padding: 20, // Add padding to give space between content and container edges
  },

  inputContainer: {
    marginBottom: 30,
  },

  title: {
    fontSize: 24,
    position: "absolute",
    top: 100,
    fontWeight: "800",
    left: 140,
    color: "black",
  },
});
