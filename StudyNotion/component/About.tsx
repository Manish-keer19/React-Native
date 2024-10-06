import { StyleSheet, Text, View } from "react-native";
import React from "react";
import HomePage from "./Navbar";

export default function About({ navigation }: any) {
  return (
    <View>
      <HomePage />
      <Text>About</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
