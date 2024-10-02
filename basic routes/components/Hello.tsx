import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

export default function Hello({navigation}:any) {
  return (
    <View>
    <Text>Hello Screen</Text>
    <Button
      title="Go to home section"
      onPress={() => navigation.navigate("Home")}
    />
  </View>
  )
}

const styles = StyleSheet.create({})