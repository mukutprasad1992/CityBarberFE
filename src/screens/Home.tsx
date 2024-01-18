import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Background from '../component/Background'
import Register from '../user/Register'
import Logo from '../component/Logo'
import Btn from '../component/Btn'

const Home =()=> {
    return (
      <Background>
       <View style={styles.container}>
      
       <View  style={styles.logoContainer}>
        <Logo tintColor={"#fff"} width={100} height={100}/>
       </View>
       
       <View style={styles.slogan}>
      <Text style={styles.title}>Quality cuts at a good price</Text>
       </View>
     
      <View style={styles.buttonContainer}>
        <Btn bgColor={"orange"} btnLabel={"Sign up"} textColor={"#fff"} />
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
  logoContainer:{ 
    position:"absolute",
    top:40,
    left:20
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
        buttonContainer:{
          position:"absolute",
          top:290,
          left:40
        },
    button:{
        backgroundColor:"black",
        fontSize:25,
       top:290,
        width:250,
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