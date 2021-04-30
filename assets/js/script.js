// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Strings of Choices
const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numeric = "0123456789"; 
const special = "!@#$%&?"; //Choosing only the special characters that are normally used in passwords. 


// Shuffle with Fisher–Yates
function shuffle(array) {
  var copy = [], n = array.length, i;

  // While there remain elements to shuffle…
  while (n) {

      // Pick a remaining element…
      i = Math.floor(Math.random() * n--);

      // And move it to the new array.
      copy.push(array.splice(i, 1)[0]);
  }

  return copy;
}


// Define generatePassword function: 
let generatePassword = function() {

// While Loop to make sure they choose between 8-128 characters
  let userLength = "0";
  while(userLength < 8 || userLength > 128) {
    userLength = window.prompt("How many characters should the password include? (8-128)");
    if (userLength < 8 || userLength > 128) {
      window.alert("You must choose between 8 and 128 characters for your password.")
    }
  };

// While Loop to make sure they choose at least one type of character
  let oneSelected = false
  let userLower = false
  let userUpper = false
  let userNumeric = false
  let userSpecial = false

  while (!oneSelected) {
    userLower = window.confirm("Should the password include lowercase characters?")
    userUpper = window.confirm("Should the password include uppercase characters?")
    userNumeric = window.confirm("Should the password include numerical characters?")
    userSpecial = window.confirm("Should the password include special characters?")
    if(userLower === true || userUpper === true || userNumeric === true || userSpecial === true) {
      oneSelected = true;
    }
    else {
      window.alert("You must choose to include at least one type of character!")
    }
  };

// Make a string of all the possible chosen characters: 
  let selectedChars = ""
// Count how many types are selected (from Upper, Lower, Numeric, or Special)
  let numberSelected = 0
//Make a string of final chosen characters: 
  let finalPassword = ""

  if (userLower) {
    numberSelected ++;
    selectedChars += lower;
    finalPassword += lower.charAt(Math.floor(Math.random() * lower.length));
  };

  if (userUpper) {
    numberSelected ++;
    selectedChars += upper;
    finalPassword += upper.charAt(Math.floor(Math.random() * upper.length));
  };

  if (userNumeric) {
    numberSelected ++;
    selectedChars += numeric;
    finalPassword += numeric.charAt(Math.floor(Math.random() * numeric.length));
  };

  if (userSpecial) {
    numberSelected ++;
    selectedChars += special;
    finalPassword += special.charAt(Math.floor(Math.random() * special.length));
  };

  for (i = 0; i < (userLength - numberSelected); i++) {
    finalPassword += selectedChars.charAt(Math.floor(Math.random() * selectedChars.length))
  };


  let shuffledPassword = finalPassword.split('');
  return shuffle(shuffledPassword).join('');

}