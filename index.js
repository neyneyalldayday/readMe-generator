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
    type: "confirm",
    message: "Would you like to include the contributors covenant?",
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
            const description = `\n \n## Description\n${response.description}`;
            const installation = `\n \n## Installation\n${response.installation}`;
            const usage = `\n \n## usage\n${response.usage}`;
            const contributor = `\n \n## contibutor\n${response.contributor}`;
            const licence = `\n \n## Licence\n${response.licence}`;
            const tests = `\n \n## Tests\n${response.tests}`;
            const username = `\n \n## Username\n${response.username}`;
            const email = `\n \n## Email\n${response.email}`;
            const readmeToWrite = title + description + installation + usage + contributor + tests + licence + username + email
            await writeFileAsync("README.md", readmeToWrite);
            console.log("README created")
        } catch(err) {
            console.log(err)
        }
    }
    // function to write README file
    writeReadme();
})


