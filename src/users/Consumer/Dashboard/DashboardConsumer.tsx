import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Background from '../../../component/Background'
import Btn from '../../../component/Btn'

const DashboardConsumer =()=> {
    return (
      <Background>
       <View style={styles.container}>
      
       
       <View style={styles.slogan}>
      <Text style={styles.title}>Welcome to Dashboard</Text>
       </View>
     

      </View>
      </Background>
    )
  }

  const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection:"column",
    position:"absolute",
    zIndex:99
  },
  slogan:{
    position:"absolute",
    top:90,
    width:300
  },
    title:{
      fontWeight:'bold',
      marginHorizontal:40,
      marginVertical:60,    
      fontSize:24,
      color:"white" 
        },
     
  })


export default DashboardConsumer