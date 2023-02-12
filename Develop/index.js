// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const createMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    // Title name only at top of readme
    {
        type: "input",
        name: "title",
        message: "What is the name of your project?",
    },
    // {
    //     type: "input",
    //     name: "description",
    //     message: "How would you describe your project?",
    // },
    // // Installation section of readme
    // {
    //     type: "input",
    //     name: "installation",
    //     message: "What command is needed to install the necessary dependencies?",
    // },
    // // Usage section of readme
    // {
    //     type: "input",
    //     name: "usage",
    //     message: "How is your project used?",
    // },
    // Give license options to choose from and coordinate license badge(adds badge to top of readme)
    {
        type: "list",
        name: "license",
        message: "What license would you like to use?",
        choices: ["Apache", "MIT", "GPL", "BSD", "None"],
    },
    // contribution guidelines
    // {
    //     type: "input",
    //     name: "contributing",
    //     message: "What are your contribution guidelines?",
    // },
    // {
    //     type: "input",
    //     name: "tests",
    //     message: "What command should be used to run tests?",
    // },
    // // Questions section -username(as link to github) and email
    // {
    //     type: "input",
    //     name: "username",
    //     message: "What is your GitHub username?",
    // },
    // {
    //     type: "input",
    //     name: "email",
    //     message: "What is your email?",
    // },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {}
    inquirer.prompt(questions).then((responseInput) => {
        console.log('Creating your README.md file...');
        writeToFile('README.md', createMarkdown({...responseInput}));
    });

// Function call to initialize app
init();
