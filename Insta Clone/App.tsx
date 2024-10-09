import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider } from "react-redux"; // Import Provider
import { store } from "./src/Components/app/store"; // Adjust the path as necessary
import HomeScreen from "./src/Components/HomePages/HomeScreen";
import Profile from "./src/Components/Profile/Profile";
import AddPost from "./src/Components/AddPost";
import ImagePicker1 from "./src/Components/ImagePicker";
import EditProfile from "./src/Components/EditProfile";

const Stack = createNativeStackNavigator();
export type RootStackParamList = {
  Home: undefined;
  AddPost: undefined;
  Reels: undefined;
  Profile: undefined;
  ImagePicker: undefined;
  EditProfile: undefined;
};

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Home"
        >
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="AddPost" component={AddPost} />
          <Stack.Screen name="ImagePicker" component={ImagePicker1} />
          <Stack.Screen name="EditProfile" component={EditProfile} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
