// TODO: Include packages needed for this application
const inquirer = require("inquirer");
// const usedMD = require("./utils/generateMarkdown");
const fs = require('fs');
const toc = "[Title](#Title) [Description](#Description) [Installation](#Installation) [Usage](#Usage) [Contributors](#Contributors) [License](#License) [Test Instructions](#Testing) [Questions?](#Questions)"
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Please enter your title.',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Please enter a description.',
  },
  
  {
    type: 'input',
    name: 'installation',
    message: 'Please describe installation.',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Please enter the usage.',
  },
  {
    type: 'input',
    name: 'license',
    message: 'Please enter the licensing.',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Please enter contributors.',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Please enter your test instructions.',
  },
  {
    type: 'input',
    name: 'questions',
    message: 'Please enter your github username.',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Please enter your email address.',
  },
];

// TODO: Create a function to write README file
function writeToFile() {
  fs.writeFile('genreadme.md', "", (err) =>
    err ? console.error(err) : console.log('')
  );
}

writeToFile()

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    fs.appendFile('genreadme.md', '#' + ' ' + 'title' + '\n' + answers.title + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );
 fs.appendFile('genreadme.md', '#' + ' ' + 'description' + '\n' + answers.description + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );
 fs.appendFile('genreadme.md', '#' + ' ' + 'Table of Contents' + '\n' + toc + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );
 fs.appendFile('genreadme.md', '#' + ' ' + 'Installation' + '\n' + answers.installation + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );
 fs.appendFile('genreadme.md', '#' + ' ' + 'Usage' + '\n' + answers.usage + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );
 fs.appendFile('genreadme.md', '#' + ' ' + 'License' + '\n' + answers.license + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );
 fs.appendFile('genreadme.md', '#' + ' ' + 'Contributors' + '\n' + answers.contributing + '\n', (err) =>
 err ? console.error(err) : console.log('')
);
fs.appendFile('genreadme.md', '#' + ' ' + 'Testing' + '\n' + answers.tests + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );
fs.appendFile('genreadme.md', '#' + ' ' + 'Questions?' + '\n' + "https://github.com/" + answers.questions + '\n' + answers.email + '\n', (err) =>
   err ? console.error(err) : console.log('')
 );


 
 
   
  }
  )
}
// Function call to initialize app
init();
