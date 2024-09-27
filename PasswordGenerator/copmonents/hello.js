// JavaScript code to generate a random password

// Variables to control the password generation
let number = true;
let charactors = true;
let upperCase = true;
let lowerCase = true;
let passwordLength = 15; // Adjust the length of the password
let password = "";

// Function to generate the password
function generatePassword(inputValue: undefined) {
  let str = "abcdefghijklmnopqrstuvwxyz";
  let pass = "";
  let char = "!@#$%^&*()-_=+[]{}|;:',.<>/?`~";
  let num = "1234567890";
  let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  if (number) {
    str += num;
    console.log("After adding numbers, str is:", str);
  }

  if (charactors) {
    str += char;
    console.log("After adding characters, str is:", str);
  }

  if (upperCase) {
    str += upper;
    console.log("After adding uppercase letters, str is:", str);
  }

  for (let i = 0; i < passwordLength; i++) {
    let ch = Math.floor(Math.random() * str.length);
    console.log("Character index is:", ch);
    pass += str[ch];
    console.log("Generated password is:", pass);
  }

  password = pass;
  console.log("Final password:", password);
}

// Call the function to generate the password
generatePassword();
