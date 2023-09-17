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
import { Button, CheckBox } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import styles from "../Style"; // Make sure to import your style file

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Wrong password , Example : aA12345678#"
    ),
  role: Yup.string(),
});

const SignUp = () => {
  const navigation = useNavigation();
  const [error, setError] = useState(""); // State to store and display errors

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
          role: values.role || "user", // Set default role if not provided
        }
      );
      console.log("Response:", response.data);
      navigation.navigate("Login");
    } catch (error) {

      if (error.response && error.response.status === 409) {
        setError("Email is already registered");
      } else {
        setError("Email is already registered");
      }
    }
  };

  const handleSignUp = async (values) => {
    try {
      setError(""); // Clear any previous errors
      await fetchPost(values);
    } catch (error) {
      setError(error.message);
    }
  };

  const [isRoleHidden, setIsRoleHidden] = useState(true);

  return (
    <KeyboardAvoidingView style={styles.containerView} behavior="padding">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
            <Image
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
              initialValues={{ email: "", password: "", role: "" }}
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
                  {!isRoleHidden && (
                    <>
                      <TextInput
                        placeholder="Role"
                        placeholderColor="#c4c3cb"
                        style={[
                          styles.loginFormTextInput,
                          isRoleHidden && { display: "none" },
                        ]}
                        onChangeText={handleChange("role")}
                        value={values.role}
                      />
                      {touched.role && errors.role && !isRoleHidden && (
                        <Text style={styles.errorText}>{errors.role}</Text>
                      )}
                    </>
                  )}

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

                  <TextInput
                    placeholder="Password"
                    placeholderColor="#c4c3cb"
                    style={styles.loginFormTextInput}
                    secureTextEntry={true}
                    onChangeText={handleChange("password")}
                    value={values.password}
                  />
                  {touched.password && errors.password && (
                    <Text style={styles.errorText}>{errors.password}</Text>
                  )}

                  {error && <Text style={styles.errorText}>{error}</Text>}

                  <View
                    style={{ flexDirection: "row", alignItems: "flex-end" }}
                  >
                    <TouchableOpacity
                      style={styles.checkboxContainer}
                      onPress={handleSubmit}
                    >
                      <View style={[styles.checkbox, styles.checked]} />
                    </TouchableOpacity>
                    <Text style={{ color: "grey" }}>Remember Me</Text>
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
