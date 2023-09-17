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
import Booking_Appointment from "./Pages/Booking_Appointment";
import AppointmentTime from "./Pages/AppointmentTime";
import Succssess from "./Pages/Succssess";
import MyAppointments from "./Pages/MyAppointments";
import CurrentAppointments from "./Pages/CurrentAppointments";

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
          } else if (route.name === "MyAppointments") {
            iconName = focused ? "cart" : "cart-outline";
          } else if (route.name === "login") {
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
      <Tab.Screen name="login" component={login} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="signup" headerMode="none">
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="onboardingthree" component={onboardingthree} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen
          name="Booking_Appointment"
          component={Booking_Appointment}
        />
        <Stack.Screen name="AppointmentTime" component={AppointmentTime} />
        <Stack.Screen name="Succssess" component={Succssess} />
        <Stack.Screen name="onboadringone" component={onboadringone} />
        <Stack.Screen name="onboadringtwo" component={onboadringtwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
