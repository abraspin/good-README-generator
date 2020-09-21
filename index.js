var inquirer = require("inquirer");
var fs = require("fs");
var generateMarkdown = require("./utils/generateMarkdown.js");

// array of question Objects for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the Title of your project?",
  },

  // {
  //   type: "input",
  //   name: "description",
  //   message: "What is your project Description?",
  // },
  // {
  //   type: "editor",
  //   name: "installation",
  //   message: "What are the Installation instructions?",
  // },
  // {
  //   type: "editor",
  //   name: "usage",
  //   message: "What is the Usage information?",
  // },
  {
    //TODO: Should we only let them select one? or multiple?
    type: "list",
    name: "license",
    message: "Choose License options:",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense",
    ],
  },
  // {
  //   type: "editor",
  //   name: "contributing",
  //   message: "What are the Contribution guidelines?",
  // },
  // {
  //   type: "editor",
  //   name: "tests",
  //   message: "Enter Testing instructions:",
  // },

  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your Email Address to be contacted with questions:",
  },
];

// function to initialize program
function init() {
  console.log(
    "\n Welcome! Let's make a good README! \n Some prompts will open your text editor, just type your response then exit the editor to continue!"
  );

  //prompt the user once for each element in questions array
  inquirer.prompt(questions).then(function (data) {
    //filename will be user-entered title-README.md
    const filename = `${data.title.toLowerCase().split(" ").join("-")}-README.md`;

    const fileContent = generateMarkdown(data);

    // write the README file!
    fs.writeFile(filename, fileContent, function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("Your good README has been successfully generated!");
    });
  });
}

// function call to initialize program
init();
