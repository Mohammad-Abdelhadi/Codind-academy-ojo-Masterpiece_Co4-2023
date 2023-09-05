import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import bg from "../../assets/onboarding.png";

const StartApp = () => {
  return (
    <View>
      {/* <Text>StartApp</Text> */}
      <Image source={bg} style={styles.img} />
      <View style={styles.header}>
        <View style={styles.textContainer}>
          <Text style={[styles.text, styles.margin]}> Welcome to ❤ </Text>
          <Text style={[styles.secondtxt, styles.margin]}> Casca </Text>
          <Text style={[styles.thirdtxt, styles.margin]}>
            The best barber & Salon app in this century for your good looks and
            beauty.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default StartApp;

const styles = StyleSheet.create({
  img: {
    flex: 1,
  },
  header: {
    position: "absolute",
    bottom: 100,
    paddingHorizontal: 16,
  },
  textContainer: {
    paddingHorizontal: 16, // Apply padding to the container
  },
  text: {
    color: "white",
    fontSize: 40,
  },
  secondtxt: {
    color: "orange",
    fontSize: 70,
    fontWeight: "bold",
  },
  thirdtxt: {
    color: "white",
    fontSize: 20,
    marginLeft: 25,
  },
  margin: {
    marginTop: 10,
    marginBottom: 10,
  },
});
