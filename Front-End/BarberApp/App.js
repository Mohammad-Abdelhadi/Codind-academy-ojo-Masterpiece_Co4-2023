import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

import Splash from "./Components/Onboarding/Splash";
import onboardingone from "./Components/Onboarding/Onboarding_one";
import onboardingtwo from "./Components/Onboarding/Onboarding_two";
import onboardingthree from "./Components/Onboarding/Onboarding_three";
import signup from "./Components/Signup/Signup";
import login from "./Components/Login/Login";
import Home from "./Components/Home/Home";
import Booking_Appointment from "./Pages/Booking_Appointment";
import AppointmentTime from "./Pages/AppointmentTime";
import Succssess from "./Pages/Succssess";
import MyAppointments from "./Pages/MyAppointments";
import CurrentAppointments from "./Pages/CurrentAppointments";
import HomeContainer from "./Components/Navbar/HomeContainer";
import { useRoute } from "@react-navigation/native";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash" headerMode="none">
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            gestureEnabled: false,
            headerLeft: null,
            headerShown: false,
          }}
        />
        {/* <Stack.Screen
          name="Home"
          component={HomeContainer}
          options={{
            gestureEnabled: false,
            headerLeft: null,
            headerShown: false,
          }}
        /> */}
        <Stack.Screen name="onboardingthree" component={onboardingthree} />
        <Stack.Screen name="Login" component={login} />
        <Stack.Screen name="signup" component={signup} />
        <Stack.Screen
          name="Booking_Appointment"
          component={Booking_Appointment}
        />
        <Stack.Screen name="AppointmentTime" component={AppointmentTime} />
        <Stack.Screen name="Succssess" component={Succssess} />
        <Stack.Screen name="onboardingone" component={onboardingone} />
        <Stack.Screen name="onboardingtwo" component={onboardingtwo} />
        <Stack.Screen name="MyAppointments" component={MyAppointments} />
        <Stack.Screen
          name="CurrentAppointments"
          component={CurrentAppointments}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
