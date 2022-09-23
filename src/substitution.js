// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//******************************STARTING SubstitutionModule*********************************************
const substitutionModule = (function () {
  // you can add any code you want within this function scope
  
  //******************************STARTING substitution*********************************************
  function substitution(input, alphabet, encode = true) {
    
    const originAlphabet = "abcdefghijklmnopqrstuvwxyz";
    // CAPITAL can be ignored
    const newInput = input.toLowerCase();
    
    // false condition.
    // if the character(alphabet) is not unique. 
    // new Set(); => remove duplicate value
    // (false)if less than 26 or not unique 
    const noDuplicates = new Set(alphabet);
    const noDuplicatesArray = Array.from(noDuplicates);
    const newAlphabet = noDuplicatesArray.join("");
    try{
      if (newAlphabet.length < 26 || !newAlphabet) {
        throw new Error("should return false if the substitution alphabet is not exactly 26 characters or missing.");
      } 
    } catch(error) {
      return false;
    }
    
    // create table.
    const table = {};
    let resultString = "";
    // table = {originAlphabet key: newAlphabet value}
    for (let i = 0; i < originAlphabet.length; i++) {
      if (table[originAlphabet[i]] === undefined) {
        table[originAlphabet[i]] = newAlphabet[i];
      }
    }
    
    // Main Function(Encoding & Decoding)
    //Encoding
    if (encode) {
      for (let j = 0; j < newInput.length; j++) {
        // space(" ") should be maintained
        if (newInput[j] === " ") {
          resultString += " ";
        }
        for (let key in table) {
          if (newInput[j] === key) {
            resultString += table[key];
          }
        }
      }
    // Decoding
    } else if (!encode) {
        for (let i = 0; i < newInput.length; i++) {
        // space(" ") should be maintained
        if (newInput[i] === " ") {
          resultString += " ";
        }
        for (let key in table) {
          if (newInput[i] === table[key]) {
            resultString += key;
          }
          }
        }
      }

      return resultString;
    }
  //******************************ENDING SUBSTITUTION*********************************************
  return {
    substitution,
  };
})();
//******************************ENDING SUBSTITUTIONModule*********************************************

module.exports = { substitution: substitutionModule.substitution };
