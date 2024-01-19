import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../../../component/Background";
import Btn from "../../../component/Btn";
import { useNavigation } from "@react-navigation/native";
import { AddShop } from "./AddShop";
const Dashboard = () => {
  const navigation = useNavigation();

  const addShop = () => {
    navigation.navigate(AddShop);
  };
  return (
    <View>
      <Text
        style={{
          fontSize: 45,
          position: "absolute",
          color: "black",
          top: 120,
          left: 20,
          fontWeight: "600",
        }}
      >
        Welcome to Dashboard
      </Text>

      <View style={styles.root}>
        <Btn
          bgColor={"tomato"}
          btnLabel={"Add Shop"}
          textColor={"#fff"}
          onPress={addShop}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    height: 700,
    width: 400,
    justifyContent: "center",
    marginTop: 200,
    marginLeft: 10,
    borderRadius: 20,
  },
});
export default Dashboard;
