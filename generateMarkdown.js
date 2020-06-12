// function to generate markdown for README
function generateMarkdown(data) {
  console.log(data);
  return `# ${data.Title}

`;
}

module.exports = generateMarkdown;
