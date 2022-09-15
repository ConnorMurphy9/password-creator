// Prompt popup
function howmanychars() {

  var howlong = prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
  if (howlong < 8) {
    alert("Please enter an amount that is 8 or more.");
  }
  else if (howlong > 128) {
    alert("Please enter an amount that is 128 or less.");
  }

}

howmanychars();








// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
