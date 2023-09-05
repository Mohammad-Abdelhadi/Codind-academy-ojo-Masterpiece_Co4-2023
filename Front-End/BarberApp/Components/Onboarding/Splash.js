import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate("onboadringone"); // Navigate to StartApp after 2 seconds
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <View style={styles.bg}>
      <Text>B</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: "orange",
    flex: 1,
  },
});

export default Splash;
