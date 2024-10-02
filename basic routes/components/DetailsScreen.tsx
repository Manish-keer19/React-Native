// DetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet,Button } from 'react-native';

const DetailsScreen = ({navigation}:any) => {
  return (
    <View>
    <Text>Deatailed  Screen</Text>
    <Button
      title="Go to Hello section"
      onPress={() => navigation.navigate("Hello")}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DetailsScreen;
