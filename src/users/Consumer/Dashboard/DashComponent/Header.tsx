import { Text, View,StyleSheet } from "react-native";
import React, { Component } from "react";
import {
    widthPercentageToDP,
    heightPercentageToDP,
  } from "react-native-responsive-screen";


const Header =({name}:any)=> {

    return (
      <View style={styles.container}>
        <Text style={{color:"#fff",fontSize:16}}>{name}</Text>
      </View>
    );
  }


const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: heightPercentageToDP("10"),
        backgroundColor: 'tomato',
        position: 'absolute',
        top: 0,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent:"center",
    }
})

export default Header;
