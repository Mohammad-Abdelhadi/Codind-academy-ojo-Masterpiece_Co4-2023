import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

const CurrentAppointments = () => {
  const route = useRoute();
  const userId = route.params?.userId;
  const userEmail = route.params?.userEmail;
  const navigation = useNavigation();

  const handleFormSubmitHome = () => {
    navigation.navigate("Home", {
      userId: userId,
      userEmail: userEmail,
    });
  };
  const handleFormSubmitMyAppointments = () => {
    navigation.navigate("MyAppointments", {
      userId: userId,
      userEmail: userEmail,
    });
  };
  const handleFormSubmitCurrentAppointments = () => {
    navigation.navigate("CurrentAppointments", {
      userId: userId,
      userEmail: userEmail,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text>Current Appointments</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={handleFormSubmitHome}
          >
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleFormSubmitMyAppointments}
          >
            <Text>MyAppointments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={handleFormSubmitCurrentAppointments}
          >
            <Text>Live Appointments</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    backgroundColor: "orange",
    color: "white",
    fontWeight: "700",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 50,
    width: 120,
    borderRadius: 10,
  },
});

export default CurrentAppointments;
