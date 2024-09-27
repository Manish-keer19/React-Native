import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";

export default function CustomCheckbox() {
  const [checked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.checkbox, checked && styles.checked]}
        onPress={() => setChecked(!checked)}
      >
        {checked && <Text style={styles.checkmark}>✔</Text>}
      </TouchableOpacity>
      <Text style={styles.label}>Check this box:</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderWidth:2,
    // borderColor:"blue",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: "gray",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  checked: {
    backgroundColor: "#6200ee",
    borderColor: "#6200ee",
  },
  checkmark: {
    color: "white",
    fontWeight: "bold",
  },
  label: {
    fontSize: 16,
    color:"white"
  },
});
