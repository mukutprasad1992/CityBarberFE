import { Text, TextInput, View } from 'react-native'
import React, { Component } from 'react'

const InputField =({autoComplete,maxLength,onChangeText,value,width,height,keyboardType,secureTextEntry,borderColor,borderWidth}:any)=> {
    return (
    <TextInput 
    style={{width:width,height:height,fontSize:40 * (width / 700),color:"grey",backgroundColor:'#fff',borderWidth:borderWidth,borderColor:borderColor}} 
    placeholderTextColor={"black"}
    value={value}
    onChangeText={onChangeText}
    maxLength={maxLength}
    keyboardType={keyboardType}
    autoComplete={autoComplete}
    secureTextEntry={secureTextEntry}
    >
    
    </TextInput>
    )
  }


export default InputField;