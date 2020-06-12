const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//Generates the README template
const generateMarkdown = require("./generateMarkdown");
//Writes to file
const writeFileAsync = util.promisify(fs.writeFile);
// Array of questions for user
const questions = [
  { type: "input", message: "What is your project title?", name: "Title" },
  {
    type: "input",
    message: "Describe your project to users:",
    name: "Description",
  },
  // {
  //   type: "input",
  //   message: "Would you like to add a table of contents?",
  //   name: "Table of Contents",
  // },
  {
    type: "input",
    message: "What are the installation steps you took?",
    name: "Installation",
  },
  { type: "input", message: "Provide instructions for usage:", name: "Usage" },
  {
    type: "input",
    message:
      "Include any links, names of anyone or anything that helped you build this project:",
    name: "Credits",
  },
  {
    type: "list",
    message: "Choose your license:",
    choices: [
      "None",
      "Academic Free License",
      "Boost Software License",
      "MIT",
      "ISC",
      "Microsoft Public Licence",
      "The Unlicense",
    ],
    name: "License",
  },
  {
    type: "input",
    message: "Input your github username:",
    name: "Github.Username",
  },
  {
    type: "input",
    message: "Input your email address:",
    name: "Email",
  },
];
//Prompts questions to User
function promptUser() {
  return inquirer.prompt(questions);
}
// Function to write README file
// function writeToFile(data) {
//   var fileName = data.toLowerCase().split(" ").join("") + ".md";
//   fs.writeFile(fileName, JSON.stringify(data, null, "\t"), function (err) {
//     if (err) {
//       return console.log(err);
//     }
//     console.log("Success!");
//   });
// }

// Function to initialize program
async function init() {
  try {
    const userResponse = await promptUser();

    const readMeInfo = generateMarkdown(userResponse);

    await writeFileAsync("Test-README.md", readMeInfo);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize program
init();
