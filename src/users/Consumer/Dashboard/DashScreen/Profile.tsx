import { Text, View } from "react-native";
import React, { Component } from "react";

export class Profile extends Component {
  render() {
    return (
      <View style={{flex:1,backgroundColor:"#fff",justifyContent:"center",alignItems:"center"}}>
        <Text style={{fontSize:34}}>Profile</Text>
      </View>
    );
  }
}

export default Profile;
