import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomePage from "./components/HomePage";
import DetailsScreen from "./components/DetailsScreen";
import Hello from "./components/Hello";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }} // Use headerShown: false to hide the header globally
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Hello" component={Hello} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
