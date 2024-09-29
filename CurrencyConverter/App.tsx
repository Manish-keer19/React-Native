import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { currencyByRupee } from "./src/constants";
import CurrencyButton from "./src/conponents/CurrencyButton";
import Snackbar from "react-native-snackbar";

export default function App() {
  const numColumns = 3; // Set the number of columns for the FlatList

  const [result, setResult] = useState<{ Symbol: string; rs: number } | null>(
    null
  );
  const [inputValue, setInputValue] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");

  const handleBtnClick = (item: Currency) => {
    if (!inputValue) {
      alert("enter a number");
    } else {
      console.log("item clicked");
      console.log("item is ", item);
      const num = parseFloat(inputValue);
      console.log("num is", num);
      console.log("isnan is ", isNaN(num));
      if (!isNaN(num)) {
        const result = num * item.value;
        console.log("result is ", result);
        const data = {
          Symbol: item.symbol,
          rs: result,
        };

        console.log("data is ", data);
        setResult(data);
        setInputValue("");
        setTargetCurrency(item.name);
      } else {
        alert("enter a valid number");
      }
    }
  };

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
            value={inputValue}
            onChangeText={(value) => {
              setInputValue(value);
              console.log("inputvalue is ", inputValue);
            }}
          />
        </View>
        {/* Result Section */}
        {result && (
          <View style={styles.resultContainer}>
            {/* Result Line Container */}
            <View style={styles.resultLine}>
              {/* Currency Symbol */}
              <Text style={styles.resultSymbol}>{result.Symbol}</Text>
              {/* Result Value */}
              <Text style={styles.resultText}>{result.rs.toFixed(2)}</Text>
            </View>
            {/* Optional Result Title */}
            <Text style={styles.resultTitle}>Converted Amount</Text>
          </View>
        )}
      </View>

      {/* FlatList displaying currency buttons */}
      <View style={styles.flatListContainer}>
        <FlatList
          data={currencyByRupee}
          keyExtractor={(item) => item.name}
          numColumns={numColumns}
          contentContainerStyle={styles.flatListContent}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.pressable,
                targetCurrency === item.name && styles.Selected,
              ]}
              onPress={() => {
                handleBtnClick(item);
              }}
            >
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
    width: "90%", // Reduced width for padding
    height: 250,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
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
  Selected: {
    backgroundColor: "pink",
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

  resultContainer: {
    width: "90%",
    padding: 15,
    backgroundColor: "#3a3a3c",
    borderRadius: 10,
    marginVertical: 20,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  resultLine: {
    flexDirection: "row", // Align items horizontally
    alignItems: "center", // Vertically align items in the center
    justifyContent: "center", // Center align the content
  },
  resultSymbol: {
    fontSize: 24,
    color: "gold",
    fontWeight: "bold",
    marginRight: 5, // Adjust spacing between symbol and text
  },
  resultText: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  resultTitle: {
    fontSize: 18,
    color: "gold",
    fontWeight: "bold",
    marginTop: 5, // Space above the title text
  },
});
