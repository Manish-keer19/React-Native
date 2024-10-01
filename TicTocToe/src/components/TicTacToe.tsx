import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function TicTacToe() {
  return (
    <View style={styles.main}>
      <View style={styles.textParent}>
        <Text style={styles.textStyle}>It's Your tern</Text>
      </View>

      <View style={styles.boxs}>
        <View style={styles.box}>
          <Text>O</Text>
        </View>
        <View style={styles.box}>
          <Text>O</Text>
        </View>
        <View style={styles.box}>
          <Text>O</Text>
        </View>
        <View style={styles.box}>
          <Text>O</Text>
        </View>
        <View style={styles.box}>
          <Text>O</Text>
        </View>
        <View style={styles.box}>
          <Text>O</Text>
        </View>
      </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   main: {
//     width: "100%",
//     height: "100%",
//   },
//   textParent: {
//     width: "85%",
//     backgroundColor: "yellow",
//     marginTop: 50,
//     padding: 25,
//     marginHorizontal: "auto",
//     alignItems: "center",
//     justifyContent: "center",
//     borderRadius: 10,
//   },
//   textStyle: {
//     fontSize: 25,
//     fontWeight: "bold",
//   },
//   boxs: {
//     width: "86%",
//     height: "60%",
//     backgroundColor: "blue",
//     marginTop: 30,
//     marginHorizontal: "auto",
//     padding: 22,
//     gap:20,
//     flexDirection:"row",
//     flexWrap:"wrap"
//   },
//   box: {
//     width: 90,
//     height: 90,
//     backgroundColor: "pink",
//   },
// });


const styles = StyleSheet.create({
    main: {
      width: "100%",
      height: "100%",
    },
    textParent: {
      width: "85%",
      backgroundColor: "yellow",
      marginTop: 50,
      padding: 25,
      marginHorizontal: "auto",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 10,
    },
    textStyle: {
      fontSize: 25,
      fontWeight: "bold",
    },
    boxs: {
      width: "86%",
      height: "60%",
      backgroundColor: "blue",
      marginTop: 30,
      marginHorizontal: "auto",
      padding: 22,
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "space-around", // Centers the boxes
    },
    box: {
      width: 90,
      height: 90,
      backgroundColor: "pink",
      margin: 10, // Adds space around each box
      justifyContent: "center", // Center text vertically
      alignItems: "center", // Center text horizontally
    },
  });
  