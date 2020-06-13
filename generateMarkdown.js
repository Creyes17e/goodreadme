// function to generate markdown for README
function generateMarkdown(userResponse) {
  console.log(userResponse);
  return `# ${userResponse.Title} -- ${userResponse.License}

# Live Site
${userResponse.githubUrl}

## Description
${userResponse.Description}

## Table of Contents
* [Installation] (#Installation)
* [Usage] (#Usage)
* [Credits] (#Credits)
* [License] (#License)
* [Tests] (#Tests)
* [Questions] (#Questions)

## Installation
${userResponse.Installation}

## Usage
${userResponse.Usage}

## Credits
${userResponse.Credits}

## License
License:${userResponse.License}

## Tests
To test if this CLI App is functioning before displaying it in your README.md in the function init(), change the "README.md" to "Test-README.md", this will update the test file and will display the information that the user has inputted.

## Questions
If you have any questions my github username is ${userResponse.Username} or you can reach me through email ${userResponse.Email}

`;
}

module.exports = generateMarkdown;
