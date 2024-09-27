// import { ScrollView, StyleSheet, Text, View } from "react-native";
// import React from "react";

// export default function ElevetedCards() {
//   return (
//     <View style={styles.main}>
//       <Text style={styles.headingText}>ElevetedCards</Text>
//       <ScrollView horizontal={true} style={styles.container}>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//         <View style={[styles.card, styles.cardone]}>
//           <Text>tab1</Text>
//         </View>
//       </ScrollView>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   main: {
//     height: "auto",
//   },
//   headingText: {
//     fontSize: 25,
//     fontWeight: "bold",
//     color: "gold",
//     paddingHorizontal: 10,
//   },
//   container: {
//     flex: 1,
//     padding: 15,
//     height:150
//   },
//   card: {
//     width: 100,
//     height: 100,
//     borderRadius: 5,
//     margin: 5,
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "pink",
//     elevation: 5, // Adds shadow for Android
//     shadowColor: "#000", // Adds shadow for iOS
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//   },
//   cardone: {
//     backgroundColor: "pink",
//   },
// });

import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ElevetedCards() {
  return (
    <View style={styles.main}>
      <Text style={styles.headingText}>ElevetedCards</Text>
      <ScrollView horizontal={true} style={styles.container}>
        {Array.from({ length: 8 }, (_, index) => (
          <View key={index} style={[styles.card, styles.cardone]}>
            <Text style={styles.cardText}>Tab {index + 1}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    height: "auto",
  },
  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gold",
    paddingHorizontal: 10,
  },
  container: {
    flex: 1,
    padding: 15,
    height: 150,
  },
  card: {
    width: 100,
    height: 100,
    borderRadius: 5,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
    elevation: 5, // Adds shadow for Android
    shadowColor: "#000", // Adds shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
  cardone: {
    backgroundColor: "pink",
  },
  cardText: {
    textAlign: "center",
  },
});

