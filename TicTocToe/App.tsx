import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TicTacToe from "./src/components/TicTacToe";
import Hello from "./src/components/Hello";

export default function App() {
  return (
    <View style={styles.container}>
      <TicTacToe/>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    width: "100%",
    height: "100%",
  },
});
