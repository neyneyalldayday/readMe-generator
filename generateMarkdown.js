// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

function renderLicenseBadge(license) {
  if (license !== 'None') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
}

function renderLicenseLink() {
  if (license !== 'None') {
    return `\n* [License](#license)\n`;
  }
  return '';
}

function renderLicenseSection(license) {
  if (license !== 'None') {
    return `## License
    This project is licensed under the ${license} license.
    `;
  }
  return '';
}



module.exports = generateMarkdown;
