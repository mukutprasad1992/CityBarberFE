import { Text, View , Image } from "react-native";
import React, { Component } from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import Btn from "../../../../component/Btn";

interface ShopSlotDetailsProps {
  navigation: any;
}

const ShopSlotDetails: React.FC<ShopSlotDetailsProps> = ({ navigation }: any) => {
  
  const handleShopSlot =() =>{
    alert("Appointment Successfully Booked")
  }


  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: widthPercentageToDP("95"),
          height: heightPercentageToDP("100"),
          backgroundColor: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
    
          <View
            style={{
              backgroundColor: "#e2e2e2",
              width: widthPercentageToDP("90"),
              height: heightPercentageToDP("80"),
              justifyContent: "center",
              alignItems:"center",
              flexDirection:'column',
              padding: "1.5%",
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <View style={{ width: "90%", justifyContent: "center",alignItems:"center" }}>
              <Text
                style={{ color: "#003f5c", fontWeight: "800", fontSize: 22 }}
              >
                Shop Name
              </Text>
              </View>
              <Image
                    source={require("../../../../../public/images/image1.jpg")}
                    style={{
                      width: widthPercentageToDP("90"),
                      height: heightPercentageToDP("50"),
                      marginTop: 5,
                    }}
                  />
              <View>
              <Text style={{ color: "#003f5c", fontWeight: "500" }}>
                Address: Barber shop
              </Text>
              <Text style={{ fontSize: 10, color: "#003f5c" }}>
                10:00 AM to 11:00 AM
              </Text>
              <Text style={{ fontSize: 10, color: "#003f5c" }}>
                11:00 AM to 12:00 PM
              </Text>
            </View>
           
           <Btn bgColor={"tomato"} btnLabel={"Submit"} textColor={"#fff"} onPress={handleShopSlot}/>
            </View>
          </View>
      </View>
    
  );
};

export default ShopSlotDetails;
