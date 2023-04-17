const Text = require("../text.js");

// Testing the text render method
describe("Text", () => {
  describe("text.render", () => {
    it("should return text with the given color", () => {
      const text = new Text("Hello World", "black");
      expect(text.render()).toBe(
        `<text x="50%" y="50%" text-anchor="middle" fill="black" font-size="50px">HELLO WORLD</text>`
      );
    });
  });
});
