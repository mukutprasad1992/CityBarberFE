import { Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import React, { Component } from 'react'
import Background from '../component/Background'
import Logo from '../component/Logo'
import Btn from '../component/Btn'
import { useNavigation } from '@react-navigation/native'


const Home =()=> {
  const navigation = useNavigation();
  const handleSignupBtn = () => {
              navigation.navigate('Signup')
  }
  const handleLoginBtn = () => {
              navigation.navigate("Login")
  }

    return (
      <Background>
       <View style={styles.container}>
      
       
       <View style={styles.slogan}>
      <Text style={styles.title}>City Barber</Text>
       </View>
     
      <View style={styles.signBtn}>
        <Btn bgColor={"tomato"} btnLabel={"Sign up"} textColor={"#fff"} onPress={handleSignupBtn} />
      </View>
      <View style={styles.LoginBtn}>
        <Btn bgColor={"tomato"} btnLabel={"Login"} textColor={"#fff"} onPress={handleLoginBtn}/>
      </View>
     

      </View>
      </Background>
    )
  }

  const styles = StyleSheet.create({
    container:{
    flex:1,
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center"
  },
  slogan:{
    position:"absolute",
    justifyContent:"center",
    alignItems:"center",
    top:100,
    width:300
  },
    title:{
      fontWeight:'bold',
      marginHorizontal:40,
      marginVertical:60,    
      fontSize:24,
      color:"white" 
        },
        signBtn:{
          position:"absolute",
          top:590,
          left:40,
          width:300
        },
        LoginBtn:{
          position:"absolute",
          top:490,
          left:40,
          width:300
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