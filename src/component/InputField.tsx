import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

const InputField =({props,width,height}:any)=> {
    return (
    <TextInput 
    {...props} 
    style={{width:width,height:height,fontSize:40 * (width / 700),color:"grey",backgroundColor:'#fff',borderWidth:0, borderColor: 'transparent'}} 
    placeholderTextColor={"black"}
    >
    
    </TextInput>
    )
  }


export default InputField;