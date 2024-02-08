import { Text, View, TouchableOpacity,Image,StyleSheet } from 'react-native'
import React, { Component } from 'react'

const Settings =()=>{
    return (
        <View style={{ margin: 10, alignItems: "center", gap: 10 }}>
        <Text
          style={{
            fontWeight: "600",
            borderBottomWidth: 0.5,
            borderColor:"grey",
            paddingBottom: 0,
            width: 300,
            textAlign: "center",
            marginBottom: 20,
            fontFamily:"LoraSemiBold"
          }}
        >
          Other
        </Text>
        <View style={{ width: 200, gap: 10 }}>
          <TouchableOpacity
            style={styles.info}
          >
            <Image
              source={require("../../public/images/emailfilled.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.info}
          >
            <Image
              source={require("../../public/images/share.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>Share</Text>
          </TouchableOpacity>
          <TouchableOpacity
           style={styles.info}
          >
            <Image
              source={require("../../public/images/information-button.png")}
              style={styles.icon}
            />
            <Text style={styles.text}>About Us</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({
    icon:{
        width: 24,
         tintColor:"tomato",
        height: 24
      },
      text:{
        fontFamily:"Lora",
        fontWeight:"400"
      },
      info: {
        flexDirection: "row",
        gap: 80,
        justifyContent: "flex-start",
      },
})

export default Settings