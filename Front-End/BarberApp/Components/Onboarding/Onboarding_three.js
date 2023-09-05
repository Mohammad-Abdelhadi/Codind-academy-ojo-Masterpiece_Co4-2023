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

import bg from "../../assets/third.png";

const Onboarding_three = () => {
  const navigation = useNavigation(); // Initialize the navigation object

  return (
    <View style={styles.container}>
      <Image source={bg} />

      <Text style={styles.header}>
        come be handsome and beautiful with us right now!
      </Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("signup")}
      >
        <Text style={styles.btnText}>Next</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
};
export default Onboarding_three;

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
