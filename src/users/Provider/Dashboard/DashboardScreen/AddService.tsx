import { Text, View,TouchableOpacity,Image ,StyleSheet,Button} from "react-native";
import React, { Component, useState } from "react";
import InputField from "../../../../component/InputField";



const AddService =()=>{
    const [open, setOpen] = useState(false);
    const [sitOpen, setSitOpne] = useState(false);
    const [serviceValue, setServiceValue] = useState({
        serviceName: "",
        duration: "",
        cost: "",
    });

    const handleInputChange = (name: any, value: any) => {
        setServiceValue({
          ...serviceValue,
          [name]: value,
        });
      };
      const [service, setService] = useState([serviceValue]);
    
    const onPageOpen = () => {
        if (open) {
          setOpen(false);
        } else {
          setOpen(true);
        }
      };
      const onSaveServiceData = () => {
        setOpen(false);
        console.log(service);
      };
    return (
        <View>
<TouchableOpacity
                style={styles.appointments}
                onPress={onPageOpen}
              >
                <Image
                  source={require("../../../../../public/images/image1.jpg")}
                  style={styles.imgbtn}
                />
                <Text
                  style={{
                    fontSize: 18,
                    textAlign: "center",
                    justifyContent: "center",
                    fontWeight: "800",
                    position: "absolute",
                    top: 50,
                    left: 50,
                  }}
                >
                  Add services
                </Text>
              </TouchableOpacity>
        {/* code for add  services popup--------> */}
          {open && (
            <View style={styles.servicesPage}>
              <InputField
                width={300}
                borderBottomWidth={1}
                placeholder="Service name"
                value={serviceValue.serviceName}
                onChangeText={(text: any) =>
                  handleInputChange("serviceName", text)
                }
              />
              <InputField
                width={300}
                borderBottomWidth={1}
                keyboardType="numeric"
                placeholder="Duration in hour"
                value={serviceValue.duration}
                onChangeText={(text: any) =>
                  handleInputChange("duration", text)
                }
              />
              <InputField
                width={300}
                borderBottomWidth={1}
                keyboardType="numeric"
                placeholder="Cost"
                value={serviceValue.cost}
                onChangeText={(text: any) => handleInputChange("cost", text)}
              />
              <Button onPress={onSaveServiceData} title="Save" />
            </View>
         )}
         </View>

    );
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
      imgbtn: {
        height: "100%",
        width: "100%",
        position: "absolute",
        opacity: 0.2,
      },
      servicesPage: {
        position: "absolute",
        height: 350,
        width: "90%",
        backgroundColor: "rgba(255, 255, 255, 0.9)",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        top: 100,
        elevation: 10,
        shadowColor: "red",
        borderRadius: 10,
      },
  })

export default AddService;
