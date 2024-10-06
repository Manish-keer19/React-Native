import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./src/Components/HomePages/HomeScreen";
import Profile from "./src/Components/Profile/Profile";
import AddPost from "./src/Components/AddPost";

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  AddPost: undefined;
  Reels: undefined;
  Profile: undefined;
};

export default function App() {
  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{headerShown:false}}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddPost" component={AddPost} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
