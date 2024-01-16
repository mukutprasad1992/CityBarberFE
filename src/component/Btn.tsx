import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

const Btn=({bgColor,btnLabel,textColor,onPress}:any)=> {
    return (
        <TouchableOpacity  
        style={{
            backgroundColor:bgColor,
            borderRadius:20,
            alignItems:"center",
            width:"90%",
            height:50,
            justifyContent:"center",
            margin:20
        }}
        onPress={onPress}>
        <Text style={{color:textColor,fontSize:10,fontWeight:"bold"}}>{btnLabel}</Text>
       </TouchableOpacity>
    )
  }


export default Btn;