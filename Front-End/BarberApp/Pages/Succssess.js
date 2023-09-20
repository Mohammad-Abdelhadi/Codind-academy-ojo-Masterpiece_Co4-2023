import { StyleSheet, Image, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import sucsess from "../assets/sucsess.png";
import { useNavigation, useRoute } from "@react-navigation/native";
const Succssess = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId;
  const appointments = route.params?.appointments;
  const userEmail = route.params?.userEmail;
  const totalprice = route.params?.totalprice;
  const totaltime = route.params?.totaltime;

  return (
    <View style={styles.container}>
      <View style={styles.succssesImage}>
        <Image source={sucsess} />
      </View>
      <View style={styles.successTexts}>
        <Text style={styles.successTextHeader}>Success Booking</Text>
      </View>

      <Text style={styles.successSubtext}>
        You don’t have any notifications at this time notifications at this have
      </Text>
      <View>
        <TouchableOpacity
          style={styles.BtnReturnToHome}
          onPress={() => {
            navigation.navigate("Home", {
              userId: userId,
              appointments: appointments,
              userEmail: userEmail,
              totalprice: totalprice,
              totaltime: totaltime,
            });
          }}
        >
          <Text style={styles.BtnText}>Return To Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.BtnBookingAgain}
          onPress={() => {
            navigation.navigate("AppointmentTime");
          }}
        >
          <Text style={styles.BtnText}> Book a new appointment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Succssess;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  succssesImage: { marginBottom: 30 },
  successTextHeader: {
    fontSize: 30,
    fontWeight: "700",
  },
  successSubtext: {
    color: "#9E9D9D",
    width: 300,
    marginTop: 10,
    textAlign: "center",
  },
  successTexts: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  BtnReturnToHome: {
    backgroundColor: "orange",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 350,
    borderRadius: 32,
    marginTop: 50,
  },
  BtnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },

  BtnBookingAgain: {
    backgroundColor: "orange",
    color: "white",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    width: 350,
    borderRadius: 32,
    marginTop: 10,
  },
});
