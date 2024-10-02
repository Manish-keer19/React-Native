// HomeScreen.js
import React from "react";
import { Button, View, Text } from "react-native";

export default function HomePage({ navigation }: any) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate("Details")}
      />
    </View>
  );
}
