// import React from 'react';
// import { Text, View, useColorScheme, StyleSheet } from 'react-native';

// const App = () => {
//   const colorScheme = useColorScheme(); // get the current color scheme

//   const isDarkMode = colorScheme === 'dark';

//   return (
//     <View style={[styles.container, { backgroundColor: isDarkMode ? '#000' : '#fff' }]}>
//       <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>
//         This is {isDarkMode ? 'Dark Mode' : 'Light Mode'}
//       </Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   text: {
//     fontSize: 18,
//   },
// });

// export default App;

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, useColorScheme, View } from "react-native";

export default function App() {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.darkText : styles.whiteText}>
        Hello from react native hello from manish keer
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#212121",
  },
  whiteText: {
    color: "white",
  },
  darkText: {
    color: "yellow",
  },
});
