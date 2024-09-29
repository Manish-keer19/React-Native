import { StatusBar } from "expo-status-bar";
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { currencyByRupee } from "./src/constants";
import Snackbar from "react-native-snackbar";
import CurrencyButton from "./src/conponents/CurrencyButton";

export default function App() {
  const numColumns = 3; // Set the number of columns for the FlatList

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <View style={styles.inputContainer}>
        <View style={styles.textInputWrapper}>
          <Text style={styles.currencySymbol}>₹</Text>
          <TextInput
            maxLength={14}
            style={styles.textInput}
            keyboardType="number-pad"
            placeholder="Enter any number"
            placeholderTextColor="gray"
          />
        </View>
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={currencyByRupee}
          keyExtractor={(item) => item.name}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <Pressable style={styles.pressable}>
              <CurrencyButton name={item.name} flag={item.flag} />
            </Pressable>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e", // Darker background for better contrast
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  inputContainer: {
    borderWidth: 2,
    borderColor: "gold",
    width: "90%", // Reduced width for padding
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 15, // Rounded borders for a modern look
  },
  textInputWrapper: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    gap: 10,
    backgroundColor: "#2a2a2e",
    width: 260, // Adjusted width for balanced spacing
  },
  currencySymbol: {
    fontSize: 30,
    fontWeight: "bold",
    color: "gold",
  },
  textInput: {
    backgroundColor: "#e0e0e0",
    width: "75%",
    height: 50,
    borderRadius: 10,
    color: "black",
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
  flatListContainer: {
    flex: 1,
    width: "100%",
    paddingTop: 20,
    paddingHorizontal: 10,
    backgroundColor: "#2c2c2e",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  flatListContent: {
    alignItems: "center",
    paddingBottom: 20,
  },
  pressable: {
    borderWidth: 1,
    borderColor: "#3a3a3c",
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    margin: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5, // Add shadow for a lifted look
  },
});

