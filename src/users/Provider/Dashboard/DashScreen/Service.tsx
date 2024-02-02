import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export const Service = () => {
  return (
    <ScrollView style={{ backgroundColor: "grey" }}>
      <View style={styles.root}>
        <View style={styles.slotsServiceConatiner}>
          <View style={styles.serviceCost}>
            <Text style={styles.serviceName}>Hair Cutting</Text>
            <Text style={{ fontWeight: "800" }}>Rs. 200</Text>
          </View>

          <View style={styles.slotsdaytime}>
            <Text style={styles.serviceDay}>Monday</Text>
            <View style={styles.slots}>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
            </View>
          </View>

          <View style={styles.slotsdaytime}>
            <Text style={styles.serviceDay}>Tuesday</Text>
            <View style={styles.slots}>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
            </View>
          </View>

          <View style={styles.slotsdaytime}>
            <Text style={styles.serviceDay}>Wednesday</Text>
            <View style={styles.slots}>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
            </View>
          </View>

          <View style={styles.slotsdaytime}>
            <Text style={styles.serviceDay}>Thursday</Text>
            <View style={styles.slots}>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
            </View>
          </View>

          <View style={styles.slotsdaytime}>
            <Text style={styles.serviceDay}>Friday</Text>
            <View style={styles.slots}>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
            </View>
          </View>

          <View style={styles.slotsdaytime}>
            <Text style={styles.serviceDay}>Satarday</Text>
            <View style={styles.slots}>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
            </View>
          </View>
          <View style={styles.slotsdaytime}>
            <Text style={styles.serviceDay}>Sunday</Text>
            <View style={styles.slots}>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
              <Text style={styles.slot}>10:00-12:00</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    height: "auto",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  slotsServiceConatiner: {
    height: "auto",
    width: "95%",
    backgroundColor: "#d8dfe5",
    borderRadius: 20,
    paddingBottom: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
  },

  serviceCost: {
    height: "auto",
    width: "95%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  serviceName: {
    fontSize: 20,
    fontWeight: "800",
    color: "grey",
  },

  slotsdaytime: {
    height: "auto",
    width: "90%",
    gap: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    padding: 20,
    margin: 5,
  },
  serviceDay: {
    color: "grey",
    fontWeight: "800",
  },
  slots: {
    height: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    gap: 5,
  },

  slot: {
    width: "auto",
    padding: 5,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 10,
    fontSize: 10,
  },
});
