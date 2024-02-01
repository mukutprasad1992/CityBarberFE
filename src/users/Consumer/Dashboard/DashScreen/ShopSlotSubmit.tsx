import {
  Text,
  View,
  Modal,
  TouchableOpacity,
  Button,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';

const ShopSlotSubmit = ({ route }: any) => {
  const navigation = useNavigation<any>();
  const receivedName = route.params?.data?.key1;
  const receivedDate = route.params?.data?.key2;
  const receivedTime = route.params?.data?.key3;
  const receivedPrice = route.params?.data?.key4;

  const handleGoBack = () =>{
    navigation.goBack();
  }

  const handleSubmit =() =>{
    navigation.navigate("ShopSlotSuccess");
  }

  return (
    <SafeAreaView>
      <Modal visible={true} animationType="slide" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >

          <View
            style={{
              backgroundColor: "white",
              padding: 15,
              width: "90%",
              borderRadius: 10,
              position:"relative",
              justifyContent:"center",
              
            }}
          >
            {/* <Text>{JSON.stringify(receivedData)}</Text> */}
            <Text
              style={{ fontSize: 20, fontWeight: "bold", color: "#003f5c",alignSelf:"center",marginBottom:20 }}
            >
              Shop Name
            </Text>
            <View
              style={{ flexDirection: "row", justifyContent: 'space-between',marginHorizontal:20 , marginBottom:5 }}
            >
              <Entypo name="shop" size={24} color="tomato" />
              <View style={{justifyContent:'flex-start',width:"60%"}}>
              <Text>{receivedName}</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: 'space-between',marginHorizontal:20, marginBottom:5 }}
            >
              <Fontisto name="date" size={24} color="tomato" />
              <View style={{justifyContent:'flex-start',width:"60%"}}>
              <Text>{receivedDate}</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: 'space-between',marginHorizontal:20 , marginBottom:5}}
            >
              <Entypo name="time-slot" size={24} color="tomato" />
              <View style={{justifyContent:'flex-start',width:"60%"}}>
              <Text>{receivedTime}</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: 'space-between',marginHorizontal:20 , marginBottom:5}}
            >
             <View style={{marginLeft:5}}>
             <FontAwesome name="rupee" size={24} color="tomato" />
             </View>
              <View style={{justifyContent:'flex-start',width:"60%"}}>
              <Text>{receivedPrice}</Text>
              </View>
            </View>
            
            <TouchableOpacity
            onPress={handleSubmit}
              style={{
                backgroundColor: "tomato",
                width: "90%",
                height: "15%",
                borderRadius: 50,
                justifyContent: "center",
                alignItems: "center",
                // margin:20,
                marginHorizontal:20,
                marginTop:40

              }}
            >
              <Text style={{ color: "#fff" }}>Submit</Text>
            </TouchableOpacity>
          <View style={{ 
              position:"absolute",
              right:-8,
              top:-10,
              
            }}>
            <AntDesign name="closecircle" size={35} color="tomato" onPress={handleGoBack} />
          </View>
                 </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default ShopSlotSubmit;
