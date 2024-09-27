import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function ConatactList() {
  const contacts = [
    {
      uid: 1,
      name: "Hitesh Choudhary",
      status: "Just an extra ordinary teacher",
      imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
    },
    {
      uid: 2,
      name: "Anurag Tiwari",
      status: "I ❤️ To Code and Teach!",
      imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
    },
    {
      uid: 3,
      name: "Sanket Singh",
      status: "Making your GPay smooth",
      imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
    },
    {
      uid: 4,
      name: "Anirudh Jwala",
      status: "Building secure Digital banks",
      imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
    },
  ];
  return (
    <View style={styles.main}>
      <Text style={styles.LinkStyle1}>ConatactList</Text>
      <ScrollView>
        {contacts.map((item, i) => (
          <View key={i} style={styles.Parent}>
            <Text style={styles.UidStyle}>{item.uid}</Text>
            <Image style={styles.imgstyle} source={{ uri: item.imageUrl }} />
            <View style={styles.child}>
              <Text style={styles.nameStyle}>{item.name}</Text>
              <Text style={styles.statusStyle}>{item.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {},
  LinkStyle1: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 5,
  },
  Parent: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
    margin: 7,
    backgroundColor:"blue",
    borderRadius:10,
    padding:5
  },
  child: {
    flex: 1,
    gap: 3,
  },
  imgstyle: {
    height: 50,
    width: 50,
    borderRadius:50
  },
  UidStyle: {
    color: "white",
  },
  nameStyle: {
    color: "white",
    fontWeight:"bold",
    fontSize:19
  },
  statusStyle: {
    color: "white",
  },
});
