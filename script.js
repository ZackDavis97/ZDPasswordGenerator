var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var caps = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var special = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^","_","`","{","|","}","~"];
var numeric = ["0","1","2","3","4","5","6","7","8","9"];
var constant = [];

function generatePassword(){

  var passwordLength = prompt("Enter your new password here.")

  var passwordLength = parseInt(passwordLength);
  console.log(passwordLength)
  
  if (passwordLength > 25 || passwordLength < 10) {
    alert ("Nah. Type something else in.");
    return;
  }
  
  var capsConfirm = confirm("Do you want any uppercase letters in your passphrase?")
    if (capsConfirm === true) {
      for (let i = 0; i < caps.length; i++) {
        constant = caps[i];
        
      }
    }
  
    var lowerConfirm = confirm("Do you want any lowercase letters in your passphrase?")
    if (lowerConfirm === true) {
      for (let i = 0; i < lower.length; i++) {
        constant = lower[i];
        
      }
    }

    var specialConfirm = confirm("Do you want any special characters in thy password?")
    if (specialConfirm === true) {
      for (let i = 0; i < special.length; i++) {
        constant = special[i];
        
      }
    }

    var numericConfirm = confirm("Do you want any numbers in thy password?")
    if (numericConfirm === true) {
      for (let i = 0; i < numeric.length; i++) {
        constant = numeric[i];
        
      }
    }

    var randomPassword = "";
    for (let i = 0; i < passwordLength.length; i++) {
      constant = passwordLength[i]; [
        Math.floor(Math.random() * constant.length)];
        randomPassword 
          constant [
            Math.floor(Math.random() * constant.length)];
 
    }

return "password";

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



