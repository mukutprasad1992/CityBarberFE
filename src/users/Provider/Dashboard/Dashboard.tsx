import { ImageBackground, StyleSheet, Text, View } from "react-native";
import Background from "../../../component/Background";

const Dashboard = () => {
  return (
    <Background>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 40,
            position: "absolute",
            top: 50,
            left: 20,
            fontWeight: "800",
          }}
        >
          hello LeopardRuns
        </Text>
        <Text
          style={{
            fontSize: 40,
            position: "absolute",
            top: 300,
            left: 50,
            fontWeight: "800",
          }}
        >
          this is provider DashboardPage
        </Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 1000,
    width: "100%",
  },
});
export default Dashboard;
