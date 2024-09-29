import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { PropsWithChildren } from "react";

// Define props type for the CurrencyButton component
type PropsOfCurrencyBtn = PropsWithChildren<{
  name: string;
  flag: string;
}>;

export default function CurrencyButton(props: PropsOfCurrencyBtn): JSX.Element {
  return (
    <View style={styles.buttonContainer}>
      {/* Flag Text */}
      <Text style={styles.flag}>{props.flag}</Text>

      {/* Name Text */}
      <Text style={styles.name}>{props.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    padding: 5, // Add some padding for spacing
  },
  flag: {
    fontSize: 50, // Large font size for the flag
 
  },
  name: {
    fontSize: 10,
    fontWeight: "bold",
    textAlign: "center", // Center the text within its container
  },
});
