import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageSourcePropType,
  Pressable,
} from "react-native";
import React from "react";
import { PropsWithChildren } from "react";
import { useState } from "react";
import diceOne from "../../assets/One.png";
import diceTwo from "../../assets/Two.png";
import diceThree from "../../assets/Three.png";
import diceFour from "../../assets/Four.png";
import diceFive from "../../assets/Five.png";
import diceSix from "../../assets/Six.png";

// type DiceProps = PropsWithChildren<{
//     ImageUrl :ImageSourcePropType
// }>

// export default function Dice({ImageUrl}:DiceProps) {
//     const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne)

//     const UpdateDice = ()=>{
//         const dice = Math.floor(Math.random()*6);
//         console.log("dice val is ",dice);

//     }

//   return (
//     <View>
//       <Text>Dice</Text>
//       <Image source={diceImage} />
//     </View>
//   );
// }
export default function Dice() {
  const [diceImage, setDiceImage] = useState<ImageSourcePropType>(diceOne);

  const UpdateDice = () => {
    const dice = Math.floor(Math.random() * 6 + 1);
    console.log("dice val is ", dice);

    switch (dice) {
      case 1:
        setDiceImage(diceOne);
        break;
      case 2:
        setDiceImage(diceTwo);
        break;
      case 3:
        setDiceImage(diceThree);
        break;
      case 4:
        setDiceImage(diceFour);
        break;
      case 5:
        setDiceImage(diceFive);
        break;
      case 6:
        setDiceImage(diceSix);
        break;
      default:
        break;
    }
  };

  return (
    <View>
      <Image source={diceImage} />
      <Pressable
        style={{
          padding: 10,
          alignItems: "center",
          backgroundColor: "yellow",
          borderRadius: 10,
          cursor: "pointer",
        }}
        onPress={UpdateDice}
      >
        <Text> Press to generate dice</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({});
