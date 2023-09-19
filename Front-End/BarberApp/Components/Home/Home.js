import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import axios from "axios"; // Import axios for making HTTP requests
import logo from "../../assets/backarrow.png";
import banner from "../../assets/banner.jpg";
import { MaterialIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import NavBar from "../Navbar/Navbar";

// import NavBar from "../Navbar/Navbar";
const categoryData = [
  { text: "haircut" },
  { text: "masseage" },
  { text: "shaves" },
  { text: "shaves" },
  { text: "shaves" },
];

const categoryIconMapping = {
  haircut: "ios-cut",
  masseage: "md-body-sharp",
  shaves: "ios-heart",
};

const Home = ({ navigation }) => {
  // const navigation = useNavigation();

  const route = useRoute();
  const authToken = route.params?.authToken;
  const userId = route.params?.userId;
  const userEmail = route.params?.userEmail;

  // Define a state variable to store the user's appointments
  const [userAppointments, setUserAppointments] = useState([]);
  const handleFormSubmit = () => {
    navigation.navigate("Booking_Appointment", {
      userId: userId,
      userEmail: userEmail,
    });
  };
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

  // Create a function to fetch user appointments
  const fetchUserAppointments = async () => {
    try {
      // Make an HTTP GET request to your server endpoint
      const response = await axios.get(
        `https://barberapp.onrender.com/api/user/getAppointmentsForUser/${userId}`
      );

      if (response.status === 200) {
        // Assuming the response contains an array of appointments
        const appointments = response.data;
        setUserAppointments(appointments);
      }
    } catch (error) {
      console.error("Error fetching user appointments:", error);
    }
  };

  // Use useEffect to fetch user appointments when the component mounts
  useEffect(() => {
    fetchUserAppointments();
  }, [userAppointments]); // The empty dependency array ensures this effect runs once when the component mounts

  const UserEmail = userEmail ? userEmail.split("@")[0] : "Guest";

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
        <Text style={styles.headerText}>
          Good morning, {UserEmail}✌
          {/* {authToken && <Text>Token: {authToken}</Text>} */}
          {/* {userId && <Text>ID: {userId}</Text>} */}
          {userAppointments && (
            <Text>Appointments Length: {userAppointments.length}</Text>
          )}
        </Text>
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
        {/* <Barbers /> */}
        <TouchableOpacity style={styles.continueBtn} onPress={handleFormSubmit}>
          <Text>Home</Text>
        </TouchableOpacity>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "flex-end",
          }}
        >
          <TouchableOpacity
            style={styles.btnBar}
            onPress={handleFormSubmitHome}
          >
            <Text>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnBar}
            onPress={handleFormSubmitMyAppointments}
          >
            <Text>MyAppointments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btnBar}
            onPress={handleFormSubmitCurrentAppointments}
          >
            <Text>Live Appointments</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.continueBtn} onPress={handleFormSubmit}>
          <Text>hello</Text>
        </TouchableOpacity> */}
      </View>
      {/* <View>
        <NavBar />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fafafa",
  },
  continueBtn: {
    backgroundColor: "orange",
    color: "white",
    fontWeight: "700",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 50,
    width: 370,
    borderRadius: 32,
  },
  btnBar: {
    backgroundColor: "orange",
    color: "white",
    fontWeight: "700",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    height: 50,
    width: 120,
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
    textAlign: "center",
  },
  horizontalLine: {
    borderBottomColor: "gray",
    borderBottomWidth: 0.3,
    marginVertical: 10,
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

export default Home;
