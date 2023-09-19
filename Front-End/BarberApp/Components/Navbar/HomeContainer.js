import React from "react";
import NavBar from "./Navbar";
import { Text } from "react-native"; // Add this import for demonstration

const HomeContainer = ({ route }) => {
  // Extract user data from the route parameters
  const { userEmail, authToken, appointments, userId } = route.params || {};

  return (
    <>
      <NavBar />
      {/* Render content using user data */}
    </>
  );
};

export default HomeContainer;
