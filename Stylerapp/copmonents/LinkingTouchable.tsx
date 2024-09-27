import {
  StyleSheet,
  Text,
  View,
  Linking,
  TouchableOpacity,
  Image
} from "react-native";
import React from "react";

export default function LinkingTouchable() {
  function OpenSite(URL: string) {
    Linking.openURL(URL);
  }
  return (
    <View style={styles.container}>
        <Text style={styles.LinkStyle1}>How to open Link</Text>
        <Image style={styles.ImgStyle}  source={{
            uri:"https://media.istockphoto.com/id/1408255024/photo/developers-discussing-programming-code.webp?a=1&b=1&s=612x612&w=0&k=20&c=vEuZdJuxeL-pPzUWtZpxa1nVxbGOEGdVTm7qvKfhyfg="
        }}/>
      
      <View style={styles.parent}>


      <TouchableOpacity
      style={styles.btnParent}
      onPress={() => {
          OpenSite("https://unsplash.com/s/photos/coding");
        }}
        >
        <Text style={styles.LinkButton}>click to open link</Text>
      </TouchableOpacity>
      <TouchableOpacity
      style={styles.btnParent}
      onPress={() => {
            OpenSite("https://www.instagram.com/manish_keer19/");
        //   OpenSite("https://www.instagram.com/sargam_dhangar_37/");
        }}
        >
        <Text style={styles.LinkButton}>Follow me on Instagram</Text>
      </TouchableOpacity>
    </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        width:"95%",
        height:300,
        // borderWidth:2,
        // borderColor:"blue"
        backgroundColor:"blue",
        borderRadius:5,
        margin:"auto"
    
    },
    ImgStyle:{
        height:150,
        margin:10,
        borderRadius:5,
    },
  LinkStyle1: {
    fontSize: 30,
    color: "gold",
    textAlign: "center",
    fontWeight:"bold",
    marginVertical: 5,
  },

  parent:{
    flex:1,
    flexDirection:"row",
    gap:20,
    marginVertical:10,
    justifyContent:"center"
  },
  btnParent:{
   alignSelf: "flex-start",
   padding:7,
   backgroundColor:"gold",
   color:"black",
   borderRadius:4
   

  },
  LinkButton: {
    fontWeight:"bold"
  },

});
