import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Footer from "../Footer";

// Dummy data for posts
const posts = [
  { id: '1', image: 'https://res.cloudinary.com/manish19/image/upload/v1726505860/huur9oubvhlwi9sqw0go.jpg' },
  { id: '2', image: 'https://res.cloudinary.com/manish19/image/upload/v1726505860/huur9oubvhlwi9sqw0go.jpg' },
  { id: '3', image: 'https://res.cloudinary.com/manish19/image/upload/v1726505860/huur9oubvhlwi9sqw0go.jpg' },
  { id: '4', image: 'https://res.cloudinary.com/manish19/image/upload/v1726505860/huur9oubvhlwi9sqw0go.jpg' },
  // Add more images as needed
];

export default function Profile() {
  const renderPost = ({ item }: { item: { id: string; image: string } }) => (
    <Image source={{ uri: item.image }} style={styles.postImage} />
  );

  return (
    <View style={styles.container}>
      {/* Profile Header */}
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          {/* User's Image */}
          <View style={styles.imageContainer}>
            <Image
              style={styles.profileImage}
              source={{
                uri: "https://res.cloudinary.com/manish19/image/upload/v1726506341/ftedkmcuqzwy97jwjdqu.jpg", // Your Cloudinary image
              }}
            />
          </View>

          {/* Profile Stats */}
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>120</Text>
            <Text style={styles.statsLabel}>Posts</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>5k</Text>
            <Text style={styles.statsLabel}>Followers</Text>
          </View>
          <View style={styles.statsContainer}>
            <Text style={styles.statsText}>500</Text>
            <Text style={styles.statsLabel}>Following</Text>
          </View>
        </View>
        <Text style={styles.username}>Manish Keer</Text>
        <Text style={styles.bio}>I am a MERN stack developer</Text>

        {/* Buttons */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text style={styles.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.archiveButton}>
            <Ionicons name="archive-outline" size={18} color="white" />
            <Text style={styles.buttonText}>Go to Archive</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Posts Grid */}
      <FlatList
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id}
        numColumns={3} // Display posts in grid format
        style={styles.postsContainer}
      />
      <Footer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 50,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#333",
  },
  profileInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  statsContainer: {
    alignItems: "center",
  },
  statsText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "white",
  },
  statsLabel: {
    fontSize: 14,
    color: "gray",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 10,
    color: "white",
  },
  bio: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  editProfileButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 5,
    paddingVertical: 8,
    alignItems: "center",
    marginRight: 10,
  },
  archiveButton: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#333",
    borderRadius: 5,
    paddingVertical: 8,
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
  },
  postsContainer: {
    flex: 1,
  },
  postImage: {
    width: "33%",
    height: 120,
    margin: 1,
  },
});
