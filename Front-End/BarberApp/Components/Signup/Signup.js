import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { Button, SocialIcon, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import styles from "../Style"; // Make sure to import your style file

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);

  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onLogInPress = () => {
    navigation.navigate("Login");
  };

  //   const fetchPost = async () => {
  //     try {
  //       const response = await axios.post("local/users/add-user", {
  //         username,
  //         email,
  //         password,
  //       });
  //       console.log("Response:", response.data);
  //       navigation.navigate("Login");
  //     } catch (error) {
  //       console.error("Error:", error);
  //       console.error("Error response:", error.response);
  //     }
  //   };

  //   const onSignUpPress = async () => {
  //     let hasError = false;

  //     if (!username) {
  //       setUsernameError("Username is required");
  //       hasError = true;
  //     }

  //     if (!email) {
  //       setEmailError("Email is required");
  //       hasError = true;
  //     } else if (!isValidEmail(email)) {
  //       setEmailError("Invalid email format");
  //       hasError = true;
  //     }

  //     if (!password) {
  //       setPasswordError("Password is required");
  //       hasError = true;
  //     }

  //     if (hasError) {
  //       return;
  //     }

  //     try {
  //       await fetchPost();
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const isValidEmail = (email) => {
  //     const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  //     return emailPattern.test(email);
  //   };

  const handleToggleCheckbox = () => {
    setChecked(!isChecked);
  };

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image
              //   source={require("../assets/logo.png")}
              style={{
                width: 120,
                height: 120,
                marginStart: 120,
                marginTop: 100,
              }}
              resizeMode="contain"
            />

            <Text style={styles.logoText}>Sign Up</Text>
            <TextInput
              placeholder="Name"
              placeholderColor="#c4c3cb"
              style={styles.loginFormTextInput}
              onChangeText={setUsername}
              value={username}
            />
            {usernameError && (
              <Text style={styles.errorText}>{usernameError}</Text>
            )}

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

            <View style={{ flexDirection: "row", alignItems: "flex-end" }}>
              <TouchableOpacity
                style={styles.checkboxContainer}
                onPress={handleToggleCheckbox}
              >
                <View style={[styles.checkbox, isChecked && styles.checked]} />
              </TouchableOpacity>
              <Text
                style={{
                  color: "grey",
                }}
              >
                Remember Me
              </Text>
            </View>
            <Button
              buttonStyle={styles.loginButton}
              style={{ marginTop: 40 }}
              //   onPress={() => onSignUpPress()}
              onPress={() => navigation.navigate("login")}
              title="Sign Up"
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 170,
                marginStart: 70,
              }}
            >
              <Text>Already have an account? </Text>
              <TouchableOpacity onPress={onLogInPress}>
                <Text style={{ color: "orange", fontWeight: "bold" }}>
                  Log In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default SignUp;
