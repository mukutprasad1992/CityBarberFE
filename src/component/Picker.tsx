import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const MyPickerComponent = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

  const handlePickerChange = (itemValue) => {
    setSelectedValue(itemValue);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select an Option:</Text>
      <Picker
        selectedValue={selectedValue}
        onValueChange={handlePickerChange}
        style={styles.picker}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>

      <Text style={styles.selectedValueText}>
        Selected Value: {selectedValue}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  picker: {
    width: 200,
    height:100,
    borderWidth: 1,
    borderColor: "#003f5c",
  },
  selectedValueText: {
    marginTop: 20,
    fontSize: 18,
  },
});

export default MyPickerComponent;
