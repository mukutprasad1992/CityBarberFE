import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Button,
} from "react-native";
import { FlatList } from "react-native";
import InputField from "../../../../component/InputField";
import BookedAppointment from "../DashboardComponent/BookedAppointment";
import { heightPercentageToDP } from "react-native-responsive-screen";
import AddService from "./AddService";
import AddSeats from "./AddSeatsScreen";
import AddSlots from "./AddSlots";
import Header from "../../../../component/Header";

const DATA = [
  {
    id: 1,
    title: "User 1",
    services: ["hair Cutting", "coloring", "massage"],
    slots: ["10:00PM", "11:00PM", "12:00PM"],
    sit: ["s1", "s2"],
  },
  {
    id: 2,
    title: "User 2",
    services: ["hair Cutting", "coloring", "massage"],
    slots: ["10:00PM", "11:00PM", "12:00PM"],
    sit: ["s1", "s2"],
  },
  {
    id: 3,
    title: "User 3",
    services: ["hair Cutting", "saving"],
    slots: ["11:00PM", "12:00PM"],
    sit: ["s1"],
  },
];



 const ShopDetails = () => {
  // const [open, setOpen] = useState(false);


  // const onPageOpen = () => {
  //   if (open) {
  //     setOpen(false);
  //   } else {
  //     setOpen(true);
  //   }
  // };

  


  // const ClickAlert = () => {
  //   alert("fsdfsdfds");
  // };

  // const handleAddShopDetails = () =>{
  //   alert("Add Shop Details!!!!!!");
  // }
  
 
  return (
    <View>
       <Header name="Samarth" />
      <ScrollView
      showsVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View>
         <BookedAppointment/>
          </View>
          {/* shopCard------>
          <View>
          <View style={{
            height: heightPercentageToDP(45),
            width: "90%",
            marginTop: 20,
            marginLeft:20,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fcab62",
            }}>

        <Text style={{fontWeight:"800",fontSize:15,color:"#fff"}}>Shop Name</Text>
        <Text style={{color:"#fff"}}>
        <Text>Address:</Text>
        ShopNo:12 In front of Jyoti
        </Text>
        <View style={{width:'90%'}}>
        <Text style={{color:"#fff"}}>Open:10:00 AM</Text>
        <Text style={{color:"#fff"}}>Close:07:00 PM</Text>
        </View>
        <View style={{width:"100%",justifyContent:"center",alignItems:"flex-end",marginRight:20}}>
        <TouchableOpacity onPress={handleAddShopDetails}>
          <Image
           source={require("../../../../../public/images/plus.png")} 
           style={{ width: 35, height: 35, tintColor: "#fff" }}
          />
          </TouchableOpacity>
        </View>
            </View>
          </View >

           <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "800",
              paddingLeft: 20,
              marginTop: 10,
              marginRight: "auto",
            }}
          >
            Add Slot and Services
          </Text>

          <View style={{ width: "100%", height: "auto" }}>
            <ScrollView 
            horizontal
            showsHorizontalScrollIndicator={false}
            >
              <AddService/>
              <AddSeats/>
             <AddSlots/>
            </ScrollView>
          </View>
          </View> */}

         
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
 
  root: {
    height: "auto",
    width: "100%",
    // justifyContent: "center",
    // alignItems: "center",
    marginBottom: 200,
  },
 
});
export default ShopDetails