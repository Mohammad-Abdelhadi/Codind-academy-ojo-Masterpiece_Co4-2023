import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native"; // Import useNavigation

import potato2 from "../../assets/first.png";
import Navbar from "../Navbar/Navbar";

const Onboarding_one = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  return (
    <View style={styles.container}>
      <Image source={potato2} />

      <Text style={styles.header}>
        Find Barbers and Salons Easily in Your Hands
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("onboadringtwo")}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
      {/* <Navbar /> */}
    </View>
  );
};
export default Onboarding_one;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
    marginVertical: 50,
    paddingHorizontal: 20,
  },
  btn: {
    backgroundColor: "#fb9400",
    padding: 10,
    borderRadius: 30,
    width: 350,
    marginTop: 50,
  },
  btnText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
