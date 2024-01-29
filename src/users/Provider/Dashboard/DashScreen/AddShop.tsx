import React, { useState } from "react";
import Background from "../../../../component/Background";
import Dashboard from "../Dashboard";
import Login from "../../../../auth/Login";
import { ShopList } from "./ShopList";
import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  Touchable,
  TouchableOpacity,
  Button,
  Platform,
  TextInput,
  Image,
} from "react-native";
import InputField from "../../../../component/InputField";
import Btn from "../../../../component/Btn";
import { useNavigation } from "@react-navigation/native";
import DatePicker from "react-native-modern-datepicker";
import DropDownPicker from "react-native-dropdown-picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import ImagePicker from "react-native-image-picker";
// import { Image } from "react-native";
// import { launchImageLibrary } from "react-native-image-picker";
import DocumentPicker from "react-native-document-picker";

// interface ValueMap {
//   hours: number;
//   minutes: number;
// }

export const AddShop = () => {
  const navigation = useNavigation<any>();

  // states for  input Fields Names ---->

  const [details, setDetails] = useState({
    shopName: "",
    ownerName: "",
  });

  // sates for DropDown for opening and closing days----->

  const [isOpen, setIsOpen] = useState(false);
  const [currentValue, setCurrentValue] = useState("");
  const [isClose, setIsClose] = useState(false);
  const [currentClosingDays, setCurrentClosingDays] = useState("");

  // sates for SelectTime -------->

  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [showOpeningPicker, setShowOpeningPicker] = useState(false);
  const [showClosingPicker, setShowClosingPicker] = useState(false);

  // time type string for api integration --->

  const [openingTimeString, setOpeningTimeString] = useState("");
  const [closingTimeString, setClosingTimeString] = useState("");

  // sate for save image---->
  const [images, setImages] = useState();

  const onOpeningTimeChange = (_event: any, selectedTime: Date) => {
    const currentTime = selectedTime || openingTime;
    setShowOpeningPicker(false);
    setOpeningTime(currentTime);
    setOpeningTimeString(formatTime(currentTime));
  };

  const onClosingTimeChange = (_event: any, selectedTime: Date) => {
    const currentTime = selectedTime || closingTime;
    setShowClosingPicker(false);
    setClosingTime(currentTime);
    setClosingTimeString(formatTime(currentTime));
  };

  const formatTime = (time: any) => {
    const hours = time.getHours();
    const minutes = time.getMinutes();
    const formattedHours = hours % 24 || 24;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    // const period = hours >= 12 ? "PM" : "AM";
    return `${formattedHours}:${formattedMinutes}`;
  };

  const handleInputChange = (field: string, value: any) => {
    setDetails((prevInputs) => ({
      ...prevInputs,
      [field]: value,
    }));
  };

  const onSubmit = () => {
    navigation.navigate(ShopList);
  };

  const Days = [
    { label: "Monday", value: "Monday" },
    {
      label: "Tuesday",
      value: "Tuesday",
    },
    {
      label: "Wednesday",
      value: "Wednesday",
    },
    {
      label: "Thursday",
      value: "Thursday",
    },
    {
      label: "Friday",
      value: "Friday",
    },
    {
      label: "Saturday",
      value: "Saturday",
    },
    {
      label: "Sunday",
      value: "Sunday",
    },
  ];

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
              value={details.ownerName}
              onChangeText={(text: any) => handleInputChange("ownerName", text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Text>Shop Name</Text>
            <InputField
              placeholderTextColor="#003f5c"
              width={350}
              borderColor="grey"
              borderBottomWidth={1}
              value={details.shopName}
              onChangeText={(text: any) => handleInputChange("shopName", text)}
            />
          </View>

          {/* select time Picker-------> */}

          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => setShowOpeningPicker(true)}>
              <Text>Opening Time </Text>
            </TouchableOpacity>

            {showOpeningPicker && (
              <DateTimePicker
                value={openingTime}
                mode="time"
                is24Hour={true}
                display="spinner"
                onChange={onOpeningTimeChange}
              />
            )}
            {openingTime ? (
              <Text
                style={{
                  marginTop: 10,
                  borderBottomWidth: 1,
                }}
              >
                {openingTimeString}
              </Text>
            ) : (
              ""
            )}
          </View>

          <View style={styles.inputContainer}>
            <TouchableOpacity onPress={() => setShowClosingPicker(true)}>
              <Text>Closing Time </Text>
            </TouchableOpacity>
            {showClosingPicker && (
              <DateTimePicker
                value={closingTime}
                mode="time"
                is24Hour={true}
                display="spinner"
                onChange={onClosingTimeChange}
              />
            )}
            {closingTime && (
              <Text
                style={{
                  marginTop: 10,
                  borderBottomWidth: 1,
                }}
              >
                {closingTimeString}
              </Text>
            )}
          </View>

          {/* DropDowenPicker-------- */}

          <View style={[styles.inputContainer, { borderBottomWidth: 1 }]}>
            <DropDownPicker
              open={isOpen}
              setOpen={() => setIsOpen(!isOpen)}
              value={currentValue}
              items={Days}
              // multiple={true}
              setValue={(val) => setCurrentValue(val)}
              maxHeight={500}
              placeholder="Select opening Day"
              style={{ borderColor: "transparent" }}
            />
          </View>

          <View style={[styles.inputContainer, { borderBottomWidth: 1 }]}>
            <DropDownPicker
              open={isClose}
              setOpen={() => setIsClose(!isClose)}
              value={currentClosingDays}
              items={Days}
              // multiple={true}
              setValue={(val) => setCurrentClosingDays(val)}
              maxHeight={500}
              placeholder="Select Closing Day"
              style={{ borderColor: "transparent" }}
            />
          </View>

          <View>
            <TouchableOpacity
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                style={{ height: 30, width: 30 }}
                source={require("../../../../../public/images/CameraIcon.png")}
                tintColor={"tomato"}
              />
              <Text style={{ fontWeight: "500" }}>Choose Image</Text>
            </TouchableOpacity>
          </View>
          <Btn
            btnLabel={"submit"}
            bgColor={"tomato"}
            textColor={"#fff"}
            onPress={onSubmit}
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

  // pickerContainer: {
  //   flexGrow: 1,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#003f5c",
  // },

  // pickerItem: {
  //   flexGrow: 1,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#003f5c",
  //   color: "black",
  // },

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

  // modelView: {
  //   height: 300,
  //   width: "100%",
  //   // backgroundColor: "red",
  // },
});
