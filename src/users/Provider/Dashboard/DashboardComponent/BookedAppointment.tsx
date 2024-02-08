import { Text, View,FlatList,Image, TouchableOpacity,Modal,Button } from "react-native";
import React, { Component, useState } from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

const BookedAppointment =()=> {
  const [modalVisible, setModalVisible] = useState(false);
  const handleRightClick = () => {
    alert("Approved!!!");
  };
  const handleDelete = () => {
    alert("Cart Deleted!!!!!");
  };
  const UserAppointmentData = [
    {
      id: 1,
      image: require("../../../../../public/images/image1.jpg"),
      name: "Raju",
      service: ["cutting", "Shaving", "Coloring"],
      seatNo: ["S1"],
      timeSlot: ["10:00", "11:00"],
      Date:"10/2/24"
    },
    {
      id: 2,
      image: require("../../../../../public/images/image2.jpg"),
      name: "liger",
      service: ["Coloring"],
      seatNo: ["S2", "S3"],
      timeSlot: ["10:00", "11:00"],
      Date:"10/2/24"
    },
    {
      id: 3,
      image: require("../../../../../public/images/image3.jpg"),
      name: "Billu",
      service: ["Coloring", "facial"],
      seatNo: ["S1", "S4"],
      timeSlot: ["12:00", "1:00", "4:00", "5:00"],
      Date:"10/2/24"
    },
    {
      id: 4,
      image: require("../../../../../public/images/image4.jpg"),
      name: "Anurag",
      service: ["trimming"],
      seatNo: ["S2"],
      timeSlot: ["12:00"],
      Date:"10/2/24"
    },
    {
      id: 5,
      image: require("../../../../../public/images/image4.jpg"),
      name: "Surekha",
      service: ["Facial"],
      seatNo: ["S2"],
      timeSlot: ["2:00", "3:00"],
      Date:"10/2/24"
    },
  ];

  const colorArray = ["#fcab62", "#e68d53", "#c97849", "#dfc578"];

    return (
      <View>
<Text style={{fontWeight:"800",marginLeft:10}}>
          Booked Appointment
        </Text>
        <FlatList
          data={UserAppointmentData}
          //   style={{marginTop:70,marginBottom:60}}
          //   showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          horizontal
          renderItem={({ item, index }) => (
            <View
              key={index}
              style={{
                backgroundColor: colorArray[index % colorArray.length],
                width: widthPercentageToDP("80"),
                height: heightPercentageToDP("20"),
                flexDirection: "row",
                // alignItems: "center",
                borderRadius: 20,
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              <View
                style={{
                  marginLeft: 20,
                  // marginBottom:20,
                  width: "20%",
                  justifyContent: "center",
                  alignItems:"center"
                }}
              >
                <Image
                  style={{
                    width: "90%",
                    height: "35%",
                    borderRadius: 50,
                  }}
                  source={item.image}
                />
                <Text
                  style={{ fontSize: 12, fontWeight: "bold", color: "#fff",flexWrap:"wrap" }}
                >
                  {item.name}
                </Text>
              </View>

              <View
                style={{
                  flexDirection: "column",
                  //   backgroundColor:"red",
                  margin: 2,
                  height:"auto",
                  padding: 9,
                  width: "60%",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* <View style={{ width: "100%" }}> */}
                <Text style={{ fontWeight: "600", color: "#fff",fontSize:14 }}>
                  Services:
                  {item.service.map((item, index): any => (
                    <Text
                      key={index}
                      style={{ fontSize: 10, marginTop: 5, color: "#fff",flexWrap:"wrap" }}
                    >
                      {index > 0 ? "," : ""}
                      {item}
                    </Text>
                  ))}
                </Text>
                <Text style={{ fontWeight: "600", color: "#fff",fontSize:14 }}>
                  Seat Number:
                  {item.seatNo.map((item, index): any => (
                    <Text
                      key={index}
                      style={{ fontSize: 10, marginTop: 5, color: "#fff",flexWrap:"wrap"}}
                    >
                      {index > 0 ? "," : ""}
                      {item}
                    </Text>
                  ))}
                </Text>
                <Text style={{ fontWeight: "600", color: "#fff",fontSize:14 }}>
                  Time Slots:
                  {item.timeSlot.map((item, index): any => (
                    <Text
                      key={index}
                      style={{ fontSize: 10, marginTop: 5, color: "#fff",flexWrap:"wrap" }}
                    >
                      {index > 0 ? "," : ""}
                      {item}
                    </Text>
                  ))}
                </Text>
                <Text style={{color:"#fff",fontWeight:"800"}}>Date:<Text style={{ fontSize: 10, marginTop: 5, color: "#fff",flexWrap:"wrap" }}>{item.Date}</Text>
                </Text>
              </View>
              <View></View>
              {/* </View> */}
              <View
                style={{
                  flexDirection: "column",
                  width: "10%",
                  alignItems: "center",
                  gap: 80,
                  justifyContent: "center",
                }}
              >
                <TouchableOpacity onPress={handleRightClick}>
                  <Image
                    source={require("../../../../../public/images/check-mark.png")}
                    style={{ width: 25, height: 25, tintColor: "#fff" }}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                  <Image
                    source={require("../../../../../public/images/delete.png")}
                    style={{ width: 25, height: 25, tintColor: "#fff" }}
                  />
                </TouchableOpacity>
                <Modal
                  animationType="slide"
                  transparent={false}
                  visible={modalVisible}
                  onRequestClose={() => setModalVisible(false)}
                >
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      backgroundColor: "rgba(0,0,0,0.5)",
                    }}
                  >
                    <View
                      style={{
                        backgroundColor: "white",
                        padding: 15,
                        width: "90%",
                        borderRadius: 10,
                        position: "relative",
                        justifyContent: "center",
                      }}
                    >
                      <Text>Are you want to cancel appointment:</Text>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                          margin: 20,
                        }}
                      >
                        <Button title="Submit" onPress={handleDelete} />
                        <Button
                          title="Cancel"
                          onPress={() => setModalVisible(false)}
                        />
                      </View>
                    </View>
                  </View>
                </Modal>
              </View>
            </View>
          )}
        />
      </View>
    );
  }


export default BookedAppointment;
