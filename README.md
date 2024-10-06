# Creating a New Expo Project

This document provides the essential commands to create a new Expo project in React Native.

## Step-by-Step Commands

1. **Create a New Expo Project**  
   Run the following command to create a new Expo project named `my-new-project`:

   ```bash
   npx create-expo-app my-new-project --template
   ```

**another command to create new expo Project**
Run the following command to create a new Expo project named `my-new-project`:

```
  npx create-expo-app@latest my-app --template expo-template-blank-typescript

```

**you can also give this command**

```
npx create-expo-app@latest my-app --template
```

# Defining Routes in an Expo Project

In an Expo project, routing is typically handled using the **React Navigation** library. This document outlines the steps to set up routing in your Expo project.

## Step 1: Install Dependencies

First, install the necessary packages for React Navigation. Open your terminal and run the following commands in your Expo project directory:

```bash
expo install @react-navigation/native
expo install @react-navigation/native-stack
expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

# Set Up Navigation in App.tsx

**Now, set up the navigation in your App.tsx file.**

```
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

```

# Create Your Screens

**Create two files in your project: HomeScreen.tsx and DetailsScreen.tsx**

# HomeScreen.tsx

```
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }: any) => {
return (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Home Screen</Text>
    <Button
      title="Go to Details"
      onPress={() => navigation.navigate('Details')}
    />
  </View>
);
};
export default HomeScreen;
```

# DetailsScreen.tsx

```
import React from 'react';
import { View, Text, Button } from 'react-native';

const DetailsScreen = ({ navigation }: any) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Go back to Home"
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default DetailsScreen;

```
