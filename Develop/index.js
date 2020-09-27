// array of questions for user
// const questions = [

// ];

// // function to write README file
// function writeToFile(fileName, data) {
// }

// // function to initialize program
// function init() {

// }

// // function call to initialize program
// init();


const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);



function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title?"
    },
    {
      type: "input",
      name: "description",
      message: "what is the description of your app?"
    },
    {
       type: "input",
       name: "install",
       message: "How do you install the app?"
    },
    {
      type: "input",
      name: "usage",
     message: "How do I used this application?"
    },
    {
        type: "list",
        name: "licence",
       message: "what type a license do you want", 
       choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },

    {
      type: "input",
      name: "contributing",
      message: "What can I do to help"
    },
    {
      type: "input",
      name: "tests",
      message: "I'm going to write the test from scratch."
    }
  ]);
}

function generateMD(answers) {
  return `
  # Title: ${answers.title}
  
  ## Table of Contents:
  
  * Description
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions

  ## Description: ${answers.description}
  
  ## Installation: ${answers.install}
  ## Usage: ${answer.usage}
  ## License: ${answers.license}
  ## Contributing: ${answers.contributing}
  ## Tests: ${answers.tests}
`
}

promptUser()
  .then(function(answers) {
    const MD = generateMD(answers);

    return writeFileAsync("README.md", MD);
  })
  .then(function() {
    console.log("Successfully wrote to README.md");
  })
  .catch(function(err) {
    console.log(err);
  });
