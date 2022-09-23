// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius() submission tests written by Jonathan Park", () => {
  describe("encoding a message", () => {
    it("should encode a message by translating each letter to number pairs", () => {
      const message = "Park";
      const actual = polybius(message);
      const expected = "53112452";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "Jonathan";
      const actual = polybius(message);
      const expected = "4243331144321133";

      expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
      const message = "Jonathan Park";
      const actual = polybius(message);
      const expected = "4243331144321133 53112452";

      expect(actual).to.equal(expected);
    });
  });

  describe("decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "53112452";
      const actual = polybius(message, false);
      const expected = "park";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4243331144321133";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("should leave spaces as is", () => {
      const message = "4243331144321133 53112452";
      const actual = polybius(message, false);
      const expected = "i/jonathan park";

      expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
      const message = "4243331144321133 531124520";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});
