// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

//---------------------------------------------------------------------------------------------

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  
  // Polybius square
    // no additional symbols
    // only spaces and letters
    // I & J share the space.
      // Encoding => I&J => 42
      // Decoding => "(i/j)"
  const polybiusSquare = [
    ["a", "b", "c", "d", "e"],
    ["f", "g", "h", "i/j", "k"],
    ["l", "m", "n", "o", "p"],
    ["q", "r", "s", "t", "u"],
    ["v", "w", "x", "y", "z"],
  ];
  
//******************************STARTING POLYBIUS*********************************************
  function polybius(input, encode = true) {
    // your solution code here

    // Encoding
      // input: string(alphabet)
      // output: string(number)
      // CAPITAL letters can be ignored(.toLowerCase()).
    const newStringInput = input.toLowerCase().split("");
    // Decoding
      // input string(number)
    const newNumArray = [];
    let result = "";
//******************************STARTING ENCODING*********************************************
    // Encoding
    // i: iterate input string
    for (let i = 0; i < newStringInput.length; i++) {
      // j: iterate square array by array
      for (let j = 0; j < polybiusSquare.length; j++) {
        // k: iterate value in array[j]
        for (let k = 0; k < polybiusSquare[j].length; k++) {
          if (polybiusSquare[j][k] === newStringInput[i]) {
            // index in array start with "0", so "+1"
            let stringRow = (j + 1).toString();
            let stringColumn = (k + 1).toString();
            // result = columnValue + rowValue
            result += stringColumn + stringRow;
          }
        }
      }
      //if there is " " in input, stay " "
      if (newStringInput[i] === " ") {
        result += " ";
      }
      if (newStringInput[i] === "i" || newStringInput[i] === "j"){
        result += "42";
      }
    }
//******************************ENDING ENCODING*********************************************

//******************************STARTING DECODING*********************************************
    //Decoding
    if (!encode) {
      let splitNumArray = input.split("");
      for (let i = 0; i < splitNumArray.length; i++) {
        if (splitNumArray[i] === " ") {
          // Not to lost data of pair[0] or pair[1], push " ", " "
          newNumArray.push(" ", " ");
        } else {
        newNumArray.push(Number(splitNumArray[i]));
        }
      }
    }
      //making a pair number to convert to string(alphabet)
      
      try{
      for (let i = 0; i < newNumArray.length; i += 2) {
        let pair = [];
        pair[0] = newNumArray[i];
        pair[1] = newNumArray[i + 1];
        
        // input(string(the number of characters) excluding spaces(" ")) should be even
        // otherwise, return false!!!
        if (pair[0] === undefined || pair[1] === undefined) {
          throw new Error("should return false if the length of all numbers is odd");
            // Space(" ") should be maintained throughout.
          } else if (pair[0] === " ") {
            result += " ";
          } else {
            // to match number of index related polybiusSquare.
            result += polybiusSquare[pair[1] - 1][pair[0] - 1];
          }
        }
      } catch(error) {
        return false;
      }
//******************************ENDING DECODING*********************************************
      // to remove " " which is appears at the first of the result.
        const splitString = result.split("");
        if (splitString[0] === " ") {
          splitString.shift();
        }
        return splitString.join("");
    }
//******************************ENDING POLYBIUS*********************************************
    return {
      polybius,
    };
})();

module.exports = { polybius: polybiusModule.polybius };
