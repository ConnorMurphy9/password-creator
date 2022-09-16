
// Declare variable for user's chosen character count of password
var howlong = prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
    if (howlong < 8) {
      alert("Please enter an amount that is 8 or more.");
  }
    else if (howlong > 128) {
      alert("Please enter an amount that is 128 or less.");
  }
    // else if (howlong == NaN) {
    //   alert("Please enter a number.");
    // }
  
parseInt (howlong);

    for (i = 0; i < howlong; i++) {
console.log("#"); 
    }
  
  
  
  
  
  // Declare variables for user's criteria
  var wantUpper = confirm("Would you like to include uppercase letters?"); 
  var wantLower = confirm("Would you like to include lowercase letters?");
  var wantSymbols = confirm("Would you like to include symbols?");
  var wantNumbers = confirm("Would you like to include numbers?");



  
function randomSpecial() {
        var symbols = '!@#$%^&*_+=-`~(){}[]<>,./?:;';
        return symbols[Math.floor(Math.random() * symbols.length)];
      }   
var randomNumber = (Math.floor(Math.random() * 10));
var randomUpper = String.fromCharCode(Math.floor(Math.random() * 26) + 65);
var randomLower = String.fromCharCode(Math.floor(Math.random() * 26) + 97);




// paste into generatePassword function later
if (wantUpper == true) {
      randomUpper;  
}

if (wantLower == true) {
      randomLower;
}

if (wantSymbols == true) {
      randomSpecial();
}

if (wantNumbers == true) {
      randomNumber;
}




console.log(randomNumber);
console.log(randomUpper);
console.log(randomLower);
console.log(randomSpecial());

function generatePassword() {
  console.log("Hey! You clicked the button.");

  


// var howlong = prompt("How many characters would you like your password to have?", "Choose between 8 and 128 characters.");
//   if (howlong < 8) {
//     alert("Please enter an amount that is 8 characters or more.");
//   }
//   else if (howlong > 128) {
//     alert("Please enter an amount that is 128 characters or less.");
//   }
//   else (howlong == null || "") {
//     alert("You must enter a value to generate a password.");
//    }   
// //    else {
// //     for (i = 0; )
// //    }
// 

  


// The return value here will be the password
  return "Generated password will go here!";
}




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




