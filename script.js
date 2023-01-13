// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
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

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
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

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
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

let includeNumber; // user choice to include number result
let includeSpecChar; //user choice to include special characters result
let includeUpper; // user choice to include uppercase result
let includeLower; // user choice to include lowercase result
let passwordLength; // store length of the users desired password
let userChoice; // array to hold all the options based on the users selected criteria

// Function to prompt user for password options

function getPasswordOptions() {
  passwordLength = parseInt(
    prompt("Select your password length (between 10 & 64 characters")
  ); // User picks password length
  if (!passwordLength) {
    alert("This needs a value"); // If no value/not numerical value is entered
  } else if (passwordLength < 10 || passwordLength > 64) {
    passwordLength = parseInt(
      prompt("Your password should be between 10 & 64 characters")
    ); // If value is outside of required length
  } else {
    includeNumber = confirm("Would you like your password to contain numbers?");
    includeLower = confirm(
      "Would you like your password to contain lowercase letters?"
    );
    includeUpper = confirm(
      "Would you like your password to contain uppercase letters?"
    );
    includeSpecChar = confirm(
      "Would you like you password to contain any special characters?"
    );
  }

  if (!includeNumber && !includeLower && !includeUpper && !includeSpecChar) {
    // If the user does not accept any of the four criteria, alert message
    userChoice = alert("You must pick at least one criteria for your password");
  } else if (includeNumber && includeLower && includeUpper && includeSpecChar) {
    // If user selects all four criteria, add them to array
    userChoice = specialCharacters.concat(
      numericCharacters,
      lowerCasedCharacters,
      upperCasedCharacters
    );
  }

  // all possible combinations for 3 selected criteria
  else if (includeLower && includeUpper && includeNumber) {
    userChoice = lowerCasedCharacters.concat(
      upperCasedCharacters,
      numericCharacters
    );
  } else if (includeLower && includeNumber && includeSpecChar) {
    userChoice = lowerCasedCharacters.concat(
      numericCharacters,
      specialCharacters
    );
  } else if (includeLower && includeUpper && includeSpecChar) {
    userChoice = lowerCasedCharacters.concat(
      upperCasedCharacters,
      specialCharacters
    );
  } else if (includeUpper && includeNumber && includeSpecChar) {
    userChoice = upperCasedCharacters.concat(
      numericCharacters,
      specialCharacters
    );
  }

  // all possible combinations for 2 selected criteria
  else if (includeLower && includeUpper) {
    userChoice = lowerCasedCharacters.concat(upperCasedCharacters);
  } else if (includeLower && includeSpecChar) {
    userChoice = lowerCasedCharacters.concat(specialCharacters);
  } else if (includeLower && includeNumber) {
    userChoice = lowerCasedCharacters.concat(numericCharacters);
  } else if (includeUpper && includeNumber) {
    userChoice = upperCasedCharacters.concat(numericCharacters);
  } else if (includeUpper && includeSpecChar) {
    userChoice = upperCasedCharacters.concat(specialCharacters);
  } else if (includeNumber && includeSpecChar) {
    userChoice = numericCharacters.concat(specialCharacters);
  }

  // all single criteria options
  else if (includeLower) {
    userChoice = lowerCasedCharacters;
  } else if (includeUpper) {
    userChoice = upperCasedCharacters;
  } else if (includeNumber) {
    userChoice = numericCharacters;
  } else if (includeSpecChar) {
    userChoice = specialCharacters;
  }
}

// Function for getting a random element from an array
function getRandom(userChoice) {
  for (let i = 0; i < passwordLength.length; i++) {
    let randomPicks = userChoice[Math.floor(Math.random() * userChoice.length)];
    password.push(randomPicks);
  }
}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions();
  getRandom();
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
