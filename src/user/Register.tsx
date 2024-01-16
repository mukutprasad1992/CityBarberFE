import { Text, TextInput, View, StyleSheet, Button , Image, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Background from '../screens/Background';
import InputField from '../component/InputField';
import Btn from '../component/Btn';
import Logo from '../component/Logo';
import { useNavigation } from '@react-navigation/native';


export const Register =() => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [phone,setphone] = useState("");

    const navigation: any = useNavigation();

    const onSignupPressed =() =>{

        // console.warn(name)
        // console.warn(email)
        // console.warn(password)
        // console.warn(phone)
        navigation.navigate("Reset")
    }

    return (
     <Background>
      <ScrollView>
        <View style={styles.container}>
              <Logo/>
            <Text style={{fontSize:40,fontWeight:"800"}}>City Barber</Text>
       <InputField placeholder={"User Name"} value={name} onChangeText={(text:any)=>setName(text)}/>
       <InputField placeholder={"Email"} value={email} keyboardType={"email-address"} onChangeText={(text:any)=>setEmail(text)}/>
       <InputField placeholder={"Contact"} value={phone} keyboardType={"numeric"} onChangeText={(text:any)=>setphone(text)}/>
       <InputField placeholder={"Password"} value={password} secureTextEntry={true}  onChangeText={(text:any)=>setPassword(text)}/>

       <Btn bgColor={"black"} textColor={"white"} btnLabel="Sign Up" onPress={onSignupPressed}/>
    
       
        <View style={{flexDirection:'row',alignItems:"center",justifyContent:"center"}}>
        <Text style={{margin:10,color:"#fff",fontWeight:"bold"}}>Already have an account | </Text>
      <TouchableOpacity >
            <Text style={{color:"blue"}}>Sign in</Text>
        </TouchableOpacity>
        
        </View>
        </View>
        </ScrollView>
     </Background>
    )
  }


const styles = StyleSheet.create({
    container:{
        marginVertical:5,
       width:400, 
       justifyContent:"center",
       alignItems:"center",   
      paddingRight:10,
      position:"relative"
    },
        

})

export default Register