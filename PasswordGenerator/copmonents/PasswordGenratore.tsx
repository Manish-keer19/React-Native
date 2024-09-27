import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useState } from "react";
import CustomCheckbox from "./learning/CustomCheckbox";

export default function PasswordGenratore() {
  const [inputValue, setInputValue] = useState("");
  const [password, setPassword] = useState("");
  const [upperChecked, setupperChecked] = useState(false);
  const [numberChecked, setnumberChecked] = useState(false);
  const [symbolChecked, setsymbolChecked] = useState(false);

  const CreatePassword = (lenght: number) => {
    let str = "abcdefghijklmnopqrstuvwxyz";
    let p = str;
    let pass = "";
    let char = "!@#$%^&*()-_=+[]{}|;:',.<>/?`~";
    let num = "1234567890";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (numberChecked) {
      str += num;
      console.log("after add number str is", str);
    }

    if (symbolChecked) {
      str += char;
      console.log("after add char str is", str);
    }

    if (upperChecked) {
      str += upper;
      console.log("after add upppercase  str is", str);
    }

    for (let i = 0; i < lenght; i++) {
      let ch = Math.floor(Math.random() * str.length);
      console.log("ch is", ch);
      pass += str[ch];
      console.log("pass is ", pass);
    }
    setPassword(pass);
  };

  // Function to handle button click
  const resetstate = () => {
    setnumberChecked(false);

    setupperChecked(false);
    setsymbolChecked(false);
    setInputValue("");
    setPassword("");
  };
  return (
    <View style={styles.main}>
      <Text style={styles.HeadingText}>Password Generator</Text>

      <View
        style={{
          width: "100%",
          height: 70,
          flexDirection: "row",
          alignItems: "center",
          padding: 20,
          //   borderWidth:2,
          //   borderColor:"brown"
        }}
      >
        <Text style={{ color: "white", width: "40%" }}>Password Length:</Text>
        <TextInput
          style={{
            width: "60%",
            height: 40,
            backgroundColor: "pink",
            borderRadius: 6,
            padding: 10,
          }}
          placeholder="enter Length for pass"
          value={inputValue}
          onChangeText={(value) => {
            setInputValue(value);
          }}
          keyboardType="numeric"
        />
      </View>

      <View style={{ width: "100%", height: 200 }}>
        <View
          style={{
            width: "90%",
            height: 40,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            marginLeft: 50,
            gap: 20,
          }}
        >
          <Text style={{ color: "white", width: "40%" }}>
            Include Uppercase
          </Text>
          <TouchableOpacity
            style={[styles.checkbox, upperChecked && styles.Checked]}
            onPress={() => {
              setupperChecked(!upperChecked);
              console.log("upper is", upperChecked);
            }}
          >
            {upperChecked && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            height: 40,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            marginLeft: 50,
            gap: 20,
          }}
        >
          <Text style={{ color: "white", width: "40%" }}>Include Number</Text>
          <TouchableOpacity
            style={[styles.checkbox, numberChecked && styles.Checked]}
            onPress={() => {
              setnumberChecked(!numberChecked);
            }}
          >
            {numberChecked && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "90%",
            height: 40,
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            padding: 5,
            marginLeft: 50,
            gap: 20,
          }}
        >
          <Text style={{ color: "white", width: "40%" }}>Include Symbol</Text>
          <TouchableOpacity
            style={[styles.checkbox, symbolChecked && styles.Checked]}
            onPress={() => {
              setsymbolChecked(!symbolChecked);
            }}
          >
            {symbolChecked && <Text style={styles.checkmark}>✔</Text>}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
          marginVertical: 30,
        }}
      >
        <TouchableOpacity
          style={{
            width: "35%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "gold",
            borderRadius: 6,
          }}
          onPress={resetstate}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: "35%",
            height: 40,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "skyblue",
            borderRadius: 6,
          }}
          onPress={() => {
            CreatePassword(Number(inputValue));
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>
            GeneratePassword
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          width: "96%",
          height: 140,
          backgroundColor: "pink",
          borderRadius: 10,
        }}
      >
        <Text
          selectable={true}
          style={{
            fontWeight: "bold",
            fontSize: 20,
            textAlign: "center",
            padding: 40,
          }}
        >
          {!password ? "Data of Password" : password}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    // borderWidth: 2,
    // borderColor: "blue",
    width: "100%",
    minHeight: 350,
    marginVertical: 150,
  },
  HeadingText: {
    fontSize: 30,
    color: "white",
    textAlign: "center",
  },
  passlength: {
    borderWidth: 2,
    borderColor: "blue",
    padding: 20,
    color: "white",
    marginVertical: 15,
    width: "100%",
    height: 50,
    flex: 1,
    flexDirection: "row",
    gap: 30,
  },
  checkbox: {
    width: 30,
    height: 30,
    borderColor: "pink",
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  Checked: {
    backgroundColor: "bllue",
    borderColor: "blue",
  },
  checkmark: {
    // backgroundColor:"white",
    color: "white",
  },
});
