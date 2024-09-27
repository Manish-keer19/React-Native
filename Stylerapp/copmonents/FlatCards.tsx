import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function FlatCards() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCards</Text>
      <View style={styles.container}>
        <View style={[styles.card, styles.cardone]}>
          <Text>Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text>blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text>gold</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text>brown</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gold",
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 26,
  },
  card: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    margin: 7,
  },
  cardone: {
    backgroundColor: "red",
  },
  cardTwo: {
    backgroundColor: "blue",
  },
  cardThree: {
    backgroundColor: "gold",
  },
  cardFour: {
    backgroundColor: "brown",
    color:"white"
  },
});
