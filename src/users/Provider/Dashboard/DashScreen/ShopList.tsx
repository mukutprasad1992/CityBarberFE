import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import { Text } from "react-native-paper";
import Btn from "../../../../component/Btn";
import { EditShopDetails } from "./EditShopDetails";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { ScrollView, Touchable } from "react-native";
import { AddShop } from "./AddShop";
import { useNavigation } from "@react-navigation/native";
import { SlotService } from "./SlotService";
export const ShopList = () => {
  const navigation: any = useNavigation();

  const SlothandleChange = () => {
    navigation.navigate(SlotService);
  };
  const EdithandleChange = () => {
    navigation.navigate(EditShopDetails);
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: "800", marginTop: 60 }}>
        Your Shop
      </Text>
      <View style={styles.shop}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../../../../public/images/barberShop.jpg")}
          />
        </View>
        <Text style={styles.titleText}>Modern Hair Cutting saloon </Text>

        <View style={styles.textContainer}>
          <View style={styles.textView}>
            <Text>
              Opening Day : <Text style={{ fontWeight: "800" }}>Monday</Text>{" "}
            </Text>
            <Text>
              Closing Day : <Text style={{ fontWeight: "800" }}>Tuesday</Text>
            </Text>
          </View>

          <View style={styles.textView}>
            <Text>
              Opening Time : <Text style={{ fontWeight: "800" }}>07:00</Text>
            </Text>
            <Text>
              Closing Time : <Text style={{ fontWeight: "800" }}>22:00</Text>
            </Text>
          </View>
          <Text
            style={{
              fontSize: 14,
              color: "#000000",
              fontWeight: "900",
              textAlign: "center",
              marginTop: 20,
            }}
          >
            Owner Name : ABC
          </Text>
        </View>
        {/* Button code--------> */}
        <View style={styles.btns}>
          <TouchableOpacity style={styles.addbtn} onPress={EdithandleChange}>
            <Text style={{ fontWeight: "600" }}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.addbtn} onPress={SlothandleChange}>
            <Text style={{ fontWeight: "600" }}>Slot & Services</Text>
          </TouchableOpacity>
        </View>
      </View>
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
    // backgroundColor: "red",
  },

  btn: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "tomato",
    borderRadius: 20,
    // backgroundColor: "#e2e2e2",

    marginTop: 10,
  },

  shop: {
    alignItems: "center",
    height: 700,
    width: "100%",
    backgroundColor: "#e3ebf7 ",
    borderRadius: 20,
    marginTop: 30,
  },

  imageContainer: {
    height: "60%",
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#1B1212",
    textAlign: "center",
    marginTop: 20,
  },

  cardText: {
    fontSize: 18,
  },

  textContainer: {
    marginTop: 10,
    height: 80,
    width: "80%",
    gap: 5,
    textAlign: "center",
  },
  textView: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 5,
    opacity: 1,
  },
  btns: {
    height: 60,
    width: "90%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  editbtn: {
    height: 60,
    width: "auto",
  },
  addbtn: {
    height: 40,
    width: 120,
    backgroundColor: "tomato",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginTop: 50,
  },
});
