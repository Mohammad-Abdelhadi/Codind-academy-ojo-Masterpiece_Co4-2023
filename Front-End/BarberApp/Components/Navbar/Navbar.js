import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import MyAppointments from "../../Pages/MyAppointments";
import CurrentAppointments from "../../Pages/CurrentAppointments";
import Home from "../Home/Home";

const Tab = createBottomTabNavigator();

const NavBar = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "MyAppointments") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "CurrentAppointments") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "#808080",
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyAppointments" component={MyAppointments} />
      <Tab.Screen name="CurrentAppointments" component={CurrentAppointments} />
    </Tab.Navigator>
  );
};

export default NavBar;
