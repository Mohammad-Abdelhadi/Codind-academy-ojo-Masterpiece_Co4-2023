import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

import logo from "../assets/backarrow.png";
import banner from "../assets/banner.jpg";
import onboarding from "../assets/onboarding.png";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
const MyAppointments = () => {
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
      <View>
        <View style={styles.headerContainer}>
          <Image source={logo} />
          <Text style={styles.headerText}>My Appointments</Text>
          <View style={styles.iconsContainer}>
            <MaterialIcons name="favorite-outline" size={24} color="black" />
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
        <ScrollView>
          <View style={styles.barberContainer}>
            <View style={styles.barberSection}>
              <View style={styles.TimeAndStatus}>
                <Text style={styles.appointmentdateandtime}>
                  Nov-20-2023 - 15:00 PM
                </Text>
                <Text style={styles.appointmentStatusPending}>Pending</Text>
                {/* <Text style={styles.appointmentStatusAccepted}>Accepted</Text> */}
                {/* <Text style={styles.appointmentStatusRejected}>Rejected</Text> */}
                {/* <Text style={styles.appointmentStatusCompleted}>Completed</Text> */}
              </View>
              <View style={styles.horizontalLine}></View>
              <View style={styles.barberInfo}>
                <Image source={onboarding} style={styles.barberImage} />
                <View style={styles.barberTextContainer}>
                  <Text style={[styles.barberText, { fontWeight: "bold" }]}>
                    Mohammad Bassam
                  </Text>
                  <Text style={styles.barberText}>0093 Amman, jawa</Text>
                  <Text style={styles.barberText}>Services:</Text>
                </View>
                <MaterialIcons
                  name="favorite-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>
            {/* White gap */}

            <View style={styles.gap}></View>

            <View style={styles.barberSection}>
              <View style={styles.barberInfo}>
                <Image source={onboarding} style={styles.barberImage} />
                <View style={styles.barberTextContainer}>
                  <Text style={[styles.barberText, { fontWeight: "bold" }]}>
                    Mohammad Bassam
                  </Text>
                  <Text style={styles.barberText}>0093 Amman, jawa</Text>
                  <Text style={styles.barberText}>Services:</Text>
                </View>
                <MaterialIcons
                  name="favorite-outline"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.content}>
        <Text>MyAppointments</Text>
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
            <Text>CurrentAppointments</Text>
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
    padding: 16,

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
  barberContainer: {
    flexDirection: "column",
    borderRadius: 10,
    elevation: 4,
  },
  barberSection: {
    backgroundColor: "white", // White background for each barber section
    padding: 16,
    borderRadius: 30,
  },
  gap: {
    height: 20, // Adjust the height to control the gap size
  },

  barberTitle: {
    fontSize: 12,
    fontWeight: "bold",
    marginVertical: 10,
  },
  barberInfo: {
    flexDirection: "row",
    marginTop: 10,
  },
  barberImage: {
    width: 100,
    height: 100,
    marginRight: 20,
    borderRadius: 10,
  },
  barberTextContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: 10,
  },
  barberText: {
    fontSize: 13,
    // marginTop: 5,
  },
  headerContainer: {
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 10,
    flex: 1,
  },
  header: {
    padding: 16,
  },
  horizontalLine: {
    borderBottomColor: "black", // Change the color to a contrasting color (e.g., black)
    borderBottomWidth: 0.3, // Increase the border width to make it more visible
    marginVertical: 10,
    alignSelf: "center", // Center the line horizontally within its parent container
    width: "90%", // Set the desired width
  },
  TimeAndStatus: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 5,
  },
  appointmentStatusCompleted: {
    backgroundColor: "#009eff",
    color: "white",
    padding: 5,
  },
  appointmentStatusRejected: {
    backgroundColor: "#e31a1c",
    color: "white",
    padding: 5,
  },
  appointmentStatusPending: {
    backgroundColor: "#ffc800",
    color: "white",
    padding: 10,
  },
  appointmentStatusAccepted: {
    backgroundColor: "#65c728",
    color: "white",
    padding: 5,
  },
  appointmentdateandtime: {
    fontWeight: "400",

    fontSize: 16,
  },
});

export default MyAppointments;
