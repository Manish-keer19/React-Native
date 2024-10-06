import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './src/Components/Navbar'
import Story from './src/Components/Story'
import Post from './src/Components/Post'

export default function App() {
  return (
    <ScrollView
    showsHorizontalScrollIndicator={false}
    style={
      {
        minHeight:"100%",
        minWidth:"100%",
        // backgroundColor:"#212121"
        backgroundColor:"black"
      }
    }>
    <Navbar/>
    <Story/>
    <Post/>
    </ScrollView>
  )
}

const styles = StyleSheet.create({})