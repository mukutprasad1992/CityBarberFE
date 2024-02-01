import {
  Text,
  Dimensions,
  View,
  StyleSheet,
} from "react-native";
import React from "react";
import Background from "../component/Background";
import Btn from "../component/Btn";
import { useNavigation } from "@react-navigation/native";
import Login from "../auth/Login";
import Signup from "../users/Signup";

const { width, height } = Dimensions.get("window");

interface HomeProps {
  navigation: any;
}

const Home: React.FC<HomeProps> = ({ navigation }: any) =>{



  const handleLoginBtn = () =>{
    navigation.navigate(Login)
  }
  const handleSubmitBtn = () =>{
    navigation.navigate(Signup)
  }
  

  return (
    <Background>
      <View style={styles.container}>
        <Text style={styles.title}>CityBarber</Text>
        <View>
                <View
                  style={{
                    marginBottom: height * (0 / 100),
                    marginTop: width * (90 / 100),
                  }}
                >
                  <Btn
                    bgColor={"tomato"}
                    btnLabel={"Login"}
                    textColor={"#fff"}
                    onPress={handleLoginBtn}
                  />
                </View>
              </View>
        
        <View>
                <View
                  style={{
                    marginBottom: height * (1 / 100),
                    marginTop: width * (2 / 100),
                  }}
                >
                  <Btn
                    bgColor={"tomato"}
                    btnLabel={"Sign Up"}
                    textColor={"#fff"}
                    onPress={handleSubmitBtn}
                  />
                </View>
              </View>
        
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },

  title: {
    fontWeight: "800",
    fontSize: 70 * (width / 700),
    fontFamily: "Roboto",
    color: "white",
    top: height * (15 / 100),
    position: "absolute",
  },

 
});

export default Home;
