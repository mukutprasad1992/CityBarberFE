import { Text, View, TouchableOpacity, Dimensions } from 'react-native'
import React, { Component } from 'react'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');


const Btn=({bgColor,btnLabel,textColor,onPress}:any)=> {
     
  return (
        <TouchableOpacity  
        style={{
            backgroundColor:bgColor,
            borderRadius:50,
            alignItems:"center",
            width:widthPercentageToDP("70%"),
            height:heightPercentageToDP("6%"),
            justifyContent:"center",
            margin:20
        }}
        onPress={onPress}>
        <Text style={{color:textColor,fontSize: 16 * (width / 700),fontWeight:"bold"}}>{btnLabel}</Text>
       </TouchableOpacity>
    )
  }


export default Btn;