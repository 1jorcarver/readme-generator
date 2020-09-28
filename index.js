const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter the title of your project!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter the description of your project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter your project description!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'install',
        message: 'Enter your installation instructions (Required)',
        validate: installInput => {
          if (installInput) {
            return true;
          } else {
            console.log('Please provide the step-by-step installation instructions!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter how to use your project (Required)',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Provide instructions and examples for use.');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'credit',
        message: 'Enter who deserves credit (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Credit is due, where credit is due!');
            return false;
          }
        }
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Which license do you want for your project? (Select Only One)',
        choices: [
          '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)', 
          '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)', 
          '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)GNU GPL v3', 
          '[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
        ],
        validate: licenseCheckbox => {
          if (licenseCheckbox) {
            return true;
          } else {
            console.log('Please select a license!');
            return false;
          }
        }
      },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
    },
    {
        type: 'input',
        name: 'link',
        message: 'Enter the GitHub link to your profile. (Required)',
        validate: linkInput => {
          if (linkInput) {
            return true;
          } else {
            console.log('You need to enter a link to your GitHub profile!');
            return false;
          }
        }
      },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address!',
        validate: emailInput => {
          if (emailInput) {
            return true;
          } else {
            console.log('Please enter your email address!');
            return false;
          }
        }
    },
];

// function to write README file
function writeToFile(data) {
    fs.writeFile('README.md', data, (err) => {
        if (err) throw err;
        console.log('The README.md is ready to use!')
    });
};

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then((questionAnswers) => {
       console.log(questionAnswers);
        const mdString = generateMarkdown(questionAnswers);
        writeToFile(mdString);
    });
};

// function call to initialize program
init();
