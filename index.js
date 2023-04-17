// Inquirer prompts to get user input on shape (circle, square, triangle), shape color, text (1-3 characters), and text color
// outputs to logo.svg

const inquirer = require("inquirer");
const fs = require("fs");

// The following code is from https://www.npmjs.com/package/css-color-names
const csscolors = require('css-color-names');
const cssColorKeywords = Object.keys(csscolors);

const questions = [
   {
      type: 'list',
      name: 'shape',
      message: 'What shape would you like?',
      choices: ['circle', 'square', 'triangle'],
   },
   {
      type: 'input',
      name: 'shapeColor',
      message: 'What color would you like the shape?  Enter a color keyword or hex code.',
      validate: colorValidation,
   },
   {
      type: 'input',
      name: 'text',
      message: 'What text would you like?',
      validate: function (value) {
         var pass = value.match(/^[0-9A-Z]{1,3}$/i);
         if (pass) {
            return true;
         }

         return 'Please enter 1-3 characters.';
      },
   },
   {
      type: 'input',
      name: 'textColor',
      message: 'What color would you like the text?  Enter a color keyword or 6 character hex code, please include the hash mark! (e.g. #FFFFFF)', 
      validate: colorValidation,
   },
];

// TODO import?  import all validations?  so we can test them?
function colorValidation(value) {
   if (value.match(/^#[0-9A-F]{6}$/i) || cssColorKeywords.includes(value)){
      return true;
   }
   return 'Please enter a valid keyword or hex code.  Go to https://www.w3schools.com/colors/colors_names.asp for a list of keywords or https://www.w3schools.com/colors/colors_picker.asp for a hex code.';
}

inquirer.prompt(questions).then(answers => {
   console.log(answers);
   // fs.writeFile("logo.svg", answers, function(err) {
   //    if (err) {
   //       return console.log(err);
   //    }
   //    console.log("The file was saved!");
   // });
});
