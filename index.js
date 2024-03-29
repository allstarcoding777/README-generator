// packages needed for this application
// inquirer is a Node module that allows us to interact with the user via the command line
const inquirer = require('inquirer');
// fs is a Node module that allows us to write files
const fs = require('fs');
// allows us to takes user's responses and put them in the gernerateMarkdown file
const path = require('path');
// requires the generateMarkdown file
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the purpose of your project.',
    },
    {   type: 'input',
    name: 'license',
    message: 'What license would you like to use?',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
},
    {
        type: 'input',
        name: 'usage',
        message: 'Describe how to use your project.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your Github username?',
    },
    {
        type: 'input',
        name: 'name',
        message: 'State your name.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please provide your email address.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Please list any contributors to your project. (If none, please type "none")',
    },
    {
        type: "input",
        name: "link",
        message: "Provide the URL where a user can access your deployed application."
    },
];

// function to write README file
// function writeToFile with fileName and data parameters
function writeToFile(fileName, data) {
    // writeFileSync is a method that allows us to write a file
    // path.join is a method that allows us to join the current working directory with the file name
    // process.cwd() is a method that allows us to get the current working directory
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}


// creates a function to initialize app
function init() {
    // pass in the questions array as a prompt
    inquirer.prompt(questions)
    // pass in the answers parameter
    .then((answers) => {
        // pass in the fileName and data parameters
        // ...answers is a spread operator that allows us to pass in all of the answers
        console.log("Creating README.md...");
        // writes file to the chosen directory
        writeToFile("./dist/README.md", generateMarkdown({...answers}));
    });
}

// Function call to initialize app
init();
