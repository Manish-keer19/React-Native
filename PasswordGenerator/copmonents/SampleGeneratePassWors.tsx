import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

export default function GeneratePassword() {
  // State to hold the input value
  const [inputValue, setInputValue] = useState("");

  const [number, setNumber] = useState(false);
  const [charactors, setChar] = useState(false);
  const [upperCase, setupperCase] = useState(false);
  const [lowerCase, setNlowerCase] = useState(false);
  const [passwordLenght, setPasswordLenght] = useState(5);
  const [password, setPassword] = useState("");

  const GeneratePassword = () => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let p = str;
    let pass = "";
    let char = "!@#$%^&*()-_=+[]{}|;:',.<>/?`~";
    let num = "1234567890";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (number) {
      str += num;
      console.log("after add number str is", str);
    }

    if (charactors) {
      str += char;
      console.log("after add char str is", str);
    }

    if (upperCase) {
      str += upper;
      console.log("after add upppercase  str is", str);
    }

    for (let i = 0; i < passwordLenght; i++) {
      let ch = Math.floor(Math.random() * str.length + 1);
      console.log("ch is", ch);
      pass += str[ch];
      console.log("pass is ", pass);
    }
  };

  // Function to handle button click
  const handleButtonPress = () => {
    alert(`You entered: ${inputValue}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Enter something:</Text>

      {/* TextInput to take user input */}
      <TextInput
        style={styles.input}
        placeholder="Type here..."
        value={inputValue}
        onChangeText={setInputValue} // Updates the state with input text
      />

      {/* Button to trigger an action */}
      <Button title="Submit" onPress={handleButtonPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    paddingHorizontal: 10,
    width: "100%",
    marginBottom: 20,
    borderRadius: 5,
  },
});
