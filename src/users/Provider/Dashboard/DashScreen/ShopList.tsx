import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native-paper";
import Btn from "../../../../component/Btn";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";

import { ScrollView, Touchable } from "react-native";
import { AddShop } from "./AddShop";
import { useNavigation } from "@react-navigation/native";

export const ShopList = () => {
  const navigation: any = useNavigation();

  const handleSignupBtn = () => {
    navigation.navigate("AddShop");
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.shop}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../../public/images/barberShop.jpg")}
          />
        </View>
        <View style={styles.cardContent}>
          <View style={styles.shopCard}>
            <Text style={styles.titleText}>Modern Hair Cutting saloon </Text>

            <Text style={{ marginTop: 10 }}>Owner Name :</Text>
            <Text>
              Opening day Time : <Text>07:00</Text>
            </Text>

            <Text>
              Closing day Time : <Text>22:00 </Text>
            </Text>
            <Text>
              Opening day : <Text>Monday </Text>
            </Text>
            <Text>
              Closing day : <Text>Tuesday </Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.btn}>
            <Text>Shop</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* <View style={styles.newShop}>
        <TouchableOpacity
          style={{
            height: 60,
            width: 60,
            borderRadius: 50,
            borderWidth: 2,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#fff",
            shadowColor: "black",
            shadowOpacity: 5,
            shadowRadius: 20,
          }}
          onPress={handleSignupBtn}
        >
          <Image
            style={{
              width: widthPercentageToDP("8"),
              height: heightPercentageToDP("5"),
            }}
            source={require("../../../../../public/images/plus.png")}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  newShop: {
    height: 100,
    zIndex: 1,
    right: 15,
    marginTop: 50,
  },

  btn: {
    width: "20%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    borderRadius: 20,
    marginBottom: 20,
  },

  shop: {
    alignItems: "center",
    height: "auto",
    width: "90%",
    // backgroundColor: "#e2e2e2",
    backgroundColor: "#fdf6f6",
    borderRadius: 20,
    marginTop: 100,
  },

  imageContainer: {
    height: "50%",
    width: "100%",
    padding: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  cardContent: {
    height: "auto",
    width: "100%",
    justifyContent: "space-around",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    paddingTop: 0,
  },

  shopCard: {
    width: "70%",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
    marginBottom: 10,
  },

  titleText: {
    fontSize: 18,
    fontWeight: "700",
  },
});
