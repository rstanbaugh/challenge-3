// Assignment Code
var generateBtn = document.querySelector("#generate");

// password object definition
var password = {
  pwLength: 8,
  pwLower: false,
  pwUpper: false,
  pwNumerical: false,
  pwSpecial: false,
  password: "",
  reset: function() {
    this.pwLength = 8;
    this.pwLower = false;
    this.pwUpper = false;
    this.pwNumerical = false;
    this.pwSpecial = false;
    this.password = "";
  },
  // method to validate pw length
  validateLength: function(){
    if (this.pwLength < 8 || this .pwLength > 128){
      window.alert("You did not pick a valid length for your password!");
      this.pwLength = window.prompt("Choose a password length between 8 and 128 characters:");
      this.validateLength();
    }
  },
  // method to validate that ≥ char type chosen for pw
  validateCharacterType: function(){
    // must select at least one type of character for password
    if(!this.pwLower && !this.pwUpper && !this.pwNumerical && !this.pwSpecial){
      window.alert("You must pick at lest one character type for your password");
      this.configurePassword();
      this.validateCharacterType();
    }
  },
  // method to configure the password length + char types
  configurePassword: function(){
    this.pwLength = window.prompt("Choose a password length between 8 and 128 characters:");
    // validate length
    this.validateLength();
  
    this.pwLower = window.confirm("Would you like to include lower cases letters in your password?");
    this.pwUpper = window.confirm("Would you like to include upper cases letters in your password?");
    this.pwNumerical = window.confirm("Would you like to include numbers in your password?");
    this.pwSpecial = window.confirm("Would you like to include special characters in your password?");
    // validate at least one character type selected
    this.validateCharacterType();
  },
  // method to generate the password
  generatePassword: function(){
    var chars ="";
    this.password = "";

    // if statements to choose which types of characters included in pw
    if (this.pwLower){
      chars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (this.pwUpper){
      chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (this.pwNumerical){
      chars += "0123456789"
    }
    if (this.pwSpecial){
      chars += "!@#$%^&*()";
    }
    
    // loop to choose random characters for password
    for(var i = 0; i< this.pwLength; i++){
      var randomInt = Math.floor(Math.random()*chars.length);
      password.password += chars.substring(randomInt, randomInt + 1);
    }
  }
};


// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");
  password.configurePassword();
  password.generatePassword();
  passwordText.value = password.password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
