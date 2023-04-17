const csscolors = require("css-color-names");
const cssColorKeywords = Object.keys(csscolors);

function AnswerValidation() {};

AnswerValidation.prototype.colorValidation = (value) => {
  if (value.match(/^#[0-9A-F]{6}$/i) || cssColorKeywords.includes(value)) {
    return true;
  }
  return "Please enter a valid keyword or hex code.  Go to https://www.w3schools.com/colors/colors_names.asp for a list of keywords or https://www.w3schools.com/colors/colors_picker.asp for a hex code.";
};

// validate answer
AnswerValidation.prototype.textValidation = (value) => {
  if (value.match(/^[0-9A-Z]{1,3}$/i)) {
    return true;
  }
  return "Please enter 1-3 characters.";

  // validate answer
};

// Export the new methods
module.exports = AnswerValidation;
