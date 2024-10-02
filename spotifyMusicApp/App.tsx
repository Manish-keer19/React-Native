import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { Audio } from "expo-av";
import { MaterialIcons } from "@expo/vector-icons";
import Slider from "@react-native-community/slider"; // For Seek Bar

// Define the array of tracks with audio, image, and title
const tracks = [
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
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/ms7.mp3"),
    image: require("./assets/images/7.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/ms8.mp3"),
    image: require("./assets/images/8.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/ms9.mp3"),
    image: require("./assets/images/9.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/ms10.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/1.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/2.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/3.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/4.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/5.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/6.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/7.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/8.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/9.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
  {
    audio: require("./assets/audio/10.mp3"),
    image: require("./assets/images/10.jpg"),
    title:
      "Khairiyat (Bonus Track) - Chhichhore, Sushant, Shraddha, Pritam, Amitabh B, Arijit Singh",
  },
 
 
];

export default function App() {
  const [Musics, setMusics] = useState<any[]>([]); // State to hold preloaded sounds
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [positionMillis, setPositionMillis] = useState(0); // Current position in milliseconds
  const [durationMillis, setDurationMillis] = useState(0); // Total duration of the track in milliseconds

  // Function to load all tracks and store them in the state
  const loadMusics = async () => {
    try {
      const loadedMusics = await Promise.all(
        tracks.map(async (item) => {
          const { sound } = await Audio.Sound.createAsync(item.audio);
          return {
            sound,
            ...item,
          };
        })
      );
      setMusics(loadedMusics);
    } catch (error) {
      console.error("Error loading sounds:", error);
    }
  };

  // Function to play a track by index
  const playSound = async (index: number) => {
    if (Musics[index]) {
      try {
        if (sound) {
          await sound.unloadAsync(); // Unload previous sound
        }
        const newSound = Musics[index].sound;
        setSound(newSound);
        setCurrentTrackIndex(index);
        const status = await newSound.playAsync();
        setIsPlaying(true);
        setDurationMillis(status.durationMillis || 0);

        // Track the position of the track
        newSound.setOnPlaybackStatusUpdate((playbackStatus: any) => {
          if (playbackStatus.isLoaded && playbackStatus.isPlaying) {
            setPositionMillis(playbackStatus.positionMillis);
            setDurationMillis(playbackStatus.durationMillis);
          }
        });
      } catch (error) {
        console.error("Error playing sound:", error);
      }
    }
  };

  const pauseSound = async () => {
    if (sound) {
      try {
        await sound.pauseAsync();
        setIsPlaying(false);
      } catch (error) {
        console.error("Error pausing sound:", error);
      }
    }
  };

  const nextTrack = async () => {
    const nextIndex = (currentTrackIndex + 1) % Musics.length;
    await playSound(nextIndex);
  };

  const previousTrack = async () => {
    const previousIndex =
      (currentTrackIndex - 1 + Musics.length) % Musics.length;
    await playSound(previousIndex);
  };

  const seekTrack = async (value: number) => {
    if (sound) {
      try {
        await sound.setPositionAsync(value);
      } catch (error) {
        console.error("Error seeking track:", error);
      }
    }
  };

  useEffect(() => {
    loadMusics(); // Load all music files on component mount
  }, []);

  useEffect(() => {
    return sound
      ? () => {
          sound.unloadAsync().catch((error) => {
            console.error("Error unloading sound:", error);
          });
        }
      : undefined;
  }, [sound]);

  const formatTime = (millis: number) => {
    const minutes = Math.floor(millis / 60000);
    const seconds = Math.floor((millis % 60000) / 1000);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <View style={styles.container}>
      {Musics.length > 0 && (
        <>
          {/* Album Artwork and Song Title Section */}
          <Image
            source={require("./assets/images/manish.jpg")}
            // source={require("./assets/images/s.jpg")}
            // source={Musics[currentTrackIndex].image}
            style={styles.albumArt}
            resizeMode="cover"
          />
          <Text style={styles.songTitle}>
            {Musics[currentTrackIndex].title}
          </Text>

          {/* Seek Bar */}
          <Slider
            style={styles.slider}
            minimumValue={0}
            maximumValue={durationMillis || 1} // Avoid division by zero
            value={positionMillis}
            onSlidingComplete={seekTrack} // Seek to the new position
            minimumTrackTintColor="#FF6F61"
            maximumTrackTintColor="#FFFFFF"
            thumbTintColor="#FF6F61"
          />

          {/* Time Display */}
          <View style={styles.timeContainer}>
            <Text style={styles.timeText}>{formatTime(positionMillis)}</Text>
            <Text style={styles.timeText}>
              {formatTime(durationMillis - positionMillis)}
            </Text>
          </View>

          {/* Playback Controls */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={previousTrack}>
              <MaterialIcons name="skip-previous" size={60} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={
                isPlaying ? pauseSound : () => playSound(currentTrackIndex)
              }
            >
              <MaterialIcons
                name={isPlaying ? "pause" : "play-arrow"}
                size={60}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={nextTrack}>
              <MaterialIcons name="skip-next" size={60} color="white" />
            </TouchableOpacity>
          </View>

          {/* Display all tracks in a list */}
          <FlatList
            data={Musics}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => playSound(index)}
                style={styles.trackItem}
              >
                <Image
                  // source={item.image}
                  source={require("./assets/images/manish.jpg")}
                  style={styles.trackImage}
                />
                <Text style={styles.trackTitle}>{item.title}</Text>
              </TouchableOpacity>
            )}
            style={styles.trackList}
          />
        </>
      )}
    </View>
  );
}

// Styles for the app
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282C34",
    padding: 20,
  },
  albumArt: {
    width: 300,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    borderColor: "#FF6F61",
    borderWidth: 2,
  },
  songTitle: {
    fontSize: 22,
    fontWeight: "600",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 20,
    paddingHorizontal: 10,
    textTransform: "capitalize",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    maxWidth: 400,
    marginBottom: 20,
  },
  slider: {
    width: "100%",
    height: 40,
  },
  timeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    maxWidth: 400,
    marginBottom: 20,
  },
  timeText: {
    color: "#FFF",
    fontSize: 16,
  },
  trackList: {
    marginTop: 20,
    width: "100%",
  },
  trackItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#333",
    marginBottom: 10,
    borderRadius: 10,
  },
  trackImage: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  trackTitle: {
    color: "#FFF",
    fontSize: 16,
    flexShrink: 1,
  },
});
