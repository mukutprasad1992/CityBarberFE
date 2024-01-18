import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

const InputField =(props:any)=> {
    return (
    <TextInput 
    {...props} 
    style={{borderRadius:10,width:"90%",fontWeight:"bold",height:50,color:"black",backgroundColor:'white',paddingHorizontal:10,marginHorizontal:20,marginVertical:10}} 
    placeholderTextColor={"black"}>

    </TextInput>
    )
  }


export default InputField