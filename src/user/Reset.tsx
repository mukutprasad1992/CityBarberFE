import { Text, TextInput, View, StyleSheet, Button , Image, ImageBackground, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'
import LinearGradient from 'react-native-linear-gradient';
import Background from '../screens/Background';
import InputField from '../component/InputField';
import Btn from '../component/Btn';
import Logo from '../component/Logo';
import { useNavigation } from '@react-navigation/native';


export const Reset =() => {
    const [newPassword,setNewPassword] = useState("");
    const [ConfirmPassword,setConfirmPassword] = useState("");


    const navigation: any = useNavigation();

    const onSignupPressed =() =>{

        // console.warn(name)
        // console.warn(email)
        // console.warn(password)
        // console.warn(phone)
        navigation.navigate("Register")
    }

    return (
     <Background>
      <ScrollView>
        <View style={styles.container}>
              <Logo/>
            <Text style={{fontSize:25,fontWeight:"900"}}>Reset password</Text>
       <InputField placeholder={"New Password"} value={newPassword} onChangeText={(text:any)=>setNewPassword(text)}/>
       <InputField placeholder={"Confirm Password"} value={ConfirmPassword} onChangeText={(text:any)=>setConfirmPassword(text)}/>

       <Btn bgColor={"black"} textColor={"white"} btnLabel="Reset password" onPress={onSignupPressed}/>

        </View>
        </ScrollView>
     </Background>
    )
  }


const styles = StyleSheet.create({
    container:{
        marginVertical:50,
       width:400, 
       justifyContent:"center",
       alignItems:"center",   
      paddingRight:10
    },
        

})

export default Reset;