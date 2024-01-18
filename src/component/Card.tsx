import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'
import {Card} from "react-native-paper"
import InputField from './InputField'
import Btn from './Btn'


const CardComponent=()=>{
    return (
        <Card style={{width:"90%" ,borderTopRightRadius:50,borderTopLeftRadius:50}}>
            <Card.Content>
            <View style={{flexDirection:"row"}}>
              <View style={{width:"50%",margin:20}}>
              <Text style={{fontWeight:"bold",fontSize:18}}>Sign up as Consumer</Text>
              </View>
              <View>
                {/* <View style={{width:100,height:100,borderRadius:"50%",borderColor:"#000"}}>
                      <Image source={require("../../public/images/user.png")} style={{width:40,height:40}} />
                </View> */}
             </View>
            </View>
            <View style={{flexDirection:"column",marginBottom:15}}>
             <Text style={{fontSize:10}}>User Name</Text>
           <View style={{flexDirection:"row",borderBottomColor:"#000",borderBottomWidth:0.6}}>
             <Image source={require("../../public/images/user.png")} style={{width:18,height:18,marginTop:5}}/>
             <InputField/>
           </View>
           </View>
            <View style={{flexDirection:"column",marginBottom:15}}>
             <Text style={{fontSize:10}}>Email</Text>
           <View style={{flexDirection:"row",borderBottomColor:"#000",borderBottomWidth:0.6}}>
             <Image source={require("../../public/images/mail.png")} style={{width:18,height:18,marginTop:5}}/>
             <InputField keyboardType={"email-address"}/>
           </View>
           </View>
            <View style={{flexDirection:"column",marginBottom:15}}>
             <Text style={{fontSize:10}}>Password</Text>
           <View style={{flexDirection:"row",borderBottomColor:"#000",borderBottomWidth:0.6}}>
             <Image source={require("../../public/images/telephone.png")} style={{width:18,height:18,marginTop:5}}/>
             <InputField keyboardType={"numeric"}/>
           </View>
           </View>
           
             <Btn bgColor={"orange"} btnLabel={"Sign up"} textColor={"#fff"}/>
           
                </Card.Content>
        </Card>
    )
  }

export default CardComponent;