import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useState } from "react";

// form Validataion
import * as Yup from "yup";
import PasswordGenratore from "./copmonents/PasswordGenratore";
const PasswordSchema = Yup.object().shape({
  passwordLenght: Yup.number()
    .min(4, "should be min of 4 charactors ")
    .max(16, "should be max of 16 charactors ")
    .required("lenght is required"),
});

export default function App() {
  const [password, setPassword] = useState();

  console.log("android app in running bro");
  const CreatPassword = (passwordLenght: string, charactors: number) => {};
  return (
    <View style={styles.main}>
      <PasswordGenratore />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#212121",
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
  },
});
