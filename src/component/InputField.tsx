import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

const InputField =({props,width}:any)=> {
    return (
    <TextInput 
    {...props} 
    style={{width:width,height:30,color:"grey",backgroundColor:'#fff'}} 
    placeholderTextColor={"black"}>

    </TextInput>
    )
  }


export default InputField;