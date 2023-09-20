import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React from "react";
import IntroductionImg1 from "../../assets/onboardingtwo.jpg";
import stepOne from "../../assets/stepOne.png";
import { useNavigation } from "@react-navigation/native";

const Onboarding_two = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={IntroductionImg1}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View>
          <Text style={styles.Header}>Second Page</Text>

          <Text style={styles.sunText}>
            you can effortlessly schedule appointments, access your dental
            records and communicate with your dentist all in one place
          </Text>
        </View>
        <View style={styles.Steps}>
          <Image source={stepOne} />
        </View>
        <View style={styles.BtnContainer}>
          <TouchableOpacity
            style={styles.NextIntroBtn}
            onPress={() => {
              navigation.navigate("onboardingthree");
            }}
          >
            <Text style={styles.BtnText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Onboarding_two;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "white",
  },
  Header: {
    textAlign: "center",
    fontSize: 26,
    fontWeight: "bold",
    marginTop: 60,
    color: "orange",
  },
  imageContainer: {
    width: "100%",
    height: 360, // Adjust this value to control the image height
  },
  image: {
    flex: 1,
    width: "100%",
    height: "100%", // Make sure the height is null to maintain the image's aspect ratio
  },
  sunText: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 15,
    marginTop: 30,
    paddingHorizontal: 21,
    color: "#9E9D9D",
    marginBottom: 32,
  },
  Steps: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 40,
  },
  BtnContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 50,
  },
  NextIntroBtn: {
    width: 350,
    height: 50,
    backgroundColor: "orange",
    borderRadius: 32,
    alignItems: "center",
    justifyContent: "center",
  },
  BtnText: {
    color: "white",
    fontSize: 15,
    fontWeight: "600",
  },
});
