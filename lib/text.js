// Description: Text class for the logo generator.
class Text {
  constructor(text, textColor) {
    this.text = text;
    this.textColor = textColor;
  }
   render() {
      return `<text x="50%" y="115" text-anchor="middle" fill="${this.textColor}" font-size="60px">${this.text.toUpperCase()}</text>`;
   }
}

module.exports = Text;