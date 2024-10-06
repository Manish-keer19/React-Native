// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   ScrollView,
//   TextInput,
// } from "react-native";
// import React, { useState } from "react";
// import HomePage from "./Navbar";
// import SignLogo from "../assets/Images/signup.webp";
// import symbolicateStackTrace from "react-native/Libraries/Core/Devtools/symbolicateStackTrace";

// export default function Signup() {
//   const [IsStudentOrInstrucote, setIsStudentOrInstrucote] =
//     useState<string>("Student");
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setlastName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [confirmpassword, setconfirmpassword] = useState<string>("");
//   return (
//     <ScrollView style={styles.container}>
//       <HomePage />
//       {/* <Text>Signup</Text> */}
//       {/* Image veiw */}
//       <View style={styles.imageContainer}>
//         <Image style={styles.imgStyle} source={SignLogo} />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.textStyle}>
//           Join the millions learning to code with StudyNotion for free
//         </Text>
//         <Text style={styles.subTextStyle}>
//           Build skills for today, tomorrow, and beyond. Education to
//           future-proof your career.
//         </Text>
//       </View>

//       <View style={styles.FormContainer}>
//         <View style={styles.StuOrInsstyle}>
//           <Text
//             style={{
//               color: "white",
//               fontSize: 23,
//               backgroundColor:
//                 IsStudentOrInstrucote === "Student" ? "blue" : "black",
//               padding: 10,
//               borderRadius: 25,
//             }}
//             onPress={() => {
//               setIsStudentOrInstrucote("Student");
//               console.log("isprss ", IsStudentOrInstrucote);
//             }}
//           >
//             Student
//           </Text>
//           <Text
//             style={{
//               color: "white",
//               fontSize: 23,
//               backgroundColor:
//                 IsStudentOrInstrucote === "Instructore" ? "blue" : "black",
//               padding: 10,
//               borderRadius: 25,
//             }}
//             onPress={() => {
//               setIsStudentOrInstrucote("Instructore");
//               console.log("isprss ", IsStudentOrInstrucote);
//             }}
//           >
//             Instructore
//           </Text>
//         </View>
//         <View>
//           <View style={styles.subFormcont}>
//             <View style={{ flexDirection: "row", backgroundColor: "red" }}>
//               <View
//                 style={{
//                   padding: 15,
//                   margin: 15,
//                   gap: 10,
//                   backgroundColor: "blue",
//                 }}
//               >
//                 <Text style={{ color: "white" }}>first name</Text>
//                 <TextInput
//                   style={{
//                     backgroundColor: "#161d29",
//                     width: "95%",
//                     padding: 10,
//                     color: "white",
//                     borderRadius: 10,
//                   }}
//                   keyboardType="default"
//                   value={firstName}
//                   placeholder="enter first name"
//                   placeholderTextColor={"#6b737a"}
//                 />
//               </View>
//               <View
//                 style={{
//                   padding: 15,
//                   margin: 15,
//                   gap: 10,
//                   backgroundColor: "blue",
//                 }}
//               >
//                 <Text style={{ color: "white" }}>first name</Text>
//                 <TextInput
//                   style={{
//                     backgroundColor: "#161d29",
//                     width: "95%",
//                     padding: 10,
//                     color: "white",
//                     borderRadius: 10,
//                   }}
//                   keyboardType="default"
//                   value={firstName}
//                   placeholder="enter first name"
//                   placeholderTextColor={"#6b737a"}
//                 />
//               </View>
//             </View>
//           </View>
//         </View>
//       </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     width: "100%",
//     minHeight: "100%",
//     backgroundColor: "#000814", // Dark background color
//   },
//   imageContainer: {
//     width: "92%",
//     height: 280,
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginTop: 40,
//     borderWidth: 1,
//     borderColor: "white",
//   },
//   imgStyle: {
//     height: "100%",
//     width: "100%",
//     borderRadius: 5,
//   },
//   textContainer: {
//     width: "92%",
//     minHeight: 250,
//     // borderWidth: 1,
//     // borderColor: "white",
//     marginTop: 16,
//     marginLeft: "auto",
//     marginRight: "auto",
//     gap: 15,
//   },
//   textStyle: {
//     fontSize: 30,
//     fontWeight: "bold",
//     color: "#f1f2ff",
//     textAlign: "center",
//   },
//   subTextStyle: {
//     fontSize: 19,
//     color: "#afb2bf",

//     textAlign: "center",
//   },
//   FormContainer: {
//     width: "92%",
//     minHeight: 400,
//     borderWidth: 1,
//     borderColor: "red",
//     marginLeft: "auto",
//     marginRight: "auto",
//   },
//   StuOrInsstyle: {
//     borderWidth: 1,
//     backgroundColor: "#161d29",
//     width: "85%",
//     height: "20%",
//     marginTop: 20,
//     marginLeft: 30,
//     borderRadius: 30,
//     flexDirection: "row",
//     alignItems: "center",
//     gap: 15,
//     justifyContent: "center",
//   },
//   subFormcont: {
//     width: "95%",
//     minHeight: 250,
//     borderWidth: 1,
//     borderColor: "blue",
//     marginLeft: "auto",
//     marginRight: "auto",
//     marginTop: 20,
//   },
// });


import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import HomePage from "./Navbar";
import SignLogo from "../assets/Images/signup.webp"; // Image path

export default function Signup() {
  const [IsStudentOrInstructor, setIsStudentOrInstructor] = useState("Student");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");


 const  handleSubmit = ()=>{
  console.log("submt btn clicked");
 const data =  {IsStudentOrInstructor,firstName,lastName,email,phoneNumber,password,confirmPassword};

 console.log("data is ",data)
 }

  return (
    <ScrollView style={styles.container}>
      <HomePage />
      
      {/* Image Section */}
      <View style={styles.imageContainer}>
        <Image source={SignLogo} style={styles.image} />
      </View>

      {/* Text Section */}
      <View style={styles.textContainer}>
        <Text style={styles.heading}>Join the millions learning to code with StudyNotion for free</Text>
        <Text style={styles.subText}>Build skills for today, tomorrow, and beyond. Education to future-proof your career.</Text>
      </View>
      
      {/* Form Section */}
      <View style={styles.FormContainer}>
        <View style={styles.StuOrInsStyle}>
          <TouchableOpacity
            style={{
              ...styles.buttonStyle,
              backgroundColor: IsStudentOrInstructor === "Student" ? "#000814" : "#161d29",
            }}
            onPress={() => setIsStudentOrInstructor("Student")}
          >
            <Text style={styles.buttonText}>Student</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              ...styles.buttonStyle,
              backgroundColor: IsStudentOrInstructor === "Instructor" ? "#000814" : "#161d29",
            }}
            onPress={() => setIsStudentOrInstructor("Instructor")}
          >
            <Text style={styles.buttonText}>Instructor</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
            placeholderTextColor="#6b737a"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={lastName}
            onChangeText={setLastName}
            placeholder="Last Name"
            placeholderTextColor="#6b737a"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={setEmail}
            placeholder="Email Address"
            keyboardType="email-address"
            placeholderTextColor="#6b737a"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            placeholderTextColor="#6b737a"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Create Password"
            secureTextEntry
            placeholderTextColor="#6b737a"
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirm Password"
            secureTextEntry
            placeholderTextColor="#6b737a"
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton}
        onPress={handleSubmit}
        >
          <Text style={styles.submitButtonText}>Create Account</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0a0a23",
  },
  imageContainer: {
    width: "92%",
    height: 280,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 40,
    borderWidth: 1,
    borderColor: "white",
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 5,
  },
  textContainer: {
    padding: 20,
    alignItems: "center",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
  },
  subText: {
    fontSize: 16,
    color: "#afb2bf",
    textAlign: "center",
  },
  FormContainer: {
    padding: 20,
  },
  StuOrInsStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  buttonStyle: {
    padding: 10,
    borderRadius: 5,
    width: "45%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  inputContainer: {
    marginBottom: 15,
  },
  input: {
    backgroundColor: "#161d29",
    padding: 10,
    color: "white",
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: "#FFD700",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
  },
  submitButtonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0a0a23",
  },
});
