import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Dice from './src/component/Dice'
import AnimatedDice from './src/component/AnimatedDice'


export default function App() {
  return (
    <View style={{height:"100%",width:"100%", backgroundColor:"blue", alignItems:"center",justifyContent:"center"}}>
      
     {/* <Dice/> */}
     <AnimatedDice/>
    </View>
  )
}

const styles = StyleSheet.create({})