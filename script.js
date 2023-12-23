// Assignment code here
//click button to generate a password

//when prompted for length of password, i choose length between 8-128

//when asked for character types, i confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

//when i answer each prompt, my input should be validated and at least one character type should be selected.

//when all prompts are answered, a password is generated based on selected criteria

//when password is generated, password is displayed in an alert or written to the page.

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

let lengthOfPass = prompt("Enter the password length.");
let chosenLengthOfPass = (lengthOfPass >= 8 && lengthOfPass <= 128);
console.log(chosenLengthOfPass);


while (!chosenLengthOfPass) {
  if (lengthOfPass < 8) {
    alert("Invalid password length. Password must be at least 8 characters. Please try again.");
    lengthOfPass = prompt("Enter the password length.")
  } else if (lengthOfPass > 128 ) {
    alert("Invalid password length. Password must be at a maximum of 128 characters. Please try again.");
    lengthOfPass = prompt("Enter the password length.")
  } else {
    chosenLengthOfPass = true;
  }
}
if(chosenLengthOfPass) {
    alert("Valid password length");
  }

const specialChar = confirm("Would you like to include special characters in your password?");

  if (specialChar) {
    alert("Your password will contain special characters.");
  } else {
    alert("Your password will not contain special characters.");
  } 

const upperCase = confirm("Would you like to include uppercase letters?");
  if (upperCase) {
    alert("Your password will contain uppercase letters.");
  } else {
    alert("Your password will not contain uppercase letters.");
  } 

const lowerCase = confirm("would you like to include uppercase letters?");
  if (lowerCase) {
    alert("Your password will contain lowercase letters.");
  } else {
    alert("Your password will not contain lowercase letters.");
  } 

const numbers = confirm("would you like to include numbers?");
  if (numbers) {
    alert("Your password will contain numbers.");
  } else {
    alert("Your password will not contain numbers.");
  } 


function generatePassword() {
  const lowerAlphabet = "qwertyuiopasdfghjklzxcvbnm".split('');
  const random2 = Math.floor(Math.random() * 26); 
  const random3 = Math.floor(Math.random() * 10);
  const random4 = Math.floor(Math.random() * 30);
  let random5 = Math.floor(Math.random() * lengthOfPass);
  
  let password = []
    for (var i = 0; i < lengthOfPass; i++) {
      const random = Math.floor(Math.random() * 26);
      password[i] = lowerAlphabet[random];
    }  if (upperCase) {
      password[0] = "QWERTYUIOPASDFGHJKLZXCVBNM".split('')[random2];
  } if (numbers) {
      password[1] = "0123456789".split('')[random3];
  } if (specialChar) {
      password[2] = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~".split('')[random4];
  }
  
  return password.join("");
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
