import React, { useState } from "react";
// import DatePicker from "react-multi-date-picker";
import DatePicker from "react-native-modern-datepicker";

import { Button, Modal, TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

export const Calender = () => {
  const [openingDate, setOpeningDate] = useState("");
  const [open, setOpen] = useState(false);

  function handlechange(propDate: string) {
    setOpeningDate(propDate);
  }
  function handlePress() {
    setOpen(!open);
  }
  return (
    <View>
      <View style={styles.inputContainer}>
        <Button onPress={handlePress} title="Opening Date" />
        <Modal visible={open} animationType="slide">
          <DatePicker
            mode="calendar"
            selected={openingDate}
            onDateChange={handlechange}
          />
          <TouchableOpacity onPress={handlePress}>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "500",
              }}
            >
              Save
            </Text>
          </TouchableOpacity>
        </Modal>
        <Text style={{ fontSize: 14, borderBottomWidth: 1 }}>
          {" "}
          {openingDate}
        </Text>
      </View>
    </View>
  );
};
