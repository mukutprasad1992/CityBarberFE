import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { Component } from "react";
import { useNavigation } from "@react-navigation/native";

const ProviderProfile = () => {

  const navigation = useNavigation<any>();

  const onClickSeats = () =>{
    navigation.navigate("AddSeatsScreen")
  }

  return (
    <SafeAreaView style={{ backgroundColor: "#f1f1f1" }}>
      {/* Header */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingBottom: 5,
          height: 90,
          backgroundColor: "#fff",
          alignItems: "flex-end",
        }}
      >
        <View style={{ marginLeft: 15 }}>
          <Text style={{ fontWeight: "800" }}>
            Hi<Text>Samarth!</Text>
          </Text>
          <TouchableOpacity>
            <Text style={{ fontSize: 12, color: "grey" }}>
              Edit Profile
              <Image
                source={require("../../../../../public/images/next.png")}
                style={{ width: 12, height: 12, tintColor: "grey" }}
              />
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ marginRight: 15 }}>
          <Image
            source={require("../../../../../public/images/image1.jpg")}
            style={{ width: 45, height: 45, borderRadius: 50 }}
          />
        </View>
      </View>
      {/* sections */}
      <View style={{ marginTop: 20, height: "auto", backgroundColor: "#fff" }}>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "lightgrey",
            height: 60,
          }}
        >
          <TouchableOpacity
          onPress={onClickSeats}
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../../../public/images/chairDark.png")}
                style={{ width: 20, height: 20 }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 14 }}>
                  Your Seats
                </Text>
                <Text style={{ fontSize: 10 }}>View all yours added seats</Text>
              </View>
            </View>
            <Image
              source={require("../../../../../public/images/next.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "lightgrey",
            height: 60,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../../../public/images/time-left.png")}
                style={{ width: 20, height: 20, tintColor: "black" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 14 }}>
                  Your Shop Timing
                </Text>
                <Text style={{ fontSize: 10 }}>View yours added timing</Text>
              </View>
            </View>
            <Image
              source={require("../../../../../public/images/next.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "lightgrey",
            height: 60,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../../../public/images/hourglass.png")}
                style={{ width: 20, height: 20, tintColor: "black" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 14 }}>
                  Your Shop Slots
                </Text>
                <Text style={{ fontSize: 10 }}>View all yours added slots</Text>
              </View>
            </View>
            <Image
              source={require("../../../../../public/images/next.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "lightgrey",
            height: 60,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../../../public/images/hair-cut-tool.png")}
                style={{ width: 20, height: 20, tintColor: "black" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 14 }}>
                  Your Services
                </Text>
                <Text style={{ fontSize: 10 }}>
                  View all yours added sevices
                </Text>
              </View>
            </View>
            <Image
              source={require("../../../../../public/images/next.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderBottomWidth: 0.5,
            borderColor: "lightgrey",
            height: 60,
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
              justifyContent: "space-between",
              height: 50,
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image
                source={require("../../../../../public/images/setting.png")}
                style={{ width: 20, height: 20, tintColor: "black" }}
              />
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontWeight: "800", fontSize: 14 }}>
                  Accounts & Settings
                </Text>
                <Text style={{ fontSize: 10 }}>
                  Location,Payment,Permissions & More
                </Text>
              </View>
            </View>
            <Image
              source={require("../../../../../public/images/next.png")}
              style={{ width: 24, height: 24, marginRight: 10 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ backgroundColor: "#fff", marginTop: 20, height: "auto" }}>
        <TouchableOpacity
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginLeft: 10,
            justifyContent: "space-between",
            height: 50,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            {/* <Image source={require("../../../../../public/images/logout.png")}style={{width:24,height:24,tintColor:"black"}}/> */}
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontWeight: "800", fontSize: 14 }}>Logout</Text>
            </View>
          </View>
          <Image
            source={require("../../../../../public/images/next.png")}
            style={{ width: 24, height: 24, marginRight: 10 }}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProviderProfile;
