import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import logo from "../../assets/backarrow.png";
import banner from "../../assets/banner.jpg";
import onboarding from "../../assets/onboarding.png";
const Barbers = () => {
  return (
    // <View>
    <>
      <ScrollView>
        <View style={styles.barberContainer}>
          <View style={styles.barberSection}>
            <View style={styles.barberInfo}>
              <Image source={onboarding} style={styles.barberImage} />
              <View style={styles.barberTextContainer}>
                <Text style={[styles.barberText, { fontWeight: "bold" }]}>
                  Mohammad Bassam
                </Text>
                <Text style={styles.barberText}>0093 Amman, jawa</Text>
                <Text style={styles.barberText}>Barber 3</Text>
              </View>
              <MaterialIcons name="favorite-outline" size={24} color="black" />
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
                <Text style={styles.barberText}>Barber 3</Text>
              </View>
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            </View>
          </View>
          <View style={styles.gap}></View>
          <View style={styles.barberSection}>
            <View style={styles.barberInfo}>
              <Image source={onboarding} style={styles.barberImage} />
              <View style={styles.barberTextContainer}>
                <Text style={[styles.barberText, { fontWeight: "bold" }]}>
                  Mohammad Bassam
                </Text>
                <Text style={styles.barberText}>0093 Amman, jawa</Text>
                <Text style={styles.barberText}>Barber 3</Text>
              </View>
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            </View>
          </View>
          <View style={styles.barberSection}>
            <View style={styles.barberInfo}>
              <Image source={onboarding} style={styles.barberImage} />
              <View style={styles.barberTextContainer}>
                <Text style={[styles.barberText, { fontWeight: "bold" }]}>
                  Mohammad Bassam
                </Text>
                <Text style={styles.barberText}>0093 Amman, jawa</Text>
                <Text style={styles.barberText}>Barber 3</Text>
              </View>
              <MaterialIcons name="favorite-outline" size={24} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>
    </>

    // </View>
  );
};

export default Barbers;

const styles = StyleSheet.create({
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
});
