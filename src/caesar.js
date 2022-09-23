// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
    //mathematical algorithm(shiftEncode)
    //try & catch(caesar)

  // inputAlphabet: the data of array which is splitted of input(message) to alphabet
  function shiftEncode(inputAlphabet, shift) {
    // to compare with inputAlphabet, list the alphabet in the array
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    // Space and other nonalphabetic symbols should be maintained.
    if (!inputAlphabet.match(/[a-z]/g)) {
      return inputAlphabet;
    }
    //find the index no# of inputAlphabet.
    let index = alphabet.indexOf(inputAlphabet);
    // a=0 ~ z=25 ; a=26(-26) ~ z=51(-26) ; a=-26(+26) ~ z=-1(+26)
    // better to apply into the .indexOf(), make the remainder number between 0~25.
    const result = (((index + shift) % 26) + 26) % 26;
    // returning result of after shifted alphabet.
    return alphabet[result];
  }

  function caesar(input, shift, encode = true) {
    // your solution code here
    try {
      //return error(false)
      // if "shift" value is not present, 0, 25 < shift, shift < -25
      if (!shift || shift === 0 || shift < -25 || shift > 25)
        throw new Error(
          "should return false if the shift value is not present, equal to 0, less than -25 or greater than 25"
        );
      // switching encoder & decoder shift((+)<->(-))
      shift *= encode ? 1 : -1;
      // Space(" ") should be maintained
        // .split("") : string -> return Array([]);
        // .join("") : Array([]) -> string
      // .map() : create a new Array([]) populated with the results of calling a provided funtion on every element in the calling array
      return input
        .toLowerCase()
        .split("")
        .map((inputAlphabet) => shiftEncode(inputAlphabet, shift))
        .join("");
    } catch (error) {
      return false;
    }
  }
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
