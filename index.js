const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
{
    type: 'input',
    message: "What is your GitHub username? (No @ needed)",
    name: 'username',
    default: 'paolorafaelyap',
    validate: function (answer) {
      if (answer.length < 1) {
          return console.log("Please use a Github username.");
      }
      return true;
    }
},
{
  type: 'input',
  message: "What is the name of your GitHub repo?",
  name: 'repo',
  default: 'readme-generator',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please use a valid Github repo.");
      }
        return true;
      }
},
{
  type: 'input',
  message: "What is the title of your new project?",
  name: 'title',
  default: 'Untitled Project',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("Please choose a title for your project.");
      }
        return true;
      }
},
{
  type: 'input',
  message: "What is the project description?",
  name: 'description',
  default: 'Description',
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("A valid GitHub repo is required for a badge.");
      }
        return true;
      }
}
];

// function to write README file
function writeToFile(fileName, data) {
  false.writeToFile(fileName, data, err => {
    if (err) {
      return console.log(err);
    }
    console.log("README.md file generated")
  })
}

// function to initialize program
const init = async () => {
  //for prompting questions
  try {
  const yourResponses = await inquirer.prompt(questions);
  console.log("You responded with:", yourResponses);
  console.log("Now getting Github data");

  const yourInfo = await writeFileAsync('readMe.md', yourResponses);
  console.log("Github user info: ", yourInfo);
  } catch (err) {
    console.log(err)
  }
}

// function call to initialize program
init();
