import React from "react";
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
import { Button, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { ErrorMessage } from "formik"; // Import ErrorMessage from Formik

import styles from "../Style"; // Make sure to import your style file
import { useState } from "react";
const validationSchema = Yup.object().shape({
  role: Yup.string().required("Role is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
});

const SignUp = () => {
  const navigation = useNavigation();
  const [emailError, setEmailError] = useState(""); // State variable for email registration error

  const onLogInPress = () => {
    navigation.navigate("Login");
  };

  const fetchPost = async (values) => {
    try {
      const response = await axios.post(
        "https://barberapp.onrender.com/api/user/signup",
        {
          email: values.email,
          password: values.password,
          role: "user",
        }
      );
      console.log("Response:", response.data);
      navigation.navigate("Login");
    } catch (error) {
      console.error("Error:", error);
      console.error("Error response:", error.response);
      // Handle duplicate email error if needed
      if (error.response && error.response.status === 409) {
        setEmailError("Email is already registered"); // Set the email error message
      } else {
        setEmailError(""); // Reset the email error message if it's not a duplicate email error
      }
    }
  };

  const handleSignUp = async (values) => {
    try {
      await fetchPost(values);
    } catch (error) {
      // Handle validation errors from fetchPost
      throw new Yup.ValidationError(error.message);
    }
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

            <Formik
              initialValues={{ role: "user", email: "", password: "" }}
              onSubmit={(values) => handleSignUp(values)}
              validationSchema={validationSchema}
            >
              {({
                values,
                handleChange,
                handleSubmit,
                errors,
                touched,
                isValid,
              }) => (
                <>
                  <TextInput
                    placeholder="Email"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                    onChangeText={handleChange("email")}
                    value={values.email}
                  />
                  {touched.email && errors.email && (
                    <Text style={styles.errorText}>{errors.email}</Text>
                  )}
                  {emailError ? (
                    <Text style={[styles.errorText, { color: "red" }]}>
                      {emailError}
                    </Text>
                  ) : null}
                  {/* Display email error message */}
                  <TextInput
                    placeholder="Password"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />
                  <ErrorMessage
                    name="password"
                    component={Text}
                    style={styles.errorText} // Add your error text styles
                  />
                  <View
                    style={{ flexDirection: "row", alignItems: "flex-end" }}
                  >
                    <TouchableOpacity
                      style={styles.checkboxContainer}
                      onPress={handleSubmit}
                    >
                      <View style={[styles.checkbox, styles.checked]} />
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
                    onPress={handleSubmit}
                    title="Sign Up"
                    disabled={!isValid}
                  />
                </>
              )}
            </Formik>

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
