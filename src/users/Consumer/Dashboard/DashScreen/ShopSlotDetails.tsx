import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
// import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { heightPercentageToDP } from "react-native-responsive-screen";
import CalendarStrip from "react-native-calendar-strip";
import { useNavigation } from "@react-navigation/native";
import moment, { Moment } from "moment";
import { TDateRange } from 'react-native-calendar-strip';
interface LocalTDateRange {
  start: string;
  end: string;
}


const ShopSlotDetails = () => {
  const navigation = useNavigation<any>();
  const Services = [
    {
      id: 1,
      name: "Cutting",
      price: 100,
      timings: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    },
    {
      id: 2,
      name: "Trimming",
      price: 50,
      timings: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    },
    {
      id: 3,
      name: "Styling",
      price: 200,
      timings: ["4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"],
    },
    {
      id: 4,
      name: "Coloring",
      price: 400,
      timings: ["8:00 PM", "9:00 PM"],
    },
    {
      id: 5,
      name: "Shaving",
      price: 100,
      timings: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    },
    {
      id: 6,
      name: "Hair treatment",
      price: 1000,
      timings: ["1:00 PM", "2:00 PM", "3:00 PM"],
    },
    {
      id: 7,
      name: "Massage",
      price: 300,
      timings: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    },
    {
      id: 8,
      name: "Washing",
      price: 250,
      timings: ["10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM"],
    },
  ];

 
  // const currentDate = moment().format("DD-MM-YYYY");
  // console.log("moment " + currentDate);
  // const currentDate = new Date();
  // console.log(currentDate.toLocaleDateString('en-GB'));
  const [serviceDate, setServiceDate] = useState("");
  const [serviceTime, setServiceTime] = useState("");
  const [serviceName, setServiceName] = useState("");
  const [servicePrice, setServicePrice] = useState("");
  const [isTimeSelected, setIsTimeSelected] = useState(false);
//   const currentDate = moment();
//   const oneMonthDate = moment().add(30, 'day').format('YYYY-MM-DD');
//  const datesWhitelist: TDateRange[] = [{ start: currentDate, end: oneMonthDate }];
 const currentDate: Moment = moment();
 const oneMonthDate: string = moment().add(30, 'day').format('YYYY-MM-DD');
 const datesWhitelist: LocalTDateRange[] = [{ start: currentDate.format('YYYY-MM-DD'), end: oneMonthDate }];
 
  // const [isCalendarScrollable, setCalendarScrollable] = useState(true);
  
  // const getEndDate = () => {
  //   const endDate = new Date();
  //   endDate.setDate(endDate.getDate() + 30);
  //   return endDate;
  // };

  // useEffect(()=>{
  //   const yesterday = moment().subtract(1,'day');
  //   const formattedYesterday = yesterday.format("DD-MM-YYYY");
  //   console.log('yesterday',formattedYesterday);
  //   const oneMonthDate = moment().add(30,'day');
  //   const formattedOneMonthDate = oneMonthDate.format("DD-MM-YYYY");
  //   console.log("OneMonthDate",formattedOneMonthDate);

  //   if(formattedYesterday){
  //     setCalendarScrollable(false);
  //   }else if(formattedOneMonthDate){
  //     setCalendarScrollable(true)
  //   }else{
  //     setCalendarScrollable(false);
  //   }
  // })



  
  const handleDateSelection = (selectedDate: any) => {
    console.log("Selected Date:", selectedDate);
    const aqurateDate = moment(selectedDate).format("DD-MM-YYYY");
    setServiceDate(aqurateDate);

  };

  const handleTimePress = (value: string, serviceName: string, price: any) => {
    setServiceTime(value);
    setServiceName(serviceName);
    setServicePrice(price);
  };

  const handleOnBack =()=>{
    navigation.goBack();
  }

  const dataToSend = {
    key1 : serviceName,
    key2 : serviceDate,
    key3 : serviceTime,
    key4 : servicePrice,
  }

  if (serviceDate && serviceTime) {
    navigation.navigate("ShopSlotSubmit", {
      data:dataToSend
    });
  } else {
    console.log("Please select the valid Date and Time.");
  }


  console.log(serviceDate);
  console.log(serviceTime);
  console.log(serviceName);
  console.log(servicePrice);
  console.warn(serviceName, serviceTime, servicePrice);


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white", gap: 10 }}>
      {/* header section */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 40,
          height: heightPercentageToDP("6"),
          borderBottomWidth: 2,
          borderBottomColor: "#e3e3e3",
          paddingHorizontal: 13,
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <Ionicons name="chevron-back" size={28} color="tomato" onPress={handleOnBack} />
          <Text style={{ color: "black", fontWeight: "600", fontSize: 17 }}>
            Shop Name
          </Text>
        </View>
        {/* <Feather name="search" size={26} color="tomato" /> */}
      </View>
      {/* calendar section */}
      <View
        style={{
          height: heightPercentageToDP("12"),
        }}
      >
        <CalendarStrip
          scrollable={false}
          // scrollable
          selectedDate={currentDate}
          startingDate={currentDate}
          style={{ height: 90 }}
          calendarColor={"#fff"}
          calendarHeaderStyle={{ color: "tomato" }}
          dateNumberStyle={{ color: "black" }}
          dateNameStyle={{ color: "black" }}
          highlightDateNumberStyle={{ color: "#fff" }}
          highlightDateNameStyle={{ color: "#fff" }}
          daySelectionAnimation={{
            type: "background",
            duration:30,
            highlightColor: "tomato",
          }}
          iconLeft={null}
          iconRight={null}
          datesWhitelist={datesWhitelist}
          disabledDateNameStyle={{ color: "grey" }}
          disabledDateNumberStyle={{ color: "grey" }}
          disabledDateOpacity={0.5}
          onDateSelected={(date) => handleDateSelection(date)}
        />
      </View>
      {/* Shop section */}

      <FlatList
        showsVerticalScrollIndicator={false}
        style={{ marginHorizontal: 20 }}
        data={Services}
        renderItem={({ item, index }) => (
          <View
            key={index}
            style={{
              height: heightPercentageToDP("20"),
              marginBottom: 10,
              borderRadius: 12,
              borderColor: "#e3e3e3",
              borderWidth: 2,
              paddingHorizontal: 20,
              paddingVertical: 10,
              gap: 10,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
                justifyContent: "space-between",
              }}
            >
              {/* <MaterialIcons name="favorite-border" size={25} color="black"/> */}
              <Text style={{ fontSize: 15, fontWeight: "500", color: "black" }}>
                {item.name}
              </Text>
              <View
                style={{ flexDirection: "row", alignItems: "center", gap: 3 }}
              >
                <FontAwesome name="rupee" size={18} color="tomato" />
                <Text style={{ fontSize: 13, color: "tomato" }}>
                  {item.price}
                </Text>
              </View>
            </View>
            <Text style={{ fontWeight: "400", fontSize: 12 }}>
              Non-cancellable
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {item.timings.map((value, index): any => (
                <TouchableOpacity
                  key={index}
                  onPress={() => {
                    handleTimePress(value, item.name, item.price);
                    setIsTimeSelected(true);
                  }}
                  style={{
                    paddingHorizontal: 10,
                    borderWidth: 2,
                    borderColor: "tomato",
                    marginRight: 5,
                    borderRadius: 10,
                    marginBottom: 10,
                    backgroundColor:
                      serviceName === item.name &&
                      serviceTime === value &&
                      isTimeSelected
                        ? "tomato"
                        : "#fff",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 13,
                      color:
                        serviceName === item.name &&
                        serviceTime === value &&
                        isTimeSelected
                          ? "#fff"
                          : "tomato",
                    }}
                  >
                    {value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default ShopSlotDetails;
