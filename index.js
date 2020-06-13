const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
//Generates the README template
const generateMarkdown = require("./generateMarkdown");
//Writes to file
const writeFileAsync = util.promisify(fs.writeFile);
// Array of questions for user
const questions = [
  {
    type: "input",
    message: "What is the url for the live site?",
    name: "githubUrl",
  },
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
      "Mozzilla Public License",
      "Microsoft Public Licence",
      "The Unlicense",
    ],
    name: "License",
  },
  {
    type: "input",
    message: "What tests did you perform (if any)?",
    name: "Tests",
  },
  {
    type: "input",
    message: "Input your github username:",
    name: "Username",
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

// Function to initialize program
async function init() {
  try {
    const userResponse = await promptUser();

    const readMeInfo = generateMarkdown(userResponse);

    await writeFileAsync("README.md", readMeInfo);

    console.log("Successfully wrote to README.md");
  } catch (err) {
    console.log(err);
  }
}

// Function call to initialize program
init();
