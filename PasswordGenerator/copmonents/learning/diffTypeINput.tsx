

import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button, ScrollView } from "react-native";

export default function DiffInput() {
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [url, setUrl] = useState("");

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Text Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter text"
        value={text}
        onChangeText={setText}
      />

      <Text style={styles.label}>Number Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter numbers"
        keyboardType="numeric"
        value={number}
        onChangeText={setNumber}
      />

      <Text style={styles.label}>Password Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />

      <Text style={styles.label}>Email Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Phone Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <Text style={styles.label}>URL Input:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter URL"
        keyboardType="url"
        value={url}
        onChangeText={setUrl}
      />

      <Button title="Submit" onPress={() => alert("Submitted!")} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  label: {
    fontSize: 16,
    marginVertical: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    width: "100%",
    paddingHorizontal: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
});
