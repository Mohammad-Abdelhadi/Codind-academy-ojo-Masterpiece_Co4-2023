import { StyleSheet, Text, View, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import Barber from "../../assets/BarberLogo.gif";

const { width, height } = Dimensions.get("window");

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("onboardingone"); // Navigate to StartApp after 2 seconds
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <View style={styles.container}>
      <Image source={Barber} style={styles.gif} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  gif: {
    width: '100%', // Adjust the width as needed
    height: "100%", // Adjust the height as needed
  },
});

export default Splash;
