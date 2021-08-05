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
//this is meant to have ALL the selected numbers/letters
var constant = [];

function generatePassword(){

  var passwordLength = prompt("How many characters do you want your password to be 10-25")
  console.log(passwordLength)
  var passwordLength = parseInt(passwordLength);
  console.log(passwordLength)
  
  if (passwordLength > 25 || passwordLength < 10) {
    alert ("Nah. Type something else in.");
    return;
  }
  
  var capsConfirm = confirm("Do you want any uppercase letters in your passphrase?")
    if (capsConfirm === true) {
      //this looks like we are going to repeat this loop for as many characters in the caps array
      for (let i = 0; i < caps.length; i++) {
        constant.push(caps[i]);
        // console.log("this is the only value in constant",constant)
      }
    }
  
    var lowerConfirm = confirm("Do you want any lowercase letters in your passphrase?")
    if (lowerConfirm === true) {
      for (let i = 0; i < lower.length; i++) {
        constant.push(lower[i]);
      }
    }
    console.log("constant",constant)


    var specialConfirm = confirm("Do you want any special characters in thy password?")
    if (specialConfirm === true) {
      for (let i = 0; i < special.length; i++) {
        constant.push(special[i]);
        
      }
    }
    console.log("constant",constant)


    var numericConfirm = confirm("Do you want any numbers in thy password?")
    if (numericConfirm === true) {
      for (let i = 0; i < numeric.length; i++) {
        constant.push(numeric[i]);
        
      }
    }
    console.log("constant",constant)

    var randomPassword = "";
    console.log(passwordLength)
    for (let i = 0; i < passwordLength; i++) {
      //passwordlength is not a array so we cant index it
      //our goal is to loop and grab numbers from the constant array not the password length
      var randomNumber = Math.floor(Math.random() * constant.length);
      console.log(randomNumber)
      console.log(constant[randomNumber])
        randomPassword 
          constant [
            Math.floor(Math.random() * constant.length)];
 
    }

return "password";

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



