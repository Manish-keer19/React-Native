import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Dimensions,
} from "react-native";
import React from "react";
import FlatCards from "./copmonents/FlatCards";
import ElevetedCards from "./copmonents/ElevetedCards";
import FancyCard from "./copmonents/FancyCard";
import LinkingTouchable from "./copmonents/LinkingTouchable";
import ConatactList from "./copmonents/ConatactList";

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <Text style={style.text}>App</Text>
        <FlatCards />
        <ElevetedCards />
        <FancyCard />
        <LinkingTouchable />
        <ConatactList />
      </ScrollView>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: "#212121",
    flex: 1, // Ensures full height
  },
  text: {
    color: "white",
    textAlign: "center",
    marginVertical: 20,
    fontSize: 20,
  },
});

export default App;
