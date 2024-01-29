import React, { useState } from "react";
import { View, Text, TouchableOpacity, Button } from "react-native";
import MultiDatePicker from "react-multi-date-picker";
// import { TimePicker } from "react-multi-date-picker/plugins";
import RNDateTimePicker from "@react-native-community/datetimepicker";
import DateTimePicker from "@react-native-community/datetimepicker";

export const TimePickers = () => {
  //   const [time, setTime] = useState(new Date());
  //   const [showPicker, setShowPicker] = useState(false);

  //   const onChange = (event: any, selectedTime: any) => {
  //     const currentTime = selectedTime || time;
  //     setShowPicker(false);
  //     setTime(currentTime);
  //   };

  //   const formatTime = (time: any) => {
  //     const hours = time.getHours();
  //     const minutes = time.getMinutes();
  //     const formattedHours = hours % 12 || 12;
  //     const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  //     const period = hours >= 12 ? "PM" : "AM";
  //     return `${formattedHours}:${formattedMinutes} ${period}`;

  //   };

  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [showOpeningPicker, setShowOpeningPicker] = useState(false);
  const [showClosingPicker, setShowClosingPicker] = useState(false);

  const onOpeningTimeChange = (event: any, selectedTime: Date) => {
    const currentTime = selectedTime || openingTime;
    setShowOpeningPicker(false);
    setOpeningTime(currentTime);
  };

  const onClosingTimeChange = (event: any, selectedTime: Date) => {
    const currentTime = selectedTime || closingTime;
    setShowClosingPicker(false);
    setClosingTime(currentTime);
  };

  const formatTime = (time: any) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours % 12 || 12; // Convert to 12-hour format
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const period = hours >= 12 ? "PM" : "AM";
    return `${formattedHours}:${formattedMinutes} ${period}`;
  };

  return (
    // <View>
    //   <View style={{ marginTop: 400 }}>
    //     <Button title="Set Opening Time" onPress={() => setShowPicker(true)} />
    //     {showPicker && (
    //       <DateTimePicker
    //         value={time}
    //         mode="time"
    //         is24Hour={false}
    //         display="default"
    //         onChange={onChange}
    //       />
    //     )}
    //     <Text>Selected Time: {formatTime(time)}</Text>
    //   </View>
    //   <View style={{ marginTop: 100 }}>
    //     <Button title="Show Time Picker" onPress={() => setShowPicker(true)} />
    //     {showPicker && (
    //       <DateTimePicker
    //         value={time}
    //         mode="time"
    //         is24Hour={false}
    //         display="default"
    //         onChange={onChange}
    //       />
    //     )}
    //     <Text>Selected Time: {formatTime(time)}</Text>
    //   </View>
    // </View>
    <View style={{ marginTop: 100 }}>
      <Button
        title="Select Opening Time"
        onPress={() => setShowOpeningPicker(true)}
      />
      <Button
        title="Select Closing Time"
        onPress={() => setShowClosingPicker(true)}
      />
      {showOpeningPicker && (
        <DateTimePicker
          value={openingTime}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onOpeningTimeChange}
        />
      )}
      {showClosingPicker && (
        <DateTimePicker
          value={closingTime}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onClosingTimeChange}
        />
      )}
      <Text>Opening Time: {formatTime(openingTime)}</Text>
      <Text>Closing Time: {formatTime(closingTime)}</Text>
    </View>
  );
};
