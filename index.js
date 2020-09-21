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

  {
    type: "input",
    name: "description",
    message: "What is your project Description?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the Installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the Usage information?",
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose License options:",
    choices: ["license1", "license2", "license3", "license4"],
  },
  {
    type: "input",
    name: "contributing",
    message: "What are the Contribution guidelines?",
  },
  {
    type: "input",
    name: "tests",
    message: "Enter Testing instructions:",
  },

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

// function to write README file
function writeToFile(fileName, data) {}

// function to initialize program
function init() {
  console.log("Welcome! Let's make a good README! \n");

  //prompt the user once for each element in questions array
  inquirer.prompt(questions).then(function (data) {
    // console.log("You entered:");
    // data.forEach((element) => console.log(element));
    // for (const [key, value] of data) {console.log(`${key}: ${value}`);}
    // console.log(data);

    //filename will be user-entered title-README.md
    const filename = `${data.title.toLowerCase().split(" ").join("-")}-README.md`;
    // console.log("filename", filename);

    const fileContent = generateMarkdown(data);
    // console.log("fileContent", fileContent);

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
