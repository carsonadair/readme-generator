// Includes packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your project?',
        name: 'projTitleInput',
    },
    {
        type: 'input',
        message: 'What is your description?',
        name: 'descriptionInput',
    },
    {
        type: 'input',
        message: 'How do you install your project?',
        name: 'installInput',
      },
    {
        type: 'list',
        message: 'Select a license for your project.',
        name: 'licenseInput',
        choices: [
            'MIT License',
            'IBM',
            'Creative Common',
            'Mozilla Public License 2.0',
        ]
    },
    {
        type: 'input',
        message: 'How do you use your project?',
        name: 'usageInput',
    },
    {
        type: 'input',
        message: 'Describe how to test your project.',
        name: 'testInput',
    },
    {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contribInput',
    },
    {
        type: 'input',
        message: 'Please provide your Github username.',
        name: 'githubInput',
    }, 
    {
        type: 'input',
        message: 'Please provide your email.',
        name: 'emailInput',
    },
  ]

// Function to write README file and confirm
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => 
    err ? console.error(err): console.log('README.md has been successfully generated.')
    );
}
// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(userInputs){
        writeToFile('README.md', generateMarkdown(userInputs));
    })
}

// Function call to initialize app
init();
