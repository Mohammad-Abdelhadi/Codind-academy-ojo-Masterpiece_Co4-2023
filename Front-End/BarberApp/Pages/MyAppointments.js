import React, { useEffect, useState } from "react";
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
import axios from "axios";

import logo from "../assets/backarrow.png";
import onboarding from "../assets/onboarding.png";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

const MyAppointments = () => {
  const route = useRoute();
  const userId = route.params?.userId;
  const userEmail = route.params?.userEmail;
  const totalprice = route.params?.totalprice;
  const totaltime = route.params?.totaltime;

  const navigation = useNavigation();
  const [appointments, setAppointments] = useState([]);

  const getStatusStyle = (status) => {
    switch (status) {
      case "accepted":
        return styles.appointmentStatusAccepted;
      case "rejected":
        return styles.appointmentStatusRejected;
      case "completed":
        return styles.appointmentStatusCompleted;
      default:
        return styles.appointmentStatusPending;
    }
  };

  const renderAppointments = () => {
    return appointments.map((appointment, index) => (
      <View key={index}>
        <View style={styles.barberContainer}>
          <View style={styles.barberSection}>
            <View style={styles.TimeAndStatus}>
              <Text style={styles.appointmentdateandtime}>
                {appointment.date} | {appointment.time}
              </Text>
              <Text style={getStatusStyle(appointment.status)}>
                {appointment.status}
              </Text>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.barberInfo}>
              <Image source={onboarding} style={styles.barberImage} />
              <View style={styles.barberTextContainer}>
                <Text style={[styles.barberText, { fontWeight: "bold" }]}>
                  {appointment.barber.name}
                </Text>
                <Text style={styles.barberText}>
                  {appointment.barber.id} Amman, jawa
                </Text>
                <Text style={styles.barberText}>Services:</Text>
                <Text style={styles.Services}>
                  {appointment.services.map((service, index) =>
                    index === appointment.services.length - 1
                      ? `${service.name}`
                      : `${service.name}, `
                  )}
                </Text>

                <Text style={styles.totalprice}>
                  Total Price: {appointment.totalprice} JOD
                </Text>
              </View>
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            </View>
          </View>
          <View style={styles.gap}></View>
        </View>
      </View>
    ));
  };

  const fetchAppointments = async () => {
    try {
      const response = await axios.get(
        `https://barberapp.onrender.com/api/user/getAppointmentsForUser/${userId}`
      );

      if (response.status === 200) {
        setAppointments(response.data);
      }
    } catch (error) {
      console.error("Error fetching appointments:", error);
    }
  };

  useEffect(() => {
    fetchAppointments();
  }, []); // Fetch appointments when the component mounts

  const handleFormSubmitHome = () => {
    navigation.navigate("Home", {
      userId: userId,
      userEmail: userEmail,
      totalprice: totalprice,
      totaltime: totaltime,
    });
  };

  const handleFormSubmitMyAppointments = () => {
    navigation.navigate("MyAppointments", {
      userId: userId,
      userEmail: userEmail,
      totalprice: totalprice,
      totaltime: totaltime,
    });
  };

  const handleFormSubmitCurrentAppointments = () => {
    navigation.navigate("CurrentAppointments", {
      userId: userId,
      userEmail: userEmail,
      totalprice: totalprice,
      totaltime: totaltime,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logo} />
        <Text style={styles.headerText}>
          Appointments ({appointments.length})
        </Text>
        <View style={styles.iconsContainer}>
          <MaterialIcons name="favorite-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>{renderAppointments()}</ScrollView>
      <View style={styles.content}>
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
    padding: 10,
    height: 70,
  },
  scrollView: {
    flex: 1,
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
    marginHorizontal: 3,
  },
  totalprice: {
    fontSize: 13,
    fontWeight: "bold",
    borderWidth: 1,
    borderColor: "orange",
    borderRadius: 5,
    padding: 5,
    textAlign: "center",
  },
  Services: {
    color: "orange",
    fontWeight: "600",
  },
  barberContainer: {
    flexDirection: "column",
    borderRadius: 10,
    elevation: 4,
  },
  barberSection: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 30,
  },
  gap: {
    height: 20,
  },
  barberInfo: {
    flexDirection: "row",
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
    fontSize: 25,
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
    borderBottomColor: "black",
    borderBottomWidth: 0.3,
    marginVertical: 10,
    alignSelf: "center",
    width: "90%",
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
    padding: 10,
  },
  appointmentStatusRejected: {
    backgroundColor: "#e31a1c",
    color: "white",
    padding: 10,
  },
  appointmentStatusPending: {
    backgroundColor: "#ffc800",
    color: "white",
    padding: 10,
  },
  appointmentStatusAccepted: {
    backgroundColor: "#65c728",
    color: "white",
    padding: 10,
  },
  appointmentdateandtime: {
    fontWeight: "500",
    fontSize: 16,
  },
});

export default MyAppointments;
