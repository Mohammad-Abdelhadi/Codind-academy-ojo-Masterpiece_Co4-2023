import React, { useState } from "react";
import {
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Button } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import jwtDecode from "jwt-decode";
import styles from "../Style";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigation = useNavigation();

  const validateEmail = () => {
    if (!email) {
      setEmailError("Email is required");
      return false;
    }
    // You can add more email validation logic here if needed
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("Password is required");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const onSignUpPress = () => {
    navigation.navigate("signup");
  };

  // const handleLogin = async () => {
  //   if (!validateEmail() && !validatePassword()) {
  //     return;
  //   }

  //   try {
  //     const loginResponse = await axios.post(
  //       "https://barberapp.onrender.com/api/user/login",
  //       {
  //         email,
  //         password,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     if (loginResponse.status === 200) {
  //       const authToken = loginResponse.data.token;
  //       const appointments = loginResponse.data.appointments;

  //       // Decode the JWT token to get the user ID
  //       const decodedToken = jwtDecode(authToken);
  //       const userIdFromToken = decodedToken._id;

  //       // Print the user ID in the console
  //       console.log("User ID:", userIdFromToken);

  //       navigation.navigate("Home", {
  //         userEmail: loginResponse.data.email,
  //         authToken,
  //         appointments,
  //         userId: userIdFromToken, // Pass the user ID as a parameter
  //       });
  //     }
  //   } catch (error) {
  //     console.error("Error logging in:", error);
  //     setLoginError("Login failed. Please check your credentials.");
  //   }
  // };

  const handleLogin = async () => {
    if (!validateEmail() && !validatePassword()) {
      return;
    }

    try {
      const loginResponse = await axios.post(
        "https://barberapp.onrender.com/api/user/login",
        {
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (loginResponse.status === 200) {
        // Decode the JWT token to get the user ID
        const decodedToken = jwtDecode(loginResponse.data.token);
        const userIdFromToken = decodedToken._id; // Extract userId from the decoded token

        const appointments = loginResponse.data.appointments;

        // Print the user ID in the console
        console.log("Auth Token:", decodedToken);
        console.log("User Email:", loginResponse.data.email);
        console.log("User ID:", userIdFromToken);

        navigation.navigate("Home", {
          userEmail: loginResponse.data.email,
          authToken: loginResponse.data.token, // Make sure to include authToken
          appointments,
          userId: userIdFromToken,
        });
      }
    } catch (error) {
      console.error("Error logging in:", error);
      setLoginError("Login failed. Please check your credentials.");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image
              // source={require("../assets/logo.png")}
              style={{
                width: 120,
                height: 120,
                marginStart: 120,
                marginTop: 100,
              }}
              resizeMode="contain"
            />

            <Text style={styles.logoText}>Log in</Text>
            <TextInput
              placeholder="Email"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              value={email}
              onChangeText={setEmail}
            />
            {emailError && <Text style={styles.errorText}>{emailError}</Text>}
            <TextInput
              placeholder="Password"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              secureTextEntry={true}
              value={password}
              onChangeText={setPassword}
            />
            {passwordError && (
              <Text style={styles.errorText}>{passwordError}</Text>
            )}
            {loginError && <Text style={styles.errorText}>{loginError}</Text>}
            {/* <TouchableOpacity onPress={onForgotPasswordPress}> */}
            <Text style={{ marginStart: 220, marginBottom: 15 }}>
              Forgot Password?
            </Text>
            {/* </TouchableOpacity> */}
            <Button
              buttonStyle={styles.loginButton}
              onPress={handleLogin}
              title="Login"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 250,
                marginStart: 70,
              }}
            >
              <Text>Don't have an account? </Text>
              <TouchableOpacity onPress={onSignUpPress}>
                <Text style={{ color: "orange", fontWeight: "bold" }}>
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}
