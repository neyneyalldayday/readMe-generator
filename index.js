const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile)

inquirer
.prompt
// array of questions for user
 ([{
    type: "input",
    message: "What is your project title?",
    name: "title"
  },
  {
    type: "input",
    message: "Enter a description for your project.",
    name: "description"
  },
  {
    type: "input",
    message: "Enter installation requirements for your project.",
    name: "installation"
  },
  {
    type: "input",
    message: "Enter how your project should be used.",
    name: "usage"
  },
  {
    type: "input",
    message: "Would you like to include the contributors guidelines?",
    name: "contributor"
  },
  {
    type: "input",
    message: "Enter any tests on how to use your project.",
    name: "tests"
  },
  {
    type: "checkbox",
    name: "license",
    message: "Choose a license.",
    choices: [
      "GNU AGPLv3",
      "GNU GPLv3",
      "GNU LGPLv3",
      "Mozilla Public License 2.0",
      "Apache License 2.0",
      "MIT License",
      "Boost Software License 1.0",
      "The Unlicense"
    ]
  },
  {
    type: "input",
    message: "What is your Git Hub user name?",
    name: "username"
  },
  {
    type: "email",
    message: "What is your email",
    name: "email"
  },

  
])
.then(function(response){
    async function writeReadme() {
        try {
            const title = `# ${response.title}`;
            const description = `\n \n## Description\n \n${response.description}`;
            const tableOfCon = `\n \n## Table of Contents\n \n* [Installation](#Installation) \n* [Usage](#Usage) \n* [License](#License) \n* [contributor](#contributor) \n* [Tests](#Tests)\n* [username](#username) \n* [email](#email)`;
            const installation = `\n \n## Installation\n \n${response.installation}`;
            const usage = `\n \n## usage\n\n${response.usage}`;
            const contributor = `\n \n## contributor \n \n${response.contributor}`;
            const license = `\n \n## Licence\n\n![Badge](https://img.shields.io/badge/license-${response.license}-green)`;
            const tests = `\n \n## Tests\n${response.tests}`;
            const username = `\n \n## Username\n\n[Github Profile](https://github.com/${response.username}/)`;
            const email = `\n \n## Email\n\nI can be contacted at this email: <${response.email}>`;
            const readmeToWrite = title + description + tableOfCon + installation + usage + contributor + tests + license + username + email
            await writeFileAsync("README.md", readmeToWrite);
            console.log("README created")
        } catch(err) {
            console.log(err)
        }
    }
    // function to write README file
    writeReadme();
})



