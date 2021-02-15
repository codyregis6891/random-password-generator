// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordDisplay = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
    var passwordLength = prompt("How many characters would you like you password to be? (Enter a number between 8 and 128)");

    if ((passwordLength < 8) || (passwordLength > 128)) {
        alert("Your choice must be between 8 and 128 characters.  Try again.");
    } else {
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

        var password = "";

        if ((confirmNumbers) && (confirmSymbols) && (confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * everything.length);
                password += everything.charAt(randomCharacter);
            }

        } else if ((confirmNumbers) && (confirmSymbols) && (confirmLowerCase) && (!ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * numSymLow.length);
                password += numSymLow.charAt(randomCharacter);
            }

        } else if ((confirmNumbers) && (confirmSymbols) && (!confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * numSymUp.length);
                password += numSymUp.charAt(randomCharacter);
            }
        
        } else if ((confirmNumbers) && (!confirmSymbols) && (confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * numLowUp.length);
                password += numLowUp.charAt(randomCharacter);
            }

        } else if ((!confirmNumbers) && (confirmSymbols) && (confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * symLowUp.length);
                password += symLowUp.charAt(randomCharacter);
            }

        } else if ((confirmNumbers) && (confirmSymbols) && (!confirmLowerCase) && (!ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * numSym.length);
                password += numSym.charAt(randomCharacter);
            }

        } else if ((confirmNumbers) && (!confirmSymbols) && (confirmLowerCase) && (!ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * numLow.length);
                password += numLow.charAt(randomCharacter);
            }

        } else if ((confirmNumbers) && (!confirmSymbols) && (!confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * numUp.length);
                password += numUp.charAt(randomCharacter);
            }

        } else if ((!confirmNumbers) && (confirmSymbols) && (confirmLowerCase) && (!ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * symLow.length);
                password += symLow.charAt(randomCharacter);
            }

        } else if ((!confirmNumbers) && (confirmSymbols) && (!confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * symUp.length);
                password += symUp.charAt(randomCharacter);
            }

        } else if ((!confirmNumbers) && (!confirmSymbols) && (confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * lowUp.length);
                password += lowUp.charAt(randomCharacter);
            }

        } else if ((confirmNumbers) && (!confirmSymbols) && (!confirmLowerCase) && (!ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * numbers.length);
                password += numbers.charAt(randomCharacter);
            }

        } else if ((!confirmNumbers) && (confirmSymbols) && (!confirmLowerCase) && (!ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * symbols.length);
                password += symbols.charAt(randomCharacter);
            }

        } else if ((!confirmNumbers) && (!confirmSymbols) && (confirmLowerCase) && (!ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * lowerCase.length);
                password += lowerCase.charAt(randomCharacter);
            }

        } else if ((!confirmNumbers) && (!confirmSymbols) && (!confirmLowerCase) && (ConfirmUpperCase)) {
            for (i = 0; i < passwordLength; i++) {
                var randomCharacter = Math.floor(Math.random() * upperCase.length);
                password += upperCase.charAt(randomCharacter);
            }

        } else {
            alert("You must choose at least one of the four options!");
        }

        passwordDisplay.textContent = password;
    
    }


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
