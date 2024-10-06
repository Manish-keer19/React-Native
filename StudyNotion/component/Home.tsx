import { Button, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Navbar from './Navbar';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      <Navbar />
      <View style={styles.content}>
        <Text style={styles.title}>Welcome to Studontion</Text>
        <Text style={styles.description}>
          Your one-stop solution for all your studying needs. Explore courses, connect with tutors, and manage your study schedule efficiently.
        </Text>
        <TouchableOpacity style={styles.buttonContainer}
        onPress={()=>{
            navigation.navigate("Signup")
        }}
        >
          <Text style={styles.button}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
     width:"100%",
     height:"100%",
    backgroundColor: '#212121', // Dark background color

  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff', // White text color
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff', // White text color for description
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 22,
  },
  buttonContainer: {
    backgroundColor: '#fff', // White button color for contrast
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  button: {
    color: '#212121', // Dark text on the button for visibility
    fontSize: 18,
    fontWeight: 'bold',
  },
});
