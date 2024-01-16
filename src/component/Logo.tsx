import { Text, View, Image } from 'react-native'
import React, { Component } from 'react'

export class Logo extends Component {
  render() {
    return (
      <View>
             <Image style={{width:300,
                            height:300,
                           tintColor:"#000"}} 
                source={require("../../public/images/Logo.png")}/>
      </View>
    )
  }
}

export default Logo