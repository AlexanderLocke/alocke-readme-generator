// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// link to page where readme is sent
const generatePage = require('./utils/generateMarkdown.js');

// array of questions for user
const questions = () => {
    // using inquirer to prompt questions to user 
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is your project name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the project name');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a short description of your project.',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a description of the project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'How do you install your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the steps to install the project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this app?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the usage');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'What does the user need to know about contributing to the repo?',
            default: 'open-source'
        },
        {
            type: 'input',
            name: 'test',
            message: 'How does a user run tests?',
            default: 'npm test'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your GitHub username?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email address');
                    return false;
                }
            }

        },
        {
            type: 'list',
            name: 'license',
            message: 'What kind of license should your project have?',
            choices: ['MIT', 'CC', 'Apache'],
            default: ["MIT"],
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please choose a license');
                    return false;
                }
            }
        },
    ]);
};

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the README has been created 
        } else {
            console.log("Your README has been successfully created!")
        }
    })
};


// function call to initialize program
questions()
    .then(answers => {
        return generatePage(answers);
    })
    .then(data => {
        return writeToFile(data);
    })
    .catch(err => {
        console.log(err)
    })
