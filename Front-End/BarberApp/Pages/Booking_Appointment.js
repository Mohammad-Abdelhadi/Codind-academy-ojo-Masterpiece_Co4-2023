import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  FlatList,
  setSelectedItem,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import React, { useState, reduce } from "react";
import curvedBack from "../assets/curvedBack.jpg";
import barbar from "../assets/barber.jpg";
import axios from "axios";

const Booking_Appointment = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const userId = route.params?.userId;
  const userEmail = route.params?.userEmail;

  const [selectedItem, setSelectedItem] = useState(null); // Track the selected item
  const [selectedService, setSelectedServices] = useState([]); // Track selected services
  const data = [
    { id: 1, name: "Mohammad",rating:5, imageSource: barbar },
    { id: 2, name: "Messi ",rating:4.5, imageSource: barbar },
    { id: 3, name: "Alawi",rating:4.8, imageSource: barbar },
    { id: 4, name: "bassam",rating:4.9, imageSource: barbar },
  ];

  const services = [
    {
      id: 1,
      name: "Hair Cut",
      price: 6.0,
      time: 30,
    },
    {
      id: 2,
      name: "Hair Styling",
      price: 18.0,
      time: 60,
    },
    {
      id: 3,
      name: "Hair Coloring",
      price: 13.0,
      time: 45,
    },
    {
      id: 4,
      name: "Beard Trim",
      price: 6.0,
      time: 20,
    },
    {
      id: 5,
      name: "Hair Wash",
      price: 11.0,
      time: 40,
    },
    // Add other selected services here...
  ];

  //submit booking
  // const handleFormSubmit = async () => {
  //   const selectedBarber = data.find((item) => item.id === selectedItem);

  //   if (!selectedBarber) {
  //     console.error("Selected barber not found.");
  //     return;
  //   }

  //   // Get detailed service information for selected services
  //   const selectedServicesDetails = services
  //     .filter((service) => selectedService.includes(service.id))
  //     .map((service) => ({
  //       id: service.id,
  //       name: service.name,
  //       price: service.price,
  //       time: service.time,
  //     }));

  //   const dataToSend = {
  //     userId: userId,
  //     appointments: [
  //       {
  //         barber: {
  //           id: selectedBarber.id,
  //           name: selectedBarber.name,
  //         },
  //         services: selectedServicesDetails, // Include service details
  //         time: "10:00", // You should fill this with the selected time
  //         status: "pending",
  //       },
  //     ],
  //   };

  //   try {
  //     const response = await axios.post(
  //       `https://barberapp.onrender.com/api/user/postAppointment/${userId}`,

  //       dataToSend,
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     const responseBody = response.data; // Get the response data

  //     console.log("Response Body:", responseBody);

  //     if (response.status === 201) {
  //       const firstAppointment = responseBody.appointments[0];
  //       console.log("First Appointment:", firstAppointment);
  //       console.log("user IDDDDDD:", userId);

  //       navigation.navigate("AppointmentTime");
  //     } else {
  //       console.error("Error:", response.status, response.statusText);
  //     }
  //   } catch (error) {
  //     console.error("Network error:", error);
  //   }
  // };

  const handleFormSubmit = () => {
    // Check if a barber is selected
    if (selectedItem === null) {
      console.error("Please select a barber.");
      return;
    }

    // Check if at least one service is selected
    if (selectedService.length === 0) {
      console.error("Please select at least one service.");
      return;
    }

    // Navigate to the AppointmentTime page and pass the data as params
    navigation.navigate("AppointmentTime", {
      userEmail: userEmail,
      userId: userId,
      selectedBarber: data.find((item) => item.id === selectedItem), // Get the selected barber object
      selectedServices: selectedService.map((serviceId) => ({
        ...services.find((service) => service.id === serviceId),
      })), // Get the selected service objects
    });
  };

  const backHome = () => {
    navigation.navigate("Home");
  };

  const calculateTotalPriceAndTime = () => {
    let totalPrice = 0;
    let totalTime = 0;

    selectedService.forEach((serviceId) => {
      const selectedServiceItem = services.find(
        (service) => service.id === serviceId
      );
      if (selectedServiceItem) {
        totalPrice += parseFloat(selectedServiceItem.price);
        totalTime += parseInt(selectedServiceItem.time);
      }
    });

    return { totalPrice: totalPrice.toFixed(2), totalTime };
  };

  // Function to toggle selection of a service
  const toggleServiceSelection = (serviceId) => {
    if (selectedService.includes(serviceId)) {
      setSelectedServices((prevSelected) =>
        prevSelected.filter((id) => id !== serviceId)
      );
    } else {
      setSelectedServices((prevSelected) => [...prevSelected, serviceId]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.bookingHeader}>
        {/* ... Your header content ... */}
        <TouchableOpacity onPress={backHome}>
          <Image source={curvedBack} />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.allHeaders}>Our Specialist</Text>
      </View>
      <View style={styles.listSpecialist}>
        <FlatList
          data={data}
          horizontal
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => setSelectedItem(item.id)} // Set the selected item on press
              style={[
                styles.Specialist,
                selectedItem === item.id && styles.selectedSpecialist, // Apply a border style if selected
              ]}
            >
              <Image source={item.imageSource} style={styles.SpecialistImage} />
              <Text>{item.name}</Text>
              <Text>⭐{item.rating} Stars</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      <View>
        <Text style={styles.allHeaders}>Our Services</Text>
      </View>
      <FlatList
        data={services}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => toggleServiceSelection(item.id)}
            style={[
              styles.AllServices,
              selectedService.includes(item.id) && styles.selectedService,
            ]}
          >
            <Text>{item.name}</Text>
            <View
              style={{
                fontWeight: "bold",
                color: "orange",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{marginBottom:5}}>{item.time} Min </Text>
              <Text style={{ color: "orange", fontWeight: "bold" }}>
                ${item.price}.00
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
      <TouchableOpacity style={styles.continueBtn} onPress={handleFormSubmit}>
        <Text style={{fontWeight:"bold"}}>
          Total Price: ${calculateTotalPriceAndTime().totalPrice} - Total Time:{" "}
          {calculateTotalPriceAndTime().totalTime} mins
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Booking_Appointment;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 70,
    backgroundColor: "#fafafa",
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  bookingHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  curved: {
    fontSize: 20,
  },
  imageHeader: {
    marginTop: 20,
  },
  allHeaders: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 10,
    marginTop: 20,
  },
  listSpecialist: {
    flexDirection: "row",
  },
  Specialist: {
    backgroundColor: "white",
    width: 130,
    height: 180,
    justifyContent: "start",
    padding: 20,
    borderRadius: 20,
    marginRight: 20,
    alignItems: "center",
  },
  SpecialistImage: {
    width: 100,
    height: 100,
    borderRadius: 20,
    padding: 20,
  },
  selectedSpecialist: {
    borderColor: "orange", // Border color for selected item
    borderWidth: 2, // Border width for selected item
  },

  AllServices: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#ffffff",
    height: 80,
    borderRadius: 16,

    padding: 25,
    marginBottom: 10,
  },
  selectedService: {
    borderColor: "orange", // Border color for selected item
    borderWidth: 2,
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
});
