import { Text, View,TouchableOpacity,StyleSheet } from 'react-native'
import React, { Component } from 'react'

const AddSlots =()=>{
  
    return (
      <View>
 <TouchableOpacity style={styles.appointments}>
                <Text>Add slots</Text>
              </TouchableOpacity>

      </View>
    )
  }

const styles = StyleSheet.create({
  appointments: {
    height: 150,
    width: 200,
    backgroundColor: "#D2D4CE",
    margin: 5,
    borderRadius: 7,
    textAlign: "center",
  },
})

export default AddSlots