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
${userResponse.Tests}

## Questions
If you have any questions my github username is ${userResponse.Username} or you can reach me through email ${userResponse.Email}

`;
}

module.exports = generateMarkdown;
