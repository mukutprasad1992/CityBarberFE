import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Background from './Background'
import Register from '../user/Register'

const Home =({props}:any)=> {
    return (
      <Background>
        <Text style={styles.title}>HOME</Text>
        <TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate("Register")}>
            <Text style={{color:'white'}}>Sing up</Text>
        </TouchableOpacity>
        
      </Background>
    )
  }

  const styles = StyleSheet.create({
    title:{
      fontWeight:'bold',
      marginHorizontal:140,
      marginVertical:150,    
      fontSize:24,
      position:"absolute",
      zIndex:1,
},
    button:{
        backgroundColor:"black",
        fontSize:25,
       top:290,
        width:150,
        height:50,   
         marginHorizontal:120,
       // marginVertical:120,    
        borderRadius:20,
        justifyContent:'center',
        alignItems:"center",
        position:'absolute',
        zIndex:1,
  
       // right:-120,
    
    }
  })


export default Home