// Description: This is the main file for the logo generator.  It will prompt the user for input and then generate the logo.

// Import third party modules
const inquirer = require("inquirer");
const fs = require("fs");


// Import custom classes
// Answer validation class
const { answerValidation } = require("./lib/answerValidation");
const answerValidation = new answerValidation();

// Shape classes
const { Square, Triangle, Circle } = require("./lib/shapes");
const { Text } = require("./lib/text");

const questions = [
  {
    type: "list",
    name: "shape",
    message: "What shape would you like?",
    choices: ["circle", "square", "triangle"],
  },
  {
    type: "input",
    name: "shapeColor",
    message:
      "What color would you like the shape?  Enter a color keyword or hex code.",
    validate: answerValidation.colorValidation,
  },
  {
    type: "input",
    name: "text",
    message: "What text would you like?",
    validate: answerValidation.textValidation,
  },
  {
    type: "input",
    name: "textColor",
    message:
      "What color would you like the text?  Enter a color keyword or 6 character hex code, please include the hash mark! (e.g. #FFFFFF)",
    validate: answerValidation.colorValidation,
  },
];

inquirer.prompt(questions).then((answers) => {
  // Display Results
  console.log(answers);

  // Determine which shape was selected and create the shape class
  switch (answers.shape) {
    case "circle":
      var shape = new Circle(answers.shapeColor);
      break;
    case "square":
      var shape = new Square(answers.shapeColor);
      break;
    case "triangle":
      var shape = new Triangle(answers.shapeColor);
      break;
    default:
      console.log("Something went wrong.");
      break;
  }

  //   Create text class for rendering text
  const text = new Text(answers.text, answers.textColor);

  const finalSVG = `<svg width="300" height="200" style="background-color:white">
   ${shape.render()}
   ${text.render()}
   </svg>`;

  fs.writeFile("logo.svg", finalSVG, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was saved!");
  });
});
