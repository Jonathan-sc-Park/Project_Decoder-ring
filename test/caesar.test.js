const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar() submission tests written by Jonathan Park.", () => {
    //error handling
  describe("error handling", () => {

    it("should return false if the shift value is not present", () => {
        const message = "Jonathan Park";
        const shift = null;
        const actual = caesar(message, shift);
  
        expect(actual).to.be.false;
      });
    it("should return false if the shift amount is equal to 0", () => {
      const message = "Jonathan Park ";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is greater than 25", () => {
      const message = "Jonathan Park";
      const shift = 30;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "Jonathan Park";
      const shift = -30;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  // Encoding Part
    // if value of shift is (+)
    describe("encoding a message", () => {
        it("should encode a message by shifting the letters", () => {
            const message = "jonathan";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "mrqdwkdq";
            
            expect(actual).to.equal(expected);
        });
        
        it("should leaves spaces and other symbols as is", () => {
            const message = "jonathan park.";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "mrqdwkdq sdun.";
            
            expect(actual).to.equal(expected);
        });
        
        it("should ignore capital letters", () => {
            const message = "Jonathan Park";
            const shift = 3;
            const actual = caesar(message, shift);
            const expected = "mrqdwkdq sdun";
            
            expect(actual).to.equal(expected);
        });
        
        it("should appropriately handle letters at the end of the alphabet", () => {
            const message = "The yesterday";
            const shift = 5;
            const actual = caesar(message, shift);
            const expected = "ymj djxyjwifd";
            
            expect(actual).to.equal(expected);
        });
        
        // if value of shift is (-)
        it("should allow for a negative shift that will shift to the left", () => {
            const message = "The yesterday";
            const shift = -5;
            const actual = caesar(message, shift);
            const expected = "ocz tznozmyvt";
            
            expect(actual).to.equal(expected);
    });
  });


  // Decoding Part
    // if value of shift is (+)
  describe("decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "mrqdwkdq";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "jonathan";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "mrqdwkdq sdun.";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "jonathan park.";

      expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
      const message = "mrqdWkdQ SduN";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "jonathan park";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "ymj djxyjwifd";
      const shift = 5;
      const actual = caesar(message, shift, false);
      const expected = "the yesterday";

      expect(actual).to.equal(expected);
    });

    // if value of shift is (-)
    it("should allow for a negative shift that will shift to the left", () => {
      const message = "ocz tznozmyvt";
      const shift = -5;
      const actual = caesar(message, shift, false);
      const expected = "the yesterday";

      expect(actual).to.equal(expected);
    });
  });
});
