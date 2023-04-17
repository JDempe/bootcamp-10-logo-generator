const AnswerValidation = require("../answerValidation.js");
const answerValidation = new AnswerValidation();

// Testing the color Validation for a true keyword
describe("answerValidation", () => {
  describe("colorValidation", () => {
    it("should return true when an appropriate color keyword is selected", () => {
      expect(answerValidation.colorValidation("blue")).toBe(true);
    });
  });
});

// Testing the color Validation for a true hex code
describe("answerValidation", () => {
  describe("colorValidation", () => {
    it("should return true when an appropriate hex code is selected", () => {
      expect(answerValidation.colorValidation("#FFFFFF")).toBe(true);
    });
  });
});

// Testing the color Validation for a false keyword
describe("answerValidation", () => {
  describe("colorValidation", () => {
    it("should return false when an inappropriate color keyword is selected", () => {
      expect(answerValidation.colorValidation("bluee")).toBe(
        "Please enter a valid keyword or hex code.  Go to https://www.w3schools.com/colors/colors_names.asp for a list of keywords or https://www.w3schools.com/colors/colors_picker.asp for a hex code."
      );
    });
  });
});

// Testing the color Validation for a false hex code
describe("answerValidation", () => {
  describe("colorValidation", () => {
    it("should return false when an inappropriate hex code is selected", () => {
      expect(answerValidation.colorValidation("#FFXFFF")).toBe(
        "Please enter a valid keyword or hex code.  Go to https://www.w3schools.com/colors/colors_names.asp for a list of keywords or https://www.w3schools.com/colors/colors_picker.asp for a hex code."
      );
    });
  });
});

// Testing the text Validation for a true answer
describe("answerValidation", () => {
  describe("textValidation", () => {
    it("should return true when an appropriate text is selected", () => {
      expect(answerValidation.textValidation("ABC")).toBe(true);
    });
  });
});

// Testing the text Validation for a false answer
describe("answerValidation", () => {
  describe("textValidation", () => {
    it("should return false when an inappropriate text is selected", () => {
      expect(answerValidation.textValidation("ABCD")).toBe(
        "Please enter 1-3 characters."
      );
    });
  });
});

// Testing the text Validation for a false answer
describe("answerValidation", () => {
  describe("textValidation", () => {
    it("should return false when an inappropriate text is selected", () => {
      expect(answerValidation.textValidation("")).toBe(
        "Please enter 1-3 characters."
      );
    });
  });
});