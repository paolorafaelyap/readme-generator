const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const { get } = require('http');
const getApi = require('./api');
const generateMarkdown = require('./utils/generateMarkdown.js')

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
  const yourInput = await inquirer.prompt(questions);
  console.log("You responded with:", yourInput);
  console.log("Now getting Github data");
  // github api to get user info
  const yourInfo = await getApi.getUser(yourInput);
  console.log("Github user info: ", yourInfo);
  //markdown is populated with user input and user info
  const markdown = generateMarkdown(yourInput, yourInfo);
  console.log(markdown);
  //the markdown is then transferred over to the README.md file
  await writeFileAsync('exampleReadMe.md', markdown);
  } catch (err) {
    console.log(err)
  }
}

// function call to initialize program
init();
