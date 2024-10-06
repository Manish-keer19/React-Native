// import * as React from "react";
// import { NavigationContainer } from "@react-navigation/native";
// import { createStackNavigator } from "@react-navigation/stack";
// import HomePage from "./component/HomePage";
// import Login from "./component/Login";
// import Contact from "./component/Contact";
// import Signup from "./component/Signup";
// import About from "./component/About";
// const Stack = createStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator
//         initialRouteName="Home"
//         screenOptions={{ headerShown: false }} // Use headerShown: false to hide the header globally
//       >
//         <Stack.Screen name="Home" component={HomePage} />
//         <Stack.Screen name="Login" component={Login} />
//         <Stack.Screen name="Signup" component={Signup} />
//         <Stack.Screen name="About" component={About} />
//         <Stack.Screen name="Contact" component={Contact} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Contact from "./component/Contact";
import Signup from "./component/Signup";
import About from "./component/About";
import Home from "./component/Home";

// Define the type for the navigation stack
export type RootStackParamList = {
  Home: undefined;
  Navbar: undefined;
  Login: undefined;
  Signup: undefined;
  About: undefined;
  Contact: undefined;
};

// Create the Stack Navigator with the RootStackParamList type
const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{ headerShown: false }} // Use headerShown: false to hide the header globally
      >
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Navbar" component={Navbar} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="About" component={About} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
