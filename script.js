// Assignment Code

let generatedArray = [];
let lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

let upperCase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

let characters = [
  "?",
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let passwordLength;

function passwordPrompt() {
  passwordLength = parseInt(
    prompt("Please choose a password between 8-128 characters.")
  );
  // always try to console log so you're not flying blind
  console.log(passwordLength);

  // i need to have the user let me know which character types they want.
  // we can do this through something called a confirm prompt
  let upperCaseConfirm = confirm("Do you want Upper Case characters?");
  console.log(upperCaseConfirm);

  let lowerCaseConfirm = confirm("Do you want Lower Case characters?");
  console.log(lowerCaseConfirm);

  let specialConfirm = confirm("Do you want Special characters?");
  console.log(specialConfirm);

  let numbersConfirm = confirm("Do you want Number characters?");
  console.log(numbersConfirm);
  // i can set up a conditional because I now have access to what the user chose

  if (upperCaseConfirm === true) {
    // I need to grab the characters from the uppercase array and store them
    // I will put them in a new array
    // you can concat the uppercase array to an empty array
    generatedArray = generatedArray.concat(upperCase);
  }

  if (lowerCaseConfirm === true) {
    generatedArray = generatedArray.concat(lowerCase);
  }

  if (specialConfirm === true) {
    generatedArray = generatedArray.concat(characters);
  }

  if (numbersConfirm === true) {
    generatedArray = generatedArray.concat(numbers);
  }
  console.log(generatedArray);
  var jumble = generatedArray.toString();
  console.log(jumble);
  length = passwordLength;
  newVal = "";
  for (var i = 0, n = jumble.length; i < length; ++i) {
    newVal += jumble.charAt(Math.floor(Math.random() * n));
    console.log(newVal);
  }
  return newVal;

  //return String;
}

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  //passwordPrompt(); // this is now working and I am getting the password length

  charset = passwordPrompt();
  retVal = "";
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n));
  }
  return retVal;
  finalPassword = ""; // whatever our random generated string is

  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
