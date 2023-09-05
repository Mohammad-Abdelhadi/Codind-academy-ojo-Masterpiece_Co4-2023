// import React from "react";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Ionicons from "react-native-vector-icons/Ionicons";

// import Home from "../Home/Home";
// import onboadringone from "../Onboarding/Onboarding_one";
// import onboardingtwo from "../Onboarding/Onboarding_two";

// const Tab = createBottomTabNavigator();

// const Navbar = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ focused, color, size }) => {
//           let iconName;

//           if (route.name === "Home") {
//             iconName = focused ? "home" : "home-outline";
//           } else if (route.name === "onboadringone") {
//             iconName = focused ? "cart" : "cart-outline";
//           } else if (route.name === "onboardingtwo") {
//             iconName = focused ? "person" : "person-outline";
//           }

//           return <Ionicons name={iconName} size={size} color={color} />;
//         },
//         tabBarActiveTintColor: "orange", // Active tab color
//         tabBarInactiveTintColor: "#808080", // Inactive tab color
//         tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" }, // Tab label style
//         tabBarStyle: {
//           paddingTop: 5,
//           paddingBottom: 5,
//           height: 60, // Adjust the tab bar height as needed
//           backgroundColor: "#f8f8f8", // Background color
//           borderTopColor: "transparent", // Remove top border
//         },
//       })}
//     >
//       <Tab.Screen
//         name="Home"
//         component={Home}
//         options={{ headerShown: true }}
//       />
//       <Tab.Screen
//         name="onboadringone"
//         component={onboadringone}
//         options={{ headerShown: true }}
//       />
//       <Tab.Screen
//         name="onboardingtwo"
//         component={onboardingtwo}
//         options={{ headerShown: true }}
//       />
//     </Tab.Navigator>
//   );
// };

// export default Navbar;
