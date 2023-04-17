// Create a new shape svg method
class Shape {
  constructor(shapeColor) {
    this.shapeColor = shapeColor;
  }
}

// Create a new square svg method
// TODO:  add sideLength
class Square extends Shape {
  constructor(shapeColor, sideLength) {
    super(shapeColor);
    this.sideLength = sideLength;
  }
  render() {
    return `<rect x="75" y="25" width="150" height="150" fill="${this.shapeColor}"/>`;
  }
}

// Create a new triangle svg method
// TODO:  add sideLength
class Triangle extends Shape {
  constructor(shapeColor, sideLength) {
    super(shapeColor);
    this.sideLength = sideLength;
  }
  render() {
    return `<polygon points="75,25 225,25 150,175" fill="${this.shapeColor}"/>`;
  }
}

// Create a new circle svg method
// TODO: add radius
class Circle extends Shape {
  constructor(shapeColor, radius) {
    super(shapeColor);
    this.radius = radius;
  }
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.shapeColor}"/>`;
  }
}

// Export the new methods
module.exports = { Square, Triangle, Circle };
