import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

const  Logo =({tintColor,width,height}:any) => {
    return (
      <View>
             <Image style={{width:width,
                            height:height,
                            tintColor:tintColor}} 
                source={require("../../public/images/Logo.png")}/>
      </View>
    )
  }


export default Logo