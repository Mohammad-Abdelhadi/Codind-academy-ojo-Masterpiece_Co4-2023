import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import Splash from "./Components/Onboarding/Splash";
import onboadringone from "./Components/Onboarding/Onboarding_one";
import onboadringtwo from "./Components/Onboarding/Onboarding_two";
import onboardingthree from "./Components/Onboarding/Onboarding_three";
import signup from "./Components/Signup/Signup";
import login from "./Components/Login/Login";
import Home from "./Components/Home/Home";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "onboadringone") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "onboadringtwo") {
            iconName = focused ? "person" : "person-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "orange", // Active tab color
        tabBarInactiveTintColor: "#808080", // Inactive tab color
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" }, // Tab label style
        // tabBarStyle: {
        //   // paddingTop: 5,
        //   // paddingBottom: 5,
        //   height: 80, // Adjust the tab bar height as needed
        //   backgroundColor: "#f8f8f8", // Background color
        //   borderTopColor: "transparent", // Remove top border
        // },
      })}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        // options={{ headerShown: true }}
      />
      <Tab.Screen
        name="onboadringone"
        component={onboadringone}
        // options={{ headerShown: true }}
      />
      <Tab.Screen
        name="onboadringtwo"
        component={onboadringtwo}
        // options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainTabs" headerMode="none">
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="onboardingthree" component={onboardingthree} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="login" component={login} />
      </Stack.Navigator>
      {/* <Navbar /> */}
    </NavigationContainer>
  );
};

export default App;
