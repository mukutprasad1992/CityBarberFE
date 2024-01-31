import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import InputField from "../../../../component/InputField";
import Btn from "../../../../component/Btn";
import { ScrollView } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Dropdown } from "react-native-element-dropdown";
import Background from "../../../../component/Background";
export const SlotService = () => {
  const [time, setTime] = useState(new Date());
  const [openingPicker, setOpeningPicker] = useState(false);
  const [timeStrings, setTimeStrings] = useState<string[]>([]);

  const [selectedDay, setSelectedDay] = useState("");

  const formatTime = (time: any) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours % 24 || 24;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${formattedHours}:${formattedMinutes}`;
  };

  const onRemoveTime = (index: number) => {
    const newTimeStrings = [...timeStrings];
    newTimeStrings.splice(index, 1);
    setTimeStrings(newTimeStrings);
  };

  const onTimeChange = (_event: any, selectedTime: any | undefined) => {
    if (selectedTime) {
      const newTimeStrings = [...timeStrings, formatTime(selectedTime)];
      setTimeStrings(newTimeStrings);
    }
    setOpeningPicker(false);
  };

  const renderScheduledTimes = () => {
    return timeStrings.map((timeString, index) => (
      <TouchableOpacity
        key={index}
        style={styles.scheduledTime}
        onPress={() => onRemoveTime(index)}
      >
        <Text>{timeString}</Text>
      </TouchableOpacity>
    ));
  };

  const Days = [
    { label: "Monday", value: "Monday" },
    { label: "Tuesday", value: "Tuesday" },
    { label: "Wednesday", value: "Wednesday" },
    { label: "Thursday", value: "Thursday" },
    { label: "Friday", value: "Friday" },
    { label: "Saturday", value: "Saturday" },
    { label: "Sunday", value: "Sunday" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.contentView}>
          <View style={styles.inputData}>
            <InputField
              width={300}
              placeholder="Service Name"
              borderBottomWidth={1}
              borderBottomColor="grey"
            />
            <InputField
              keyboardType="numeric"
              width={300}
              placeholder="Service Cost"
              borderBottomWidth={1}
              borderBottomColor="grey"
            />
            <View style={styles.dropDownView}>
              <Dropdown
                data={Days}
                labelField="label"
                valueField="value"
                placeholder="Select day"
                placeholderStyle={styles.dropText}
                value={selectedDay}
                onChange={(item) => {
                  setSelectedDay(item.value);
                }}
              />
            </View>
          </View>

          <TouchableOpacity
            onPress={() => setOpeningPicker(true)}
            style={styles.addtimebtn}
          >
            <Text style={styles.addTimeText}>Add Times Slot</Text>
          </TouchableOpacity>

          <View style={styles.timePickerContainer}>
            {openingPicker && (
              <DateTimePicker
                value={time}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={onTimeChange}
              />
            )}
            <View style={styles.slots}>
              {timeStrings.length > 0 && (
                <View style={styles.scheduledTimesContainer}>
                  {renderScheduledTimes()}
                </View>
              )}
            </View>
          </View>

          <Btn
            width={200}
            bgColor={"tomato"}
            btnLabel={"Add"}
            textColor={"#fff"}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
  },

  contentView: {
    height: "auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 200,
    padding: 20,
    backgroundColor: "#CAC9CD",
    borderRadius: 10,
  },

  inputData: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    marginBottom: 20,
    width: "100%",
  },

  timePickerContainer: {
    height: "auto",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },

  slots: {
    height: "auto",
    width: "80%",
  },

  scheduledTimesContainer: {
    maxWidth: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    marginTop: 20,
  },

  scheduledTime: {
    paddingVertical: 4,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: 10,
    backgroundColor: "#CDCDCD",
  },
  addtimebtn: {
    height: 20,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginTop: 10,
  },
  addTimeText: {
    marginRight: "auto",
    color: "grey",
  },

  dropText: {
    color: "grey",
  },

  dropDownView: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    width: "100%",
  },
});
