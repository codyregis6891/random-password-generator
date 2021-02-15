// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("How long would you like you password to be? (Password length must be between 8 and 128 characters long)");
    if ((passwordLength >= 8) && (passwordLength <= 128)) {
        var confirmNumbers = confirm("Would you like to use numbers in your password?");
        var confirmSymbols = confirm("Would you like to use symbols in your password?");
        var confirmLowerCase = confirm("Would you like to use lower case letters in your password?");
        var ConfirmUpperCase = confirm("Would you like to use upper case letters in your password?");

        var numbers = "0123456789";
        var symbols = "!@#$%^&*()_-,.<>+=";
        var lowerCase = "abcdefghijklmnopqrstuvwxyz";
        var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

        var everything = numbers + symbols + lowerCase + upperCase;
        var numSymLow = numbers + symbols + lowerCase;
        var numSymUp = numbers + symbols + upperCase;
        var numLowUp = numbers + lowerCase + upperCase;
        var symLowUp = symbols + lowerCase + upperCase;
        var numSym = numbers + symbols;
        var numLow = numbers + lowerCase;
        var numUp = numbers + upperCase;
        var symLow = symbols + lowerCase;
        var symUp = symbols + upperCase;
        var lowUp = lowerCase + upperCase;

        

    
    }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
