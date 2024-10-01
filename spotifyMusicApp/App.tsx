import React, { useState, useEffect } from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import { Audio } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";

// Define the type for the Sound object
type SoundObject = Audio.Sound | undefined;

// Define the array of tracks with audio, image, and title
const tracks: { audio: number; image: number; title: string }[] = [
  {
    audio: require("./assets/audio/ms1.mp3"),
    image: require("./assets/images/1.jpg"),
    title:
      "Ek Dilruba Hai (Slowed & Reverb) - Udit Narayan, Akshay Kumar, Kareena",
  },
  {
    audio: require("./assets/audio/ms2.mp3"),
    image: require("./assets/images/2.jpg"),
    title:
      "Falak Tak Chal Sath Mere (Slowed + Reverb) - Udit Narayan, Mahalaxmi Iyer",
  },
  {
    audio: require("./assets/audio/ms3.mp3"),
    image: require("./assets/images/3.jpg"),
    title: "Father Saab (Full Video) - Khasa Aala Chahar, Raj Saini",
  },
  {
    audio: require("./assets/audio/ms4.mp3"),
    image: require("./assets/images/4.jpg"),
    title: "Fearless - Lost Sky, Fearless pt II feat. Chris Linton",
  },
  {
    audio: require("./assets/audio/ms5.mp3"),
    image: require("./assets/images/5.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/ms6.mp3"),
    image: require("./assets/images/6.jpg"),
    title: "Ek dilruba he ",
  },
  {
    audio: require("./assets/audio/ms7.mp3"),
    image: require("./assets/images/7.jpg"),
    title: "Guilty (Slowed Reverb) - Inder Chahal, Karan Aujla",
  },
  {
    audio: require("./assets/audio/ms8.mp3"),
    image: require("./assets/images/8.jpg"),
    title: "GOAT (Full Video) - Sidhu Moose Wala, Wazir Patar, Sukh Sanghera",
  },
  {
    audio: require("./assets/audio/ms9.mp3"),
    image: require("./assets/images/9.jpg"),
    title: "GOAT (Full Video) - Sidhu Moose Wala, Wazir Patar, Sukh Sanghera",
  },
  {
    audio: require("./assets/audio/ms10.mp3"),
    image: require("./assets/images/10.jpg"),
    title: "GOAT (Full Video) - Sidhu Moose Wala, Wazir Patar, Sukh Sanghera",
  },
];

export default function App() {
  const [sound, setSound] = useState<SoundObject>();
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState<number>(0);

  const playSound = async (): Promise<void> => {
    console.log("current song is ", tracks[currentTrackIndex]);
    try {
      const { sound } = await Audio.Sound.createAsync(
        tracks[currentTrackIndex].audio
      );

      // console.log("sound data is ", sound);
      setSound(sound);
      await sound.playAsync();
      setIsPlaying(true);
    } catch (error) {
      console.error("Error playing sound:", error);
    }
  };

  const pauseSound = async (): Promise<void> => {
    if (sound) {
      try {
        await sound.pauseAsync();
        setIsPlaying(false);
      } catch (error) {
        console.error("Error pausing sound:", error);
      }
    }
  };

  const nextTrack = async (): Promise<void> => {
    if (sound) {
      try {
        await sound.unloadAsync();
      } catch (error) {
        console.error("Error unloading sound:", error);
      }
    }
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    await playSound();
  };

  const previousTrack = async (): Promise<void> => {
    if (sound) {
      try {
        await sound.unloadAsync();
      } catch (error) {
        console.error("Error unloading sound:", error);
      }
    }
    const previousIndex =
      (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(previousIndex);
    await playSound();
  };

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync().catch((error) => {
            console.error("Error unloading sound:", error);
          });
        }
      : undefined;
  }, [sound]);

  return (
    <View style={styles.container}>
      {/* Album Artwork Section */}
      <Image
        source={tracks[currentTrackIndex].image}
        style={styles.albumArt}
        resizeMode="cover"
      />
      {/* Song Title Section */}
      <Text style={styles.songTitle}>{tracks[currentTrackIndex].title}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={nextTrack}>
          <MaterialIcons name="skip-next" size={60} color="white" />
        </TouchableOpacity>
        <TouchableOpacity onPress={isPlaying ? pauseSound : playSound}>
          <MaterialIcons
            name={isPlaying ? "pause" : "play-arrow"}
            size={60}
            color="white"
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={previousTrack}>
          <MaterialIcons name="skip-previous" size={60} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282C34", // Dark background
    padding: 20,
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#FF6F61", // Border color matching the theme
    borderWidth: 2,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FFFFFF", // White text for better visibility
    textAlign: "center", // Center the text
    marginBottom: 20,
    paddingHorizontal: 10, // Padding for nicer spacing
    textTransform: "capitalize", // Capitalize song titles
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: 400,
  },
});
