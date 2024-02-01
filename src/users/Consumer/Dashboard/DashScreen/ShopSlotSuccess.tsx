import { Text, View,Modal, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const ShopSlotSuccess =() => {
    const navigation = useNavigation<any>();
    const handleGoToOtherPage = () =>{
        navigation.navigate("DashboardConsumer")
    }
    return (
        <Modal visible={true} animationType="slide" transparent= {true}>
            <TouchableWithoutFeedback onPress={handleGoToOtherPage}>
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
            <View style={{
                backgroundColor:"#fff",
                width:"80%",
                height:"35%",
                justifyContent:"center",
                alignItems:"center",
                position:"relative",
                borderRadius:20,
            }}>
         <AntDesign name="checkcircle" size={100} color="#90ee90" />
         <Text style={{color:"#90ee90",margin:20,fontSize:12,fontWeight:"bold"}}>Appointment booked successfully</Text>
         {/* <View style={{ 
              position:"absolute",
              right:-10,
              top:-10,
              
            }}>
            <AntDesign name="closecircle" size={35} color="" onPress={handleGoToOtherPage} />
          </View> */}
            </View>

         </View>
         </TouchableWithoutFeedback>
        </Modal>
    )
  }


export default ShopSlotSuccess