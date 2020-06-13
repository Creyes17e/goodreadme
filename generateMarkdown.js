// function to generate markdown(template) for README
function generateMarkdown(userResponse) {
  // console.log(userResponse);
  return `# ${userResponse.Title} -- [![License](https://img.shields.io/badge/license-${userResponse.License}-green.svg)](https://shields.io/)

# Live Site
${userResponse.githubUrl}

## Description
${userResponse.Description}

## Table of Contents
* [Installation](#Installation)
* [Usage](#Usage)
* [Credits](#Credits)
* [License](#License)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${userResponse.Installation}

## Usage
${userResponse.Usage}

## Credits
${userResponse.Credits}

## License
License:${userResponse.License}

## Tests
${userResponse.Tests}

## Questions
If you have any questions my Github Link is  https://github.com/${userResponse.Username} or you can reach me through email ${userResponse.Email}

`;
}

module.exports = generateMarkdown;
