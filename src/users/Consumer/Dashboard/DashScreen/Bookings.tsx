import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  Dimensions,
} from "react-native";
import React, { Component } from "react";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
const { width, height } = Dimensions.get("window");
import { useNavigation } from "@react-navigation/native";

const Bookings = () => {

  const navigation = useNavigation<any>(); 
  const handleBookNow = () => {
        navigation.navigate("ShopSlotDetails");
       };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#e2e2e2",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          width: widthPercentageToDP("95"),
          height: heightPercentageToDP("100"),
          backgroundColor: "#e2e2e2",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ScrollView
          style={{ marginTop: 79.09, marginBottom: 60 }}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              backgroundColor: "#fff",
              width: widthPercentageToDP("90"),
              height: heightPercentageToDP("50"),
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 20,
              marginBottom: 20,
              marginTop: 20,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: heightPercentageToDP("30"),
                borderRadius: 20,
              }}
              source={require("../../../../../public/images/image1.jpg")}
            />
            <Text style={{ fontSize: 22 }}>The Barber Shop</Text>
            <View
              style={{
                flexDirection: "row",
                margin: 20,
                width: "auto",
                justifyContent: "center",
              }}
            >
              <View style={{ width: "60%" }}>
                <Text style={{ fontSize: 10, margin: 5, flexWrap: "wrap" }}>
                  Ews 31 housing board karond, housing park colony, karond,
                  bhopal
                </Text>
              </View>
              <View
                style={{ width: "40%", marginRight: 10, marginVertical: -13 }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "tomato",
                    borderRadius: 50,
                    alignItems: "center",
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("6%"),
                    justifyContent: "center",
                    margin: 20,
                  }}
                  onPress={handleBookNow}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16 * (width / 700),
                      fontWeight: "bold",
                    }}
                  >
                    Book now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: widthPercentageToDP("90"),
              height: heightPercentageToDP("50"),
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: heightPercentageToDP("30"),
                borderRadius: 20,
              }}
              source={require("../../../../../public/images/image2.jpg")}
            />
            <Text style={{ fontSize: 22 }}>The Barber Shop</Text>
            <View
              style={{
                flexDirection: "row",
                margin: 20,
                width: "auto",
                justifyContent: "center",
              }}
            >
              <View style={{ width: "60%" }}>
                <Text style={{ fontSize: 10, margin: 5, flexWrap: "wrap" }}>
                  Ews 31 housing board karond, housing park colony, karond,
                  bhopal
                </Text>
              </View>
              <View
                style={{ width: "40%", marginRight: 10, marginVertical: -13 }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "tomato",
                    borderRadius: 50,
                    alignItems: "center",
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("6%"),
                    justifyContent: "center",
                    margin: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16 * (width / 700),
                      fontWeight: "bold",
                    }}
                  >
                    Book now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: widthPercentageToDP("90"),
              height: heightPercentageToDP("50"),
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: heightPercentageToDP("30"),
                borderRadius: 20,
              }}
              source={require("../../../../../public/images/image3.jpg")}
            />
            <Text style={{ fontSize: 22 }}>The Barber Shop</Text>
            <View
              style={{
                flexDirection: "row",
                margin: 20,
                width: "auto",
                justifyContent: "center",
              }}
            >
              <View style={{ width: "60%" }}>
                <Text style={{ fontSize: 10, margin: 5, flexWrap: "wrap" }}>
                  Ews 31 housing board karond, housing park colony, karond,
                  bhopal
                </Text>
              </View>
              <View
                style={{ width: "40%", marginRight: 10, marginVertical: -13 }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "tomato",
                    borderRadius: 50,
                    alignItems: "center",
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("6%"),
                    justifyContent: "center",
                    margin: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16 * (width / 700),
                      fontWeight: "bold",
                    }}
                  >
                    Book now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              width: widthPercentageToDP("90"),
              height: heightPercentageToDP("50"),
              flexDirection: "column",
              alignItems: "center",
              borderRadius: 20,
              marginBottom: 20,
            }}
          >
            <Image
              style={{
                width: "100%",
                height: heightPercentageToDP("30"),
                borderRadius: 20,
              }}
              source={require("../../../../../public/images/image4.jpg")}
            />
            <Text style={{ fontSize: 22 }}>The Barber Shop</Text>
            <View
              style={{
                flexDirection: "row",
                margin: 20,
                width: "auto",
                justifyContent: "center",
              }}
            >
              <View style={{ width: "60%" }}>
                <Text style={{ fontSize: 10, margin: 5, flexWrap: "wrap" }}>
                  Ews 31 housing board karond, housing park colony, karond,
                  bhopal
                </Text>
              </View>
              <View
                style={{ width: "40%", marginRight: 10, marginVertical: -13 }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "tomato",
                    borderRadius: 50,
                    alignItems: "center",
                    width: widthPercentageToDP("30%"),
                    height: heightPercentageToDP("6%"),
                    justifyContent: "center",
                    margin: 20,
                  }}
                >
                  <Text
                    style={{
                      color: "#fff",
                      fontSize: 16 * (width / 700),
                      fontWeight: "bold",
                    }}
                  >
                    Book now
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default Bookings;
