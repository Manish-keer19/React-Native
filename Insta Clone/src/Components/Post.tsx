import { StyleSheet, Text, View, Image, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";

import EntypoIcon from "react-native-vector-icons/Entypo";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import OcticonsIcons from "react-native-vector-icons/Octicons";
import FeatherIcons from "react-native-vector-icons/Feather";

export default function Post() {
  // Sample data for each post (this can be dynamic in a real app)
  const [posts, setPosts] = useState(
    [...Array(20)].map(() => ({
      likes: 120,
      views: 350,
      comments: 15,
      liked: false,
      saved: false,
    }))
  );

  // Function to toggle like for a post
  const toggleLike = (index:number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].liked = !updatedPosts[index].liked;
    updatedPosts[index].likes += updatedPosts[index].liked ? 1 : -1;
    setPosts(updatedPosts);
  };

  // Function to toggle bookmark for a post
  const toggleSave = (index:number) => {
    const updatedPosts = [...posts];
    updatedPosts[index].saved = !updatedPosts[index].saved;
    setPosts(updatedPosts);
  };

  return (
    <ScrollView style={styles.postWrapper}>
      {posts.map((post, i) => (
        <View style={styles.postContainer} key={i}>
          {/* Header */}
          <View style={styles.postHeader}>
            <View style={styles.profileInfo}>
              <Image
                style={styles.avatar}
                source={{
                  uri: "https://res.cloudinary.com/manish19/image/upload/v1726506341/ftedkmcuqzwy97jwjdqu.jpg",
                }}
              />
              <Text style={styles.username}>Manish keer</Text>
            </View>
            <EntypoIcon name="dots-three-vertical" size={18} color={"white"} />
          </View>

          {/* Post Image */}
          <View style={styles.postImageWrapper}>
            <Image
              style={styles.postImage}
              source={{
                uri: "https://res.cloudinary.com/manish19/image/upload/v1726593608/lkiq9xru9jzd1lrd4b7m.jpg",
              }}
            />
          </View>

          {/* Action Icons */}
          <View style={styles.postActionsWrapper}>
            <View style={styles.leftIcons}>
              <Pressable
                onPress={() => toggleLike(i)}
                style={({ pressed }) => [{ opacity: pressed ? 0.1 : 1 }]}
              >
                <AntDesignIcon
                  name={post.liked ? "heart" : "hearto"}
                  color={post.liked ? "red" : "white"}
                  size={24}
                />
              </Pressable>

              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
              >
                <OcticonsIcons name="comment" color={"white"} size={24} />
              </Pressable>

              <Pressable
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
              >
                <FeatherIcons name="share" color={"white"} size={24} />
              </Pressable>
            </View>

            <Pressable
              onPress={() => toggleSave(i)}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <FeatherIcons
                name={post.saved ? "bookmark" : "bookmark"}
                color={post.saved ? "yellow" : "white"}
                size={24}
              />
            </Pressable>
          </View>

          {/* Like and View Count */}
          <View style={styles.postInfoWrapper}>
            <Text style={styles.postInfoText}>{post.likes} likes</Text>
            <Text style={styles.postInfoText}>{post.views} views</Text>
          </View>

          {/* Comment Count */}
          <Text style={styles.commentCount}>{post.comments} comments</Text>

          {/* Post Description */}
          <Text style={styles.postDescription}>
            <Text style={styles.username}>Manish keer </Text>
            Enjoying the view! #travel #landscape
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  postWrapper: {
    flex: 1,
    backgroundColor: "#000", // Black background for Instagram-like look
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  username: {
    color: "white",
    fontWeight: "bold",
  },
  postImageWrapper: {
    width: "100%",
    height: 350,
  },
  postImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  postActionsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  leftIcons: {
    flexDirection: "row",
    gap: 15,
  },
  postInfoWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  postInfoText: {
    color: "white",
  },
  commentCount: {
    color: "white",
    paddingHorizontal: 10,
    marginTop: 5,
  },
  postDescription: {
    color: "white",
    padding: 10,
  },
});
