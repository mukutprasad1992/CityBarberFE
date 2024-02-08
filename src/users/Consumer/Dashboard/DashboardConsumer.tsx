import { Text, View, Image, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Bookings from "./DashScreen/Bookings";
import Location from "../../../screens/Location";
import Help from "../../../screens/Help";
import Profile from "../../Provider/Dashboard/DashboardScreen/ProviderProfile";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import Header from "../../../component/Header";

const DashboardConsumer = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Bookings />
      ) : selectedTab == 1 ? (
        <Location />
      ) : selectedTab == 2 ? (
        <Help />
      ) : (
        <Profile />
      )}
      {/* {selectedTab == 0 ? (
        <Header name={"Shops"} />
      ) : selectedTab == 1 ? (
        <Header name={"Location"} />
      ) : selectedTab == 2 ? (
        <Header name={"Help"} />
      ) : (
        <Header name={"Profile"} />
      )} */}
      <View style={styles.bottomNavigation}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../../../../public/images/store.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 0 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            setSelectedTab(1);
          }}
        >
          <Image
            source={require("../../../../public/images/location.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 1 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(2);
          }}
          style={styles.btn}
        >
          <Image
            source={require("../../../../public/images/customer-support.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 2 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelectedTab(3);
          }}
          style={styles.btn}
        >
          <Image
            source={require("../../../../public/images/user.png")}
            style={{
              width: widthPercentageToDP("6"),
              height: heightPercentageToDP("3"),
              tintColor: selectedTab == 3 ? "#fff" : "#bebebe",
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomNavigation: {
    width: "100%",
    height: heightPercentageToDP("8"),
    backgroundColor: "tomato",
    position: "absolute",
    bottom: 0,
    alignItems: "center",
    flexDirection: "row",
  },
  btn: {
    width: "25%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  cartList: {
    width: "20%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DashboardConsumer;
