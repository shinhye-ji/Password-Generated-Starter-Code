// Assignment code here
//click button to generate a password

//when prompted for length of password, i choose length between 8-128

//when asked for character types, i confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//when i answer each prompt, my input should be validated and at least one character type should be selected.

//when all prompts are answered, a password is generated based on selected criteria

//when password is generated, password is displayed in an alert or written to the page.
const lengthOfPass = prompt("Enter the password length (between 8 and 128 characters).")
const chosenLengthOfPass = 8 < lengthOfPass <= 128 

if(chosenLengthOfPass) {
  
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
