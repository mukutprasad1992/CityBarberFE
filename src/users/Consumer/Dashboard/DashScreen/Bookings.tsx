import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { Component } from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const Bookings = () => {

  const navigation = useNavigation<any>(); 
  const handleBookNow = () => {
        navigation.navigate("ShopSlotDetails");
       };
       const ShopData = [
        {
          id: 1,
          image:require("../../../../../public/images/image1.jpg"),
          name: "Raju Barber",
          address: "Boardoffice square ",
          ranking:0,
        },
        {
          id: 2,
          image:require("../../../../../public/images/image2.jpg"),
          name: "Seizer",
          address: "Karond square near sanjay sweets ",
          ranking:0
        },
        {
          id: 3,
          image:require("../../../../../public/images/image3.jpg"),
          name: "Billu Barber",
          address: "Indarpuri C-sector near yadav tea stole." ,
          ranking:0,
        },
        {
          id: 4,
          image:require("../../../../../public/images/image4.jpg"),
          name: "Bhopali Barber",
          address: "Indarpuri A-sector near Shiv mandir." ,
          ranking:0,
        },
        {
          id: 5,
          image:require("../../../../../public/images/image4.jpg"),
          name: "Bhopali Barber",
          address: "Indarpuri A-sector near Shiv mandir." ,
          ranking:0,
        },
       ]

       const colorArray = ["#fcab62","#e68d53","#c97849","#dfc578","#ecdcab",]

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#e2e2e2",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: widthPercentageToDP("95"),
          height: heightPercentageToDP("100"),
          backgroundColor: "#e2e2e2",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
          <FlatList 
          data={ShopData}
          style={{marginTop:70,marginBottom:60}}
          showsVerticalScrollIndicator={false}
          renderItem = {({item,index})=>(
            <TouchableOpacity
            onPress={handleBookNow}
            key={index}
            style={{
             
              backgroundColor: colorArray[index % colorArray.length],
              width: widthPercentageToDP("90"),
              height: heightPercentageToDP("20"),
              flexDirection: "row",
              // alignItems: "center",
              borderRadius: 20,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <View
            style={{
              marginLeft: 20,
              // marginBottom:20,
              width: "20%",
              justifyContent: "center",
            }} >
            <Image
              style={{
                width: "100%",
                height: "45%",
                borderRadius:50,
              }}
              source={item.image}
            />
            </View>
            
            <View
              style={{
                flexDirection: "column",
                margin: 5,
                padding:9,
                width: "50%",
                justifyContent: "center",
                overflow:"hidden"
              }}
            >
              <Text style={{ fontSize: 15,fontWeight:"bold",color:"#fff" }}>{item.name}</Text>
              <View style={{ width: "80%" }}>
                <Text style={{ fontSize: 10,marginTop:5,color:"#fff" }}>
                 <Text style={{fontWeight:"600",color:"#fff"}}>Address:</Text>
                 {item.address}
                </Text>
              </View>
            </View>
            <View 
            style={{
              flexDirection: "column",
              width: "20%",
              alignItems:"center",
              justifyContent: "center",
            }}>
              <Text style={{ fontSize: 28,fontWeight:"bold" ,color:"#fff"}}>{item.ranking}</Text>
              <Text style={{fontSize:12,fontWeight:"600",color:"#fff"}}>Ranking</Text>
            </View>

          </TouchableOpacity>)}
          
          />
      </View>
    </SafeAreaView>
  );
};

export default Bookings;
