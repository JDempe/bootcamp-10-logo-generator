const Shape = require("../shapes.js");

// Testing the square render method
describe("Shape", () => {
  describe("square.render", () => {
    it("should return a square with the given color", () => {
      const shape = new Shape.Square("blue");
      expect(shape.render()).toBe(
        `<rect x="75" y="25" width="150" height="150" fill="blue"/>`
      );
    });
  });
});

// Testing the triangle render method
describe("Shape", () => {
  describe("triangle.render", () => {
    it("should return a triangle with the given color", () => {
      const shape = new Shape.Triangle("red");
      expect(shape.render()).toBe(
        `<polygon points="75,175 225,175 150,25" fill="red"/>`
      );
    });
  });
});

// Testing the circle render method
describe("Shape", () => {
  describe("circle.render", () => {
    it("should return a circle with the given color", () => {
      const shape = new Shape.Circle("green");
      expect(shape.render()).toBe(
        `<circle cx="150" cy="100" r="75" fill="green"/>`
      );
    });
  });
});
