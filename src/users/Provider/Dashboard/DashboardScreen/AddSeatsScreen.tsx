import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Button,
  FlatList,
} from "react-native";
import React, { Component, useState } from "react";
import Btn from "../../../../component/Btn";
import { useNavigation } from "@react-navigation/native";
import InputField from "../../../../component/InputField";
import {
  widthPercentageToDP,
  heightPercentageToDP,
} from "react-native-responsive-screen";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const AddSeatsScreen = () => {
  const [seatName, setSeatName] = useState("");
  const [seatNumber, setSeatNumber] = useState("");
  const [addSeats, setAddSeats] = useState(false);
  const [seatsData, setSeatsData] = useState<{ seatName: string; seatNumber: string }[]>([]); // Explicitly define the type

  const ClickOnAddSeats = () => {
    setAddSeats(!addSeats);
  };

  const navigation = useNavigation<any>();
  const clickOnBack = () => {
    navigation.goBack();
  };

  const clickOnSubmit = () => {
   
    if (seatName.trim() !== "" && seatNumber.trim() !== "") {
    
      setSeatsData([...seatsData, { seatName, seatNumber }]);
      setAddSeats(false);
      setSeatName(""); 
      setSeatNumber(""); 
    }


    setAddSeats(false);
    console.log(seatName);
    console.log(seatNumber);
  };
  const clickDelete = (key:any) =>{
     setSeatsData(prevData=> prevData.filter(Item=>Item.key !== key));
  }
  return (
    <SafeAreaView>
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
        {/* header */}
        <View
          style={{
            marginLeft: 15,
            marginBottom: 8,
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={clickOnBack}>
            <Image
              source={require("../../../../../public/images/back.png")}
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 14, color: "grey", marginLeft: 10 }}>
            {" "}
            Your Seats
          </Text>
        </View>
      </View>
      {/* button section */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Btn
          bgColor={"grey"}
          btnLabel={"Add Seats"}
          textColor={"#fff"}
          onPress={ClickOnAddSeats}
        />
      </View>
      <Modal visible={addSeats} transparent={true}>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <View
            style={{
              width: "90%",
              height: 400,
              backgroundColor: "#fff",
              borderWidth: 1,
              borderColor: "lightgrey",
              padding: 20,
              borderRadius: 20,
              alignItems: "center",
              gap: 20,
            }}
          >
            <View>
              <Text>Seat Name</Text>
              <InputField
                width={widthPercentageToDP("70%")}
                height={heightPercentageToDP("5%")}
                borderWidth={1}
                borderColor={"lightgrey"}
                value={seatName}
                onChangeText={(text: any) => {
                  setSeatName(text);
                }}
              />
            </View>
            <View>
              <Text>Seat Number</Text>
              <InputField
                width={widthPercentageToDP("70%")}
                height={heightPercentageToDP("5%")}
                value={seatNumber}
                borderWidth={1}
                borderColor={"lightgrey"}
                onChangeText={(text: any) => {
                  setSeatNumber(text);
                }}
              />
            </View>
            <Btn
              bgColor={"grey"}
              btnLabel={"Submit"}
              textColor={"#fff"}
              onPress={clickOnSubmit}
            />
          </View>
        </View>
      </Modal>

      {/* Added Seats List */}
      <View
        style={{
          height: "100%",
          width: "100%",
          backgroundColor: "#fff",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "80%",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <Text>Seats Name</Text>
          <Text>seats No.</Text>
        </View>
        <View style={{alignItems:"center"}}>
        <FlatList
        data={seatsData}
        renderItem={
          ({ item, index }) => (
            <View style={{flexDirection:"row",alignItems:"center",gap:5}}>
            <View key={`seat_${index}`} style={{ 
              flexDirection: "row",
              // backgroundColor:"red",
              width:"80%",
              borderWidth:1,
              borderColor:"lightgrey",
              borderRadius:10,
              alignItems:"center",
              height:50,
              justifyContent: "space-around",
              marginTop: 10,
              marginLeft:30,
              gap:180 }}>
              <Text>{item.seatName}</Text>
              <Text>{item.seatNumber}</Text>
            </View>
              <TouchableOpacity  onPress={()=>clickDelete(item.key)} >
              <Image source={require("../../../../../public/images/delete.png")}style={{width:24,height:24}}/>
              </TouchableOpacity>
              </View>
          )
        }/>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default AddSeatsScreen;
