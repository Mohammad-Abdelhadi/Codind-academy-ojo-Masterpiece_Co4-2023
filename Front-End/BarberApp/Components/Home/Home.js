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
import logo from "../../assets/backarrow.png";
import banner from "../../assets/banner.jpg";
import onboarding from "../../assets/onboarding.png";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import NavBar from "../Navbar/Navbar";
import * as Icon from "@expo/vector-icons"; // Import all icons from Expo Icons
import Barbers from "./Barbers";

const categoryData = [
  { text: "haircut" }, // Custom
  { text: "masseage" }, // Expo
  { text: "shaves" }, // Expo
  { text: "shaves" }, // Expo
  { text: "shaves" }, // Expo
  // Add more categories as needed
];

const categoryIconMapping = {
  haircut: "ios-cut",
  masseage: "md-body-sharp",
  shaves: "ios-heart",
};

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image source={logo} />
        <Text style={styles.headerText}>Casca</Text>
        <View style={styles.iconsContainer}>
          <MaterialIcons name="favorite-outline" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View>
      </View>
      <View style={styles.header}>
        <Text style={styles.headerText}>Morning, Ali ✌</Text>
      </View>
      <View style={styles.searchInput}>
        <EvilIcons
          style={styles.searchIcon}
          name="search"
          size={24}
          color="black"
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor="gray"
        />
      </View>

      <View style={styles.banner}>
        <Image source={banner} style={styles.bannerImage} />
        <View style={styles.bannerTextContainer}>
          <Text style={styles.bannerText}>30% OFF</Text>
          <Text style={[styles.bannerText, styles.todaysSpecial]}>
            Today's Special
          </Text>
          <Text style={styles.bannerText}>
            Get a discount for Every service order! {"\n"} Only valid for today!
          </Text>
          <Text style={[styles.bannerText, styles.discount]}>30% </Text>
        </View>
        <View style={styles.categoriesContainer}>
          {categoryData.map((category, index) => (
            <View style={styles.categoryContainer} key={index}>
              <View style={styles.category}>
                <Ionicons
                  name={categoryIconMapping[category.text]}
                  size={24}
                  color="orange"
                />
              </View>
              <Text style={styles.categoryText}>{category.text}</Text>
            </View>
          ))}
        </View>
        <View style={styles.horizontalLine}></View>
        <Text style={styles.barberTitle}>Our Barbers ✌</Text>
        <Barbers />
      </View>
      {/* <NavBar /> */}
    </SafeAreaView>
  );
};

// Styles remain the same

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 30,
    // paddingTop: 30,

    // paddingVertical: 16,

    backgroundColor: "#fafafa",
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
  searchInput: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    backgroundColor: "rgba(193, 193, 193, 0.2)",
    borderRadius: 10,
    marginHorizontal: 16,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "black",
  },
  input: {
    flex: 1,
    height: 40,
    fontWeight: "bold",
    fontSize: 16,
    color: "black",
    borderRadius: 20,
  },
  banner: {
    flex: 1,
    padding: 16,
  },
  bannerImage: {
    width: "100%",
    height: 200,
    borderRadius: 30,
  },
  bannerTextContainer: {
    position: "absolute",
    left: 40,
    top: 40,
    gap: 30,
  },
  bannerText: {
    color: "white",
    fontWeight: "bold",
  },
  todaysSpecial: {
    fontSize: 30,
  },
  discount: {
    right: -50,
    top: 10,
    position: "absolute",
    fontSize: 40,
  },
  categoriesContainer: {
    flexDirection: "row",
    // justifyContent: "space-between",
    gap: 25,
    alignItems: "center",
    marginTop: 20,
  },
  categoryContainer: {
    alignItems: "center",
  },
  category: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fdf1df",
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  categoryIcon: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  categoryText: {
    marginTop: 5,
    fontWeight: "500",

    textAlign: "center", // Center the text horizontally
  },
  horizontalLine: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
    marginVertical: 10, // Adjust as needed
  },

  barberTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginVertical: 10,
  },
  barberInfo: {
    flexDirection: "row",
    marginTop: 10,
  },
});
