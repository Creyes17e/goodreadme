// function to generate markdown for README
function generateMarkdown(userResponse) {
  console.log(userResponse);
  return `# ${userResponse.Title} && ${userResponse.License}
##Live Site
${userResponse.url}
##
${userResponse.Description}
##Table of Contents
##Installation
${userResponse.Installation}
##Usage
${userResponse.Usage}
##Credits
${userResponse.Credits}
##License
License:${userResponse.License}
`;
}

module.exports = generateMarkdown;
