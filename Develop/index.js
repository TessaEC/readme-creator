// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const createMarkdown = require("./utils/generateMarkdown")
const path = require('path');
const process = require('process');

// An array of questions for user input
const questions = [
    // Intro to readme with title and description
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your project?",
    },
    // Installation section of readme
    {
        type: "input",
        name: "installation",
        message: "What command is needed to install the necessary dependencies?",
    },
    // Usage section of readme
    {
        type: "input",
        name: "usage",
        message: "How is your project used?",
    },
    // Give license options to choose from and coordinate license badge(adds badge to top of readme)
    {
        type: "list",
        name: "license",
        message: "Choose a license.",
        choices: ["Apache", "MIT", "GPL", "BSD", "None"],
    },
    // contribution guidelines
    {
        type: "input",
        name: "contributing",
        message: "What are your contribution guidelines?",
    },
    {
        type: "input",
        name: "tests",
        message: "What command should be used to run tests?",
    },
    // Questions section username and email
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
    },
    {
        type: "input",
        name: "email",
        message: "What is your email?",
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {}
    inquirer.prompt(questions).then((responseInput) => {
        console.log('Success! Creating your README.md file...');
        writeToFile('README.md', createMarkdown({...responseInput}));
    });

// Function call to initialize app
init();
