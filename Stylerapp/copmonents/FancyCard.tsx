import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.container}>
        <Image
          style={styles.ImgStyle}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
          }}
          resizeMode="contain" // This replaces `objectFit: "contain"`
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardCity}>City : INDORE</Text>
          <Text style={styles.cardTitle}>Why we use Coding</Text>
          <Text style={styles.cardDesc}>
            Coding Descriptioin Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Libero obcaecati est aperiam consequuntur sunt
            impedit nisi. Omnis perspiciatis perferendis assumenda aperiam id
            nobis quidem molestiae fugit illo cum, molestias tempore?
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.ImgStyle}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
          }}
          resizeMode="contain" // This replaces `objectFit: "contain"`
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardCity}>City : INDORE</Text>
          <Text style={styles.cardTitle}>Why we use Coding</Text>
          <Text style={styles.cardDesc}>
            Coding Descriptioin Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Libero obcaecati est aperiam consequuntur sunt
            impedit nisi. Omnis perspiciatis perferendis assumenda aperiam id
            nobis quidem molestiae fugit illo cum, molestias tempore?
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.ImgStyle}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
          }}
          resizeMode="contain" // This replaces `objectFit: "contain"`
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardCity}>City : INDORE</Text>
          <Text style={styles.cardTitle}>Why we use Coding</Text>
          <Text style={styles.cardDesc}>
            Coding Descriptioin Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Libero obcaecati est aperiam consequuntur sunt
            impedit nisi. Omnis perspiciatis perferendis assumenda aperiam id
            nobis quidem molestiae fugit illo cum, molestias tempore?
          </Text>
        </View>
      </View>
      <View style={styles.container}>
        <Image
          style={styles.ImgStyle}
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1663100722417-6e36673fe0ed?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8fHww",
          }}
          resizeMode="contain" // This replaces `objectFit: "contain"`
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardCity}>City : INDORE</Text>
          <Text style={styles.cardTitle}>Why we use Coding</Text>
          <Text style={styles.cardDesc}>
            Coding Descriptioin Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Libero obcaecati est aperiam consequuntur sunt
            impedit nisi. Omnis perspiciatis perferendis assumenda aperiam id
            nobis quidem molestiae fugit illo cum, molestias tempore?
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 25,
    fontWeight: "bold",
    color: "gold",
    paddingHorizontal: 10,
  },
  container: {
    marginBottom: 10,
    width: 350,
    height: 400,
    marginVertical: 20,
    backgroundColor: "white",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 5,
  },
  ImgStyle: {
    height: 220,
    width: "100%", // Ensure the image takes the full container space
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 15,
    marginTop: 10,
  },
  cardBody: {
    width: "100%",
    height: 200,
    textAlign: "center",
  },
  cardCity: {
    fontWeight: "bold",
    fontSize: 30,
    marginHorizontal: 30,
    textAlign: "center",
  },
  cardTitle: {
    fontSize: 20,
    marginHorizontal: 30,
    textAlign: "center",
  },
  cardDesc: {
    fontSize: 12,
    marginHorizontal: 10,
    textAlign: "center",
  },
});
