import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import React, { useState } from "react";
import Logo from "../assets/Logo/Logo-Full-Light.png";
import Icon from "react-native-vector-icons/Ionicons";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../App";

export default function Navbar() {
  const [hamburgerClicked, setHamburgerClicked] = useState(false);

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const handleHamburgerClick = () => {
    setHamburgerClicked(!hamburgerClicked);
    console.log("Hamburger clicked");
  };

  return (
    <>
      <View style={styles.main}>
        <View style={styles.imageContainer}>
          <Image style={styles.ImgStyle} source={Logo} />
        </View>

        <TouchableOpacity onPress={handleHamburgerClick}>
          <Icon
            name="menu"
            size={30}
            color="#fff"
            style={{ color: hamburgerClicked ? "gold" : "white" }}
          />
        </TouchableOpacity>
      </View>

      {hamburgerClicked && (
        <View style={styles.navMenu}>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.navText}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("About")}
          >
            <Text style={styles.navText}>About</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.navItem}
            onPress={() => navigation.navigate("Contact")}
          >
            <Text style={styles.navText}>Contact</Text>
          </TouchableOpacity>
          <View style={{ gap: 10, marginTop: 10 }}>
            <TouchableOpacity
              style={[styles.navItem, styles.btnStyle]}
              onPress={() => navigation.navigate("Login")}
            >
              <Text style={styles.btnText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.navItem, styles.btnStyle]}
              onPress={() => navigation.navigate("Signup")}
            >
              <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100%",
    height: 100,
    backgroundColor: "#161d29",
    marginTop: 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 25,
    borderRadius:10 
  },
  imageContainer: {
    width: 160,
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  ImgStyle: {
    height: 35,
    width: 160,
    resizeMode: "contain", // Maintain aspect ratio
  },
  navMenu: {
    position: "absolute",
    top: 120,
    right: 0,
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: 200,
    zIndex: 1,
    elevation: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  navItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#444",
  },
  navText: {
    color: "#fff",
    fontSize: 18,
  },
  btnStyle: {
    backgroundColor: "yellow", // Set button color to black
    padding: 10,
    borderRadius: 10,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  btnText: {
    color: "black", // Set text color to white
    fontWeight: "bold", // Bold font
    fontSize: 18,
  },
});
