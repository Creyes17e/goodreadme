const inquirer = require("inquirer");
const fs = require("fs");
// Array of questions for user
const questions = [
  { type: "input", message: "What is your project title?", name: "Title" },
  {
    type: "input",
    message: "Describe your project to users:",
    name: "Description",
  },
  {
    type: "input",
    message: "What are the installation steps you took?",
    name: "Installation",
  },
  { type: "input", message: "Provide instructions for use:", name: "Usage" },
  {
    type: "input",
    message:
      "Include any links, names of anyone or anything that helped you build this project:",
    name: "Credits",
  },
  { type: "input", message: "Include your license (if any):", name: "License" },
];

// Function to write README file
function writeToFile(fileName, data) {
  var fileName = data.name.toLowercase().split(" ").join("") + ".json";
  fs.writeFile(fileName, JSON.stringify(data, null, "\t"), (err) => {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// Function to initialize program
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile(fileName, data);
  });
}

// Function call to initialize program
init();
