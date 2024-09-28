import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
  Animated,
} from "react-native";
import * as Haptics from "expo-haptics"; // Import Expo Haptics
import React, { useState, useRef } from "react";
import diceOne from "../../assets/One.png";
import diceTwo from "../../assets/Two.png";
import diceThree from "../../assets/Three.png";
import diceFour from "../../assets/Four.png";
import diceFive from "../../assets/Five.png";
import diceSix from "../../assets/Six.png";

export default function AnimatedDice() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);
  const scaleAnim = useRef(new Animated.Value(1)).current; // Initialize animated value for scaling

  const UpdateDice = () => {
    const dice = Math.floor(Math.random() * 6 + 1);

    // Start the scaling animation
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2, // Scale up slightly
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1, // Scale back to normal
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();

    // Update the dice image based on random number
    switch (dice) {
      case 1:
        setDiceImage(diceOne);
        break;
      case 2:
        setDiceImage(diceTwo);
        break;
      case 3:
        setDiceImage(diceThree);
        break;
      case 4:
        setDiceImage(diceFour);
        break;
      case 5:
        setDiceImage(diceFive);
        break;
      case 6:
        setDiceImage(diceSix);
        break;
      default:
        break;
    }

    // Trigger haptic feedback
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
  };

  return (
    <View style={styles.container}>
      <Animated.Image
        source={diceImage}
        style={[styles.diceImage, { transform: [{ scale: scaleAnim }] }]}
      />
      <Pressable style={styles.pressable} onPress={UpdateDice}>
        <Text style={styles.pressableText}>Press to generate dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  diceImage: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  pressable: {
    padding: 12,
    backgroundColor: "#f0c419",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  pressableText: {
    fontSize: 16,
    color: "#333",
    fontWeight: "bold",
  },
});
